# Load the Rails application.
require File.expand_path('../application', __FILE__)

# Initialize the Rails application.
Rails.application.initialize!

# fastimage_resize stuff
ENV['INLINEDIR'] = RAILS_ROOT + "/tmp" # for RubyInline
Rails::Initializer.run do |config|
  config.gem "fastimage_resize"
end
