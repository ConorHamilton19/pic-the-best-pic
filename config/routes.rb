Rails.application.routes.draw do
  scope '/api/v1' do
    resources :photos
    resources :winners
  end
end
