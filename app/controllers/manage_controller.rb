class ManageController < ApplicationController
  def index
    if !params[:user].nil?
      # The form was submitted
      user_returned = User.find_by(:username => params[:user][:username])
      if user_returned.nil? == false
        # The user was found; Attempt to authenticate the user
        authentication_status = user_returned.authenticate(params[:user][:submitted_password])
        flash[:correct_credentials] = true
        redirect_to "/Manage/Create"
      else
        # No user exists for the username given; Refresh the page and tell them
        flash[:correct_credentials] = false
      end
    end
  end
  def create
    logger.debug 'BEGIN'
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
      file_path = "app/views/full_posts/_#{new_post.file_name}.html.erb"
      File.new(file_path, "w+")
      File.open(file_path, "w") {|file| file.write(post_buffer[:body])}
      # Write :header_image to a file in the 'PostHeaderImages' directory
      file_path = "public/post-header-images/#{new_post.file_name}.jpg"
      File.new(file_path, "w+")
      File.open(file_path, 2) {|file| file.write(post_buffer[:header_image].read.force_encoding(Encoding::UTF_8))}
      # Save it
#       new_post.save
#         redirect_to("/Portfolio")
    else
      # The title is empty
    end
    logger.debug 'END'
  end
end
