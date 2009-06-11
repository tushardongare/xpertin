class CreateExpertPersonals < ActiveRecord::Migration
  def self.up
    create_table :expert_personals do |t|
      
	  t.references :user 
	  t.string :firstname
      t.string :lastname
      t.binary :picture ,                 :limit => 2.megabytes
      t.string :security
      t.string :answer
      t.string :addressline1
      t.string :addressline2
      t.integer :postalcode,             :limit => 6
      t.string :city
      t.string :country
      t.string :timezone
      t.integer :phonecountrycode
      t.integer :phoneareacode
      t.integer :phonenumber

      t.timestamps
    end
  end

  def self.down
    drop_table :expert_personals
  end
end
