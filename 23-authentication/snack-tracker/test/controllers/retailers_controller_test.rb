require 'test_helper'

class RetailersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get retailers_index_url
    assert_response :success
  end

  test "should get show" do
    get retailers_show_url
    assert_response :success
  end

end
