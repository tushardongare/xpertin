require 'test_helper'

class ExpertLocationsControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:expert_locations)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create expert_location" do
    assert_difference('ExpertLocation.count') do
      post :create, :expert_location => { }
    end

    assert_redirected_to expert_location_path(assigns(:expert_location))
  end

  test "should show expert_location" do
    get :show, :id => expert_locations(:one).to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => expert_locations(:one).to_param
    assert_response :success
  end

  test "should update expert_location" do
    put :update, :id => expert_locations(:one).to_param, :expert_location => { }
    assert_redirected_to expert_location_path(assigns(:expert_location))
  end

  test "should destroy expert_location" do
    assert_difference('ExpertLocation.count', -1) do
      delete :destroy, :id => expert_locations(:one).to_param
    end

    assert_redirected_to expert_locations_path
  end
end
