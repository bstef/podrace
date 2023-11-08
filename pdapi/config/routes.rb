Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
    resources :users
      get '/users', to: 'users#index'
      get '/users', to: 'users#show'
      post '/users', to: 'users#create'
      get '/user/random', to: 'users#setRandomUser'
      post '/users', to: 'users#destroy'
    end
    namespace :v2 do
    resources :users, :pods, :events, :events_users
      get '/users', to: 'users#index'
      post '/users', to: 'users#create'
      get '/user/random', to: 'users#setRandomUser'
      post '/users/delete', to: 'users#destroy'
      get '/pods', to: 'pods#index'
      post '/pods', to: 'pods#create'
      post '/pods', to: 'pods#destroy'
      get '/events', to: 'events#index'
      post '/events', to: 'events#create'
      post '/events', to: 'events#destroy'
    end
  end
end
