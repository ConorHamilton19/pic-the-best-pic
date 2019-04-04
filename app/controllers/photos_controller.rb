class PhotosController < ApplicationController
  def index
    photos = Photo.order("created_at DESC")
    render json: photos
  end

  def show
    photo = Photo.find(params[:id])
    render json: photo
  end 

  def create
    photo = Photo.create(photo_params)
    render json: photo
  end

  def update
    photo = Photo.find(params[:id])
    photo.update_attributes(photo_params)
    render json: photo
  end

  def destroy
    photo = Photo.find(params[:id])
    photo.destroy
    head :no_content, status: :ok
  end

  private
    def photo_params
      params.require(:photo).permit(:title, :owner, :vote_count)
    end
end
