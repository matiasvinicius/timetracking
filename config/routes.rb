Rails.application.routes.draw do
  get 'checkins/index'

  #define onde está a index do projeto
  root 'checkins#index'

  resources :checkins
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
