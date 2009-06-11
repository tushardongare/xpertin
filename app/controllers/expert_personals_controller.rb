class ExpertPersonalsController < ApplicationController

  require_role "expert"

  # GET /expert_personals
  # GET /expert_personals.xml
  def index
    @expert_personal = ExpertPersonal.find_by_user_id(self.current_user.id)
	if (@expert_personal != nil)
	  redirect_to('/expert_personals/edit/'+@expert_personal.id.to_s)
	elsif
	  redirect_to('/expert_personals/new')
	end  
    
  end

  # GET /expert_personals/1
  # GET /expert_personals/1.xml
  def show
    @expert_personal = ExpertPersonal.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @expert_personal }
    end
  end

  # GET /expert_personals/new
  # GET /expert_personals/new.xml
  def new
    @expert_personal = ExpertPersonal.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @expert_personal }
    end
  end

  # GET /expert_personals/1/edit
  def edit
    @expert_personal = ExpertPersonal.find(params[:id])
	
  end

  # POST /expert_personals
  # POST /expert_personals.xml
  def create
    @expert_personal = ExpertPersonal.new(params[:expert_personal])
	@expert_personal.user_id = self.current_user.id
    respond_to do |format|
      if @expert_personal.save
        flash[:notice] = 'ExpertPersonal was successfully created.'
        redirect_to('/expert_companies')
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @expert_personal.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /expert_personals/1
  # PUT /expert_personals/1.xml
  def update
    @expert_personal = ExpertPersonal.find(params[:id])

    #respond_to do |format|
      if @expert_personal.update_attributes(params[:expert_personal])
        flash[:notice] = 'ExpertPersonal was successfully updated.'
        redirect_to('/expert_companies')
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @expert_personal.errors, :status => :unprocessable_entity }
      end
    #end
  end

  # DELETE /expert_personals/1
  # DELETE /expert_personals/1.xml
  def destroy
    @expert_personal = ExpertPersonal.find(params[:id])
    @expert_personal.destroy

    respond_to do |format|
      format.html { redirect_to(expert_personals_url) }
      format.xml  { head :ok }
    end
  end
end
