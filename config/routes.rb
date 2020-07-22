Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    get '/searches/:input', to: 'searches#search'
    resources :users, only: [:index, :create, :show]
    resource :session, only: [:create, :destroy]
    resources :songs, except: [:new, :edit] do 
      resources :comments, only: [:create, :destroy, :index]
    end
  end

end
