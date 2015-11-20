class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string "username", :limit => 32
      t.string "password", :limit => 32
      
      t.timestamps null: false
    end
  end
end
