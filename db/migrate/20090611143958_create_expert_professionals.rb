class CreateExpertProfessionals < ActiveRecord::Migration
  def self.up
    create_table :expert_professionals do |t|
      
	  t.references :user 
	  t.string :title
      t.string :primaryrole
      t.text :expertin
      t.string :special1
      t.string :special2
      t.string :academic1
      t.string :academic2
      t.string :academic3
      t.string :qualification1
      t.string :qualification2
      t.string :qualification3
      t.binary :pastjob1
      t.binary :pastjob2
      t.binary :pastjob3
      t.string :jobalert
      t.integer :minrate
      t.integer :maxrate
      t.integer :hrsperweek

      t.timestamps
    end
  end

  def self.down
    drop_table :expert_professionals
  end
end
