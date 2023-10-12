Rails.application.routes.draw do
  resources :users
    get '/profile', to: 'users#show'
    get '/users', to: 'users#index'
    post '/users', to: 'users#create'
end
