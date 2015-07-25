class ContactController < ApplicationController
  def index
  end
  def send_message
#     Uncomment the following line and add credentials to /config/environments/development.rb in order to send messages from Gmail
#     OwnerMailer.send_visitor_message(params[:from], params[:with_address], params[:message]).deliver
    redirect_to :action => 'contacted' # Send the user to the 'Thanks!' page
  end
  def contacted
  end
end
