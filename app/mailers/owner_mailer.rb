class OwnerMailer < ApplicationMailer
  def send_visitor_message(visitor_name, visitor_address, message)
    @name = visitor_name
    @address = visitor_address
    @message = message
    mail(to: "alexander2475914@gmail.com", subject: "Message from #{visitor_name} at Tara Crammer Designs")
  end
end
