class MyWorkController < ApplicationController
  def index
    @current_year = Date.today.strftime("%Y")
    @latest_posts = BlogPost.page(params[:page]).order('created_at DESC') # The default is 5; Using the 'will_paginate' gem
  end
end
