class CreateBlogPosts < ActiveRecord::Migration
  def change
    create_table :blog_posts do |t|
      t.string "title"
      t.string "location"
      t.string "tags"
      
      t.timestamps null: false
    end
  end
end
