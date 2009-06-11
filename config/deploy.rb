set :user, 'pragtech'  # Your dreamhost account's username
set :domain, 'www.pragmatictek.com'  # Dreamhost servername where your account is located 
set :project, 'xpertin'  # Your application as its called in the repository
set :application, 'xpertin.pragtech.co.in'  # Your app's location (domain or sub-domain name as setup in panel)
set :applicationdir, "/home/#{user}/#{application}"  # The standard Dreamhost setup

# version control config
default_run_options[:pty] = true
set :repository,  " 	"git@github.com:tushardongare/xpertin.git"
set :scm, "git"
set :scm_passphrase, "" #This is your custom users password
set :user, "shabbirm"
ssh_options[:forward_agent] = true


# roles (servers)
role :web, domain
role :app, domain
role :db,  domain, :primary => true

# deploy config
set :deploy_to, applicationdir
set :deploy_via, :export

# additional settings
default_run_options[:pty] = true  # Forgo errors when deploying from windows
#ssh_options[:keys] = %w(/Path/To/id_rsa)            # If you are using ssh_keys
set :chmod755, "app config db lib public vendor script script/* public/disp*"
set :use_sudo, false


namespace :mod_rails do
       desc <<-DESC
       Restart the application altering tmp/restart.txt for mod_rails.
      DESC
       task :restart, :roles => :app do
         run "touch  #{release_path}/tmp/restart.txt"
       end
end
    
namespace :deploy do
    %w(start restart).each { |name| task name, :roles => :app do mod_rails.restart end }
end


