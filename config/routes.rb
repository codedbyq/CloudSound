Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    get '/searches/:input', to: 'searches#search'
    resources :users, only: [:index, :create, :show] do 
      get '/users/:user_id/songs', to: 'songs#user_song_index'
    end
    resource :session, only: [:create, :destroy]
    resources :songs, except: [:new, :edit] do 
      resources :comments, only: [:create, :index]
    end
    resources :comments, only: [:destroy]
  end

end
