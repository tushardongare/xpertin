require 'test_helper'

class ExpertPersonalsControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:expert_personals)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create expert_personal" do
    assert_difference('ExpertPersonal.count') do
      post :create, :expert_personal => { }
    end

    assert_redirected_to expert_personal_path(assigns(:expert_personal))
  end

  test "should show expert_personal" do
    get :show, :id => expert_personals(:one).to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => expert_personals(:one).to_param
    assert_response :success
  end

  test "should update expert_personal" do
    put :update, :id => expert_personals(:one).to_param, :expert_personal => { }
    assert_redirected_to expert_personal_path(assigns(:expert_personal))
  end

  test "should destroy expert_personal" do
    assert_difference('ExpertPersonal.count', -1) do
      delete :destroy, :id => expert_personals(:one).to_param
    end

    assert_redirected_to expert_personals_path
  end
end
