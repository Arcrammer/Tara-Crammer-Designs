# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

BlogPost.create(title: 'The Very First Post', file_name: 'pcbhpsplz', tags: 'One, Two, Red, Blue')
15.times do |time|
  BlogPost.create(title: "Post ##{time}", file_name: 'pcbhpsplz', tags: 'One, Two, Red, Blue')
end
