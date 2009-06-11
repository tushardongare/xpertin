require 'test_helper'

class ExpertProfessionalsControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:expert_professionals)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create expert_professional" do
    assert_difference('ExpertProfessional.count') do
      post :create, :expert_professional => { }
    end

    assert_redirected_to expert_professional_path(assigns(:expert_professional))
  end

  test "should show expert_professional" do
    get :show, :id => expert_professionals(:one).to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => expert_professionals(:one).to_param
    assert_response :success
  end

  test "should update expert_professional" do
    put :update, :id => expert_professionals(:one).to_param, :expert_professional => { }
    assert_redirected_to expert_professional_path(assigns(:expert_professional))
  end

  test "should destroy expert_professional" do
    assert_difference('ExpertProfessional.count', -1) do
      delete :destroy, :id => expert_professionals(:one).to_param
    end

    assert_redirected_to expert_professionals_path
  end
end
