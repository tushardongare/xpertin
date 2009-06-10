# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_xpertin_session',
  :secret      => '469c0d42c50c04bc3d8b71d385ce15b01c28fee7634463e35c4c54c6bd3bb26618f0631d54460cac4ec3edc6ed818d5d58441c540ae459e2b81fc28208eced7a'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
