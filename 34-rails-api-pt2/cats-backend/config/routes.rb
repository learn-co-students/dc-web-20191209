Rails.application.routes.draw do
  get 'hobbies/index'
  resources :cats, only: [:index, :create]
  resources :hobbies, only: [:index]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
