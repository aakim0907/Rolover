Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :trainers, only: [:index, :show] do
      resources :reviews, only: [:index, :show, :create]
    end
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
  end

  root "static_pages#root"
end
