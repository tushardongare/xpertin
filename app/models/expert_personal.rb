class ExpertPersonal < ActiveRecord::Base

   belongs_to :user
   
   file_column :picture  
   
   validates_presence_of :firstname, :message => 'is required'
   validates_presence_of :lastname, :message => 'is required'
   validates_presence_of :security, :message => 'is required'
   validates_presence_of :answer, :message => 'is required'
   validates_presence_of :addressline1, :message => 'is required'
   validates_presence_of :postalcode, :message => 'is required'
   validates_presence_of :phonecountrycode, :message => 'is required'
   validates_presence_of :phoneareacode, :message => 'is required'
   validates_presence_of :phonenumber, :message => 'is required'
   
   
   validates_file_format_of :picture, :in => ["gif", "jpg","png"]
   validates_filesize_of :picture, :in => 10.kilobytes..2.megabytes

end
