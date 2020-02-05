Rails.application.routes.draw do
  resources :trainers, only: :index
  resources :pokemons, only: [:create, :destroy]
end
