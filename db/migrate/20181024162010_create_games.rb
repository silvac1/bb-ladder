class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.references :home_team, foreign_key: { to_table: :teams }
      t.references :away_team, foreign_key: { to_table: :teams }
      t.references :winner, foreign_key: { to_table: :teams }
      t.datetime :occurs_at

      t.timestamps
    end
  end
end
