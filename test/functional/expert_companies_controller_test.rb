require 'test_helper'

class ExpertCompaniesControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:expert_companies)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create expert_company" do
    assert_difference('ExpertCompany.count') do
      post :create, :expert_company => { }
    end

    assert_redirected_to expert_company_path(assigns(:expert_company))
  end

  test "should show expert_company" do
    get :show, :id => expert_companies(:one).to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => expert_companies(:one).to_param
    assert_response :success
  end

  test "should update expert_company" do
    put :update, :id => expert_companies(:one).to_param, :expert_company => { }
    assert_redirected_to expert_company_path(assigns(:expert_company))
  end

  test "should destroy expert_company" do
    assert_difference('ExpertCompany.count', -1) do
      delete :destroy, :id => expert_companies(:one).to_param
    end

    assert_redirected_to expert_companies_path
  end
end
