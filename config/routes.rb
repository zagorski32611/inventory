Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  get :search, controller: :products
  root 'static_pages#index'

  resources :static_pages
  resources :products 
  resources :customers

end
