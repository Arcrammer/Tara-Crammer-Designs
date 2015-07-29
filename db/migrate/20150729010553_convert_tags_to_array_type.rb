class ConvertTagsToArrayType < ActiveRecord::Migration
  def up
    remove_column :blog_posts, :tags
    add_column :blog_posts, :tags, :text, array:true, default: []
  end
  def down
    remove_column :blog_posts, :tags
    add_column :blog_posts, :tags, :text
  end
end
