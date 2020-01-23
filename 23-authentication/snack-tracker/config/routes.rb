Rails.application.routes.draw do
  resources :snacks
  resources :retailers, only: [:index, :show, :new, :create]
  resources :users, only: [:new, :create]
  get "/login", to: "sessions#new", as: "login"
  post "/login", to: "sessions#create"
  get "/logout", to: "sessions#destroy"
end
