class CreateWinners < ActiveRecord::Migration[5.2]
  def change
    create_table :winners do |t|
      t.string :title
      t.string :owner
      t.integer :vote_count

      t.timestamps
    end
  end
end
