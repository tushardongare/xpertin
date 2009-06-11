# This file is auto-generated from the current state of the database. Instead of editing this file, 
# please use the migrations feature of Active Record to incrementally modify your database, and
# then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your database schema. If you need
# to create the application database on another system, you should be using db:schema:load, not running
# all the migrations from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20090611143958) do

  create_table "clients", :force => true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "expert_companies", :force => true do |t|
    t.integer  "user_id"
    t.string   "companyname"
    t.string   "jobtitle"
    t.string   "country"
    t.string   "business"
    t.string   "noemplyees"
    t.string   "hearaboutus"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "expert_locations", :force => true do |t|
    t.integer  "user_id"
    t.string   "country",      :limit => 40
    t.string   "addressline1", :limit => 80
    t.string   "addressline2", :limit => 80
    t.integer  "postalcode",   :limit => 8
    t.string   "city",         :limit => 40
    t.string   "phone",        :limit => 20
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "expert_personals", :force => true do |t|
    t.integer  "user_id"
    t.string   "firstname"
    t.string   "lastname"
    t.binary   "picture",          :limit => 16777215
    t.string   "security"
    t.string   "answer"
    t.string   "addressline1"
    t.string   "addressline2"
    t.integer  "postalcode",       :limit => 8
    t.string   "city"
    t.string   "country"
    t.string   "timezone"
    t.integer  "phonecountrycode"
    t.integer  "phoneareacode"
    t.integer  "phonenumber"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "expert_professionals", :force => true do |t|
    t.integer  "user_id"
    t.string   "title"
    t.string   "primaryrole"
    t.text     "expertin"
    t.string   "special1"
    t.string   "special2"
    t.string   "academic1"
    t.string   "academic2"
    t.string   "academic3"
    t.string   "qualification1"
    t.string   "qualification2"
    t.string   "qualification3"
    t.binary   "pastjob1"
    t.binary   "pastjob2"
    t.binary   "pastjob3"
    t.string   "jobalert"
    t.integer  "minrate"
    t.integer  "maxrate"
    t.integer  "hrsperweek"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "overviews", :force => true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "provider_locations", :force => true do |t|
    t.integer "user_id"
    t.string  "country",      :limit => 40
    t.string  "addressline1", :limit => 80
    t.string  "addressline2", :limit => 80
    t.integer "postalcode",   :limit => 8
    t.string  "city",         :limit => 40
    t.string  "phone",        :limit => 20
  end

  create_table "providers", :force => true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "roles", :force => true do |t|
    t.string "name"
  end

  create_table "roles_users", :id => false, :force => true do |t|
    t.integer "role_id"
    t.integer "user_id"
  end

  add_index "roles_users", ["role_id"], :name => "index_roles_users_on_role_id"
  add_index "roles_users", ["user_id"], :name => "index_roles_users_on_user_id"

  create_table "users", :force => true do |t|
    t.string   "login",                     :limit => 40
    t.string   "name",                      :limit => 100, :default => ""
    t.string   "email",                     :limit => 100
    t.string   "crypted_password",          :limit => 40
    t.string   "salt",                      :limit => 40
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "remember_token",            :limit => 40
    t.datetime "remember_token_expires_at"
    t.string   "activation_code",           :limit => 40
    t.datetime "activated_at"
  end

  add_index "users", ["login"], :name => "index_users_on_login", :unique => true

end
