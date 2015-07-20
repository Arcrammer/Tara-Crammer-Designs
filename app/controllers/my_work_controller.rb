class MyWorkController < ApplicationController
  def index
    @current_year = Date.today.strftime("%Y")
    @latest_posts = BlogPost.all.limit(5).reverse
  end
end
