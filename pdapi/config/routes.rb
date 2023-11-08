Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
    resources :users
      get '/users', to: 'users#index'
      post '/users', to: 'users#create'
      get '/user/random', to: 'users#setRandomUser'
      post '/users', to: 'users#destroy'
    end
    namespace :v2 do
    resources :users, :pods, :events, :events_users
      get '/svc_user/users', to: 'users#index'
      post '/svc_user/users', to: 'users#create'
      get '/svc_user/user/random', to: 'users#setRandomUser'
      post '/svc_user/users/delete', to: 'users#destroy'
      get '/svc_user/pods', to: 'pods#index'
      post '/svc_user/pods', to: 'pods#create'
      post '/svc_user/pod/delete', to: 'pods#destroy'
      get '/svc_user/events', to: 'events#index'
      post '/svc_user/events', to: 'events#create'
      post '/svc_user/event/delete', to: 'events#destroy'
    end
  end
end
