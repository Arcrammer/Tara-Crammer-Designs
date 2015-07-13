class PostsController < ApplicationController
  def with_id
    @post = BlogPost.where(:id => params[:id])[0] # Fetch the requested post
  end
end
