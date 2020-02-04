require 'test_helper'

class CatControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get cat_index_url
    assert_response :success
  end

end
