class ExpertProfessionalsController < ApplicationController
  # GET /expert_professionals
  # GET /expert_professionals.xml
  def index
    @expert_professionals = ExpertProfessional.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @expert_professionals }
    end
  end

  # GET /expert_professionals/1
  # GET /expert_professionals/1.xml
  def show
    @expert_professional = ExpertProfessional.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @expert_professional }
    end
  end

  # GET /expert_professionals/new
  # GET /expert_professionals/new.xml
  def new
    @expert_professional = ExpertProfessional.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @expert_professional }
    end
  end

  # GET /expert_professionals/1/edit
  def edit
    @expert_professional = ExpertProfessional.find(params[:id])
  end

  # POST /expert_professionals
  # POST /expert_professionals.xml
  def create
    @expert_professional = ExpertProfessional.new(params[:expert_professional])

    respond_to do |format|
      if @expert_professional.save
        flash[:notice] = 'ExpertProfessional was successfully created.'
        format.html { redirect_to(@expert_professional) }
        format.xml  { render :xml => @expert_professional, :status => :created, :location => @expert_professional }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @expert_professional.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /expert_professionals/1
  # PUT /expert_professionals/1.xml
  def update
    @expert_professional = ExpertProfessional.find(params[:id])

    respond_to do |format|
      if @expert_professional.update_attributes(params[:expert_professional])
        flash[:notice] = 'ExpertProfessional was successfully updated.'
        format.html { redirect_to(@expert_professional) }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @expert_professional.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /expert_professionals/1
  # DELETE /expert_professionals/1.xml
  def destroy
    @expert_professional = ExpertProfessional.find(params[:id])
    @expert_professional.destroy

    respond_to do |format|
      format.html { redirect_to(expert_professionals_url) }
      format.xml  { head :ok }
    end
  end
end
