Rails.application.routes.draw do

  # get 'snacks', to: "snacks#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :snacks
  resources :retailers, only: [:index, :show]
  # get "foods", to: "snacks#index", as: "snacks"
end
