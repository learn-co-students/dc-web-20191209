Rails.application.routes.draw do

  # get 'snacks', to: "snacks#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :snacks
  resources :retailers, only: [:index, :show, :new, :create]
  get "/login", to: "sessions#new", as: "login"
  post "/login", to: "sessions#create"
  get "/logout", to: "sessions#destroy"
  # get "foods", to: "snacks#index", as: "snacks"
end
