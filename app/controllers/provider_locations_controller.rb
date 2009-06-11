class ProviderLocationsController < ApplicationController
  
  require_role "expert"
  
  # GET /provider_locations
  # GET /provider_locations.xml
  def index
    @provider_locations = ProviderLocation.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @provider_locations }
    end
  end

  # GET /provider_locations/1
  # GET /provider_locations/1.xml
  def show
    @provider_location = ProviderLocation.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @provider_location }
    end
  end

  # GET /provider_locations/new
  # GET /provider_locations/new.xml
  def new
    @provider_location = ProviderLocation.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @provider_location }
    end
  end

  # GET /provider_locations/1/edit
  def edit
    @provider_location = ProviderLocation.find(params[:id])
  end

  # POST /provider_locations
  # POST /provider_locations.xml
  def create
    @provider_location = ProviderLocation.new(params[:provider_location])
	@provider_location.user_id = self.current_user.id
    respond_to do |format|
      if @provider_location.save
        flash[:notice] = 'ProviderLocation was successfully created.'
        format.html { redirect_to(@provider_location) }
        format.xml  { render :xml => @provider_location, :status => :created, :location => @provider_location }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @provider_location.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /provider_locations/1
  # PUT /provider_locations/1.xml
  def update
    @provider_location = ProviderLocation.find(params[:id])

    respond_to do |format|
      if @provider_location.update_attributes(params[:provider_location])
        flash[:notice] = 'ProviderLocation was successfully updated.'
        format.html { redirect_to(@provider_location) }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @provider_location.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /provider_locations/1
  # DELETE /provider_locations/1.xml
  def destroy
    @provider_location = ProviderLocation.find(params[:id])
    @provider_location.destroy

    respond_to do |format|
      format.html { redirect_to(provider_locations_url) }
      format.xml  { head :ok }
    end
  end
end
