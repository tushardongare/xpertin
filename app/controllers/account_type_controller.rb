class AccountTypeController < ApplicationController

  def index
    
  end
  
  def new
    role = params[:accounttype]
	if role == "expert"
	  redirect_to('/users/new/expert')
	elsif role == "client"
	  redirect_back_or_default('/users/new/client')
	else
	  redirect_back_or_default('/account_type')
	  flash[:notice] = "Please Choose Your Account Type"
	end  
  end
  
end
