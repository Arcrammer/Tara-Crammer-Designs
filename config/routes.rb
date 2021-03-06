Rails.application.routes.draw do
  
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".
  
  # You can have the root of your site routed with "root"
  root 'welcome#index'
  
  # Example of regular route:
  get 'Portfolio' => 'my_work#index'
  get 'Posts/:id' => 'posts#with_id'
  get 'Contact' => 'contact#index'
  get 'Contacted' => 'contact#contacted'
  get '404' => 'problems#_404'
  get '422' => 'problems#_422'
  get '500' => 'problems#_500'
  
  post 'Contact' => 'contact#send_message'
  post 'Manage/Create' => 'manage#create'
  
  controller :manage do
    get 'Manage' => :index
    get 'Manage/Create' => :create
    get 'Manage/Delete' => :delete
    get 'Manage/Destroy/:id' => :destroy_post
    get 'Manage/Logout' => :logout
    post 'Manage' => :index
    post 'Manage/Logout' => :logout
  end
  
  # Problem pages
  match '/404', to: 'problems#_404', via: :all
  match '/422', to: 'problems#_422', via: :all
  match '/500', to: 'problems#_500', via: :all
  
  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
