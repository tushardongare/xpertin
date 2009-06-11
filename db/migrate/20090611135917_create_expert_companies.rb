class CreateExpertCompanies < ActiveRecord::Migration
  def self.up
    create_table :expert_companies do |t|
      
	  t.references :user 
	  t.string :companyname
      t.string :jobtitle
      t.string :country
      t.string :business
      t.string :noemplyees
      t.string :hearaboutus

      t.timestamps
    end
  end

  def self.down
    drop_table :expert_companies
  end
end
