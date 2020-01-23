Rails.application.routes.draw do
  resources :trees, only: [:index, :show, :new, :create]
  resources :users, only: [:index, :show, :edit, :update]
  get "/", to: "application#home", as: "home"
end
