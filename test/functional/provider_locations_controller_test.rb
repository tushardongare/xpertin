require 'test_helper'

class ProviderLocationsControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:provider_locations)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create provider_location" do
    assert_difference('ProviderLocation.count') do
      post :create, :provider_location => { }
    end

    assert_redirected_to provider_location_path(assigns(:provider_location))
  end

  test "should show provider_location" do
    get :show, :id => provider_locations(:one).to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => provider_locations(:one).to_param
    assert_response :success
  end

  test "should update provider_location" do
    put :update, :id => provider_locations(:one).to_param, :provider_location => { }
    assert_redirected_to provider_location_path(assigns(:provider_location))
  end

  test "should destroy provider_location" do
    assert_difference('ProviderLocation.count', -1) do
      delete :destroy, :id => provider_locations(:one).to_param
    end

    assert_redirected_to provider_locations_path
  end
end
