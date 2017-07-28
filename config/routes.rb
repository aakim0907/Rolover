Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :trainers, only: [:index, :show] do
      resources :reviews, only: [:index]
    end
    resources :users, only: [:show, :create] do
      resources :bookings, only: [:index]
      resources :dogs, only: [:index]
    end
    resources :reviews, only: [:create]
    resources :bookings, only: [:create]
    resources :dogs, only: [:create]
  end

  root "static_pages#root"
end
