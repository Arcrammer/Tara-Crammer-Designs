class ColumnRename < ActiveRecord::Migration
  def up
    rename_column :blog_posts, :location, :file_name
  end
  def down
    rename_column :blog_posts, :file_name, :location
  end
end
