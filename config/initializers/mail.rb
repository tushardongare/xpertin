ActionMailer::Base.delivery_method = :smtp
ActionMailer::Base.smtp_settings = {
	:address => "smtp.gmail.com",
	:port => 587,
	:domain => "www.pragtech.co.in",
	:authentication => :plain,
	:user_name => "tushar.dongare@pragtech.co.in",
	:password => "trytry3"
}
