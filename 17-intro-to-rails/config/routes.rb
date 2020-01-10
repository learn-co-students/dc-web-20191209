Rails.application.routes.draw do
  resources :dogs
  resources :campuses
  resources :mice
  resources :students
  get '/home', to: "students#home"
  # get '/students', to: "students#index", as: "students"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
