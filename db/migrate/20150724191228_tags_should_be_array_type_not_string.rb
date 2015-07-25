class TagsShouldBeArrayTypeNotString < ActiveRecord::Migration
  def up
    remove_column :blog_posts, :tags
    add_column :blog_posts, :tags, :string, array:true, default: []
  end
  def down
    remove_column :tags
    add_column :blog_posts, :tags, :string
  end
end
