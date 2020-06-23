class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :title, null: false
      t.string :description
      t.integer :artist_id, null: false
      t.timestamps
    end

    add_index :songs, [:artist_id, :title], unique: true
  end
end
