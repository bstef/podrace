Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
    resources :users
      get '/profile', to: 'users#show'
      get '/users', to: 'users#index'
      post '/users', to: 'users#create'
      get '/user/random', to: 'users#setRandomUser'
      post '/users', to: 'users#destroy'
    end
  end
end
