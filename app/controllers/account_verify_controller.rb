class AccountVerifyController < ApplicationController

  def index
    @login = params[:id]
	@email = User.find_by_login(@login).email	
  end

end
