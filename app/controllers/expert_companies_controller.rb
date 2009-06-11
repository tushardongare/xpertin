class ExpertCompaniesController < ApplicationController
  
  require_role "expert"
  
  # GET /expert_companies
  # GET /expert_companies.xml
  
  def index
  
	@expert_company = ExpertCompany.find_by_user_id(self.current_user.id)
	if (@expert_company != nil)
	  redirect_to('/expert_companies/edit/'+@expert_company.id.to_s)
	elsif
	  redirect_to('/expert_companies/new')
	end  
  end

  # GET /expert_companies/1
  # GET /expert_companies/1.xml
  def show
    @expert_company = ExpertCompany.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @expert_company }
    end
  end

  # GET /expert_companies/new
  # GET /expert_companies/new.xml
  def new
    @expert_company = ExpertCompany.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @expert_company }
    end
  end

  # GET /expert_companies/1/edit
  def edit
    @expert_company = ExpertCompany.find(params[:id])
  end

  # POST /expert_companies
  # POST /expert_companies.xml
  def create
    @expert_company = ExpertCompany.new(params[:expert_company])
	@expert_company.user_id = self.current_user.id
    #respond_to do |format|
      if @expert_company.save
        flash[:notice] = 'ExpertCompany was successfully created.'
        redirect_to('/expert_professionals')
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @expert_company.errors, :status => :unprocessable_entity }
      end
    #end
  end

  # PUT /expert_companies/1
  # PUT /expert_companies/1.xml
  def update
    @expert_company = ExpertCompany.find(params[:id])

    #respond_to do |format|
      if @expert_company.update_attributes(params[:expert_company])
        flash[:notice] = 'ExpertCompany was successfully updated.'
        redirect_to('/expert_professionals')
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @expert_company.errors, :status => :unprocessable_entity }
      end
    #end
  end

  # DELETE /expert_companies/1
  # DELETE /expert_companies/1.xml
  def destroy
    @expert_company = ExpertCompany.find(params[:id])
    @expert_company.destroy

    respond_to do |format|
      format.html { redirect_to(expert_companies_url) }
      format.xml  { head :ok }
    end
  end
end
