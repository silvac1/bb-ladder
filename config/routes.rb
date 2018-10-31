Rails.application.routes.draw do
  devise_for :admins

  authenticated :admin do
    root 'admin#index', as: :admin_root
  end

  get "admin/", to: "admin#index"
  get "admin/*path", to: "admin#index"

  namespace :api do
    namespace :v1 do
      namespace :admin do
        resources :positions, only: [:create, :update, :destroy]
        resources :players, only: [:create, :update, :destroy]
      end
      resources :players, only: [:index, :show]
    end
  end
end
