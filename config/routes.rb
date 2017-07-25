Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :trainers, only: [:index, :show] do
      resources :reviews, only: [:index]
    end
    resources :reviews, only: [:create]
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
  end

  root "static_pages#root"
end
