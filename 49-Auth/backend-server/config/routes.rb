Rails.application.routes.draw do
  # localhost:3000/api/v1/

  namespace :api do
    namespace :v1 do
      resources :users, only: [:index] #route only used for testing
      post '/login', to: 'auth#create'
      get '/profile', to: 'users#profile'
    end
  end
end
