class UsersController < ApplicationController
  # Be sure to include AuthenticationSystem in Application Controller instead
  include AuthenticatedSystem
  

  # render new.rhtml
  def new
    @user = User.new
	@role = params[:id]
  end
 
  def create
    logout_keeping_session!
    @user = User.new(params[:user])
	@roles = Role.find_all_by_name(params[:role])
	@user.roles << @roles
    success = @user && @user.save
    if success && @user.errors.empty?
      @login = @user.login
	  redirect_back_or_default("/account_verify/index/#{@login}")
      flash[:notice] = "Thanks for signing up!  We're sending you an email with your activation code."
    else
      flash[:error]  = "We couldn't set up that account, sorry.  Please try again, or contact an admin (link is above)."
      render :action => 'new'
    end
  end

  def activate
    #logout_keeping_session!
    user = User.find_by_activation_code(params[:activation_code]) unless params[:activation_code].blank?
    case
    when (!params[:activation_code].blank?) && user && !user.active?
      user.activate!
	  self.current_user = user
	  @email = user.email
	  flash[:notice] = "Signup complete! Please sign in to continue."
    when params[:activation_code].blank?
      flash[:error] = "The activation code was missing.  Please follow the URL from your email."
      redirect_back_or_default('/')
    else 
      flash[:error]  = "We couldn't find a user with that activation code -- check your email? Or maybe you've already activated -- try signing in."
      redirect_back_or_default('/')
    end
  end
end
