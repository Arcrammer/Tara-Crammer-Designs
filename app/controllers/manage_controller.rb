class ManageController < ApplicationController
  def index
    if !params[:user].nil?
      # The form was submitted
      user_returned = User.find_by(:username => params[:user][:username])
      if user_returned.nil? == false
        # The user was found; Attempt to authenticate the user
        authentication_status = user_returned.authenticate(params[:user][:submitted_password])
        if authentication_status
          session[:authenticated_user] = authentication_status
          flash[:correct_credentials] = true
        end
      else
        # No user exists for the username given; Refresh the page and tell them
        flash[:correct_credentials] = false
      end
    end
  end
  def create
    post_buffer = params[:blog_post]
    if !post_buffer.nil?
      # The title is not empty
      new_post = BlogPost.new
      new_post.title = post_buffer[:title]
      # Trim whitespace and add an array of tags to the :tags property
      new_post_tags = Array.new
      post_buffer[:tags].split(',').each do |tag|
        tag.strip!
        new_post_tags.push(tag)
      end
      new_post.tags = new_post_tags # Apparently this can only be set once
      # Write :body to a file in the 'full_posts' directory
      new_post.file_name = "p#{(0...8).map { (65 + rand(26)).chr }.join.downcase}"
      file_path = "#{Rails.root}/public/full_posts/_#{new_post.file_name}.html.erb"
      File.new(file_path, "w+")
      File.open(file_path, "w+") {|file| file.write(post_buffer[:body])}
      # Write :header_image to a file in the 'PostHeaderImages' directory
      file_path = "#{Rails.root}/public/images/post-header-images/#{new_post.file_name}.jpg"
      File.new(file_path, "w+")
      File.open(file_path, 2) {|file| file.write(post_buffer[:header_image].read.force_encoding(Encoding::UTF_8))}
      # Save it
      new_post.save
      redirect_to("/Portfolio")
    end
  end
  def delete
    @latest_posts = BlogPost.paginate({
      :page => params[:page],
      :per_page => 30
      }).order('created_at DESC') # The default is 5; Using the 'will_paginate' gem
    render("delete") # Show 'delete.html.erb'
  end
  def destroy_post
    if session[:authenticated_user] != nil
      post_to_destroy = BlogPost.find(params[:id])
      post_path = "public/full_posts/_#{post_to_destroy.file_name}.html.erb"
      header_image_path = "public/images/post-header-images/#{post_to_destroy.file_name}.jpg"
      
      # Delete the post from the database
      post_to_destroy.delete
      
      # Delete the posts' assets
      File.delete(post_path) if File.exist?(post_path)
      File.delete(header_image_path) if File.exist?(header_image_path)
      
      redirect_to("/Manage/Delete")
    end
  end
  def logout
    session.destroy
    redirect_to "/Manage"
  end
end
