class ExpertLocationsController < ApplicationController
  
  require_role "expert"
  
  # GET /expert_locations
  # GET /expert_locations.xml
  def index
    @expert_locations = ExpertLocation.find_by_user_id(self.current_user.id)
	if (@expert_locations != nil)
	  redirect_to('/expert_locations/edit/'+@expert_locations.id.to_s)
	elsif
	  redirect_to('/expert_locations/new')
	end  
    #respond_to do |format|
    #  format.html # index.html.erb
    #  format.xml  { render :xml => @expert_locations }
    #end
  end

  # GET /expert_locations/1
  # GET /expert_locations/1.xml
  def show
    @expert_location = ExpertLocation.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @expert_location }
    end
  end

  # GET /expert_locations/new
  # GET /expert_locations/new.xml
  def new
    @expert_location = ExpertLocation.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @expert_location }
    end
  end

  # GET /expert_locations/1/edit
  def edit
    @expert_location = ExpertLocation.find(params[:id])
  end

  # POST /expert_locations
  # POST /expert_locations.xml
  def create
    @expert_location = ExpertLocation.new(params[:expert_location])
	@expert_location.user_id = self.current_user.id
    respond_to do |format|
      if @expert_location.save
        flash[:notice] = 'ExpertLocation was successfully created.'
        #redirect_to('/')
		format.html { redirect_to(@expert_location) }
        format.xml  { render :xml => @expert_location, :status => :created, :location => @expert_location }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @expert_location.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /expert_locations/1
  # PUT /expert_locations/1.xml
  def update
    @expert_location = ExpertLocation.find(params[:id])

    respond_to do |format|
      if @expert_location.update_attributes(params[:expert_location])
        flash[:notice] = 'ExpertLocation was successfully updated.'
        format.html { redirect_to(@expert_location) }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @expert_location.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /expert_locations/1
  # DELETE /expert_locations/1.xml
  def destroy
    @expert_location = ExpertLocation.find(params[:id])
    @expert_location.destroy

    respond_to do |format|
      format.html { redirect_to(expert_locations_url) }
      format.xml  { head :ok }
    end
  end
end
