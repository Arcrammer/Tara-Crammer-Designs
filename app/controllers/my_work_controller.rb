class MyWorkController < ApplicationController
  def index
    @current_year = Date.today.strftime("%Y")
  end
end
