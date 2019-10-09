class PhotosController < ApplicationController
  def index
    @photos = Photo.order("RANDOM()").limit(4)
    render json: @photos.with_attached_picture
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
    photo.update(photo_params)
    photo.vote_count > 100 ? Winner.create(title: photo.title, owner: photo.owner, vote_count: photo.vote_count) : nil
    render json: photo
  end

  def destroy
    photo = Photo.find(params[:id])
    photo.destroy
    head :no_content, status: :ok
  end

  private
    def photo_params
      params.require(:photo).permit(:id, :title, :owner, :vote_count, :picture)
    end
end
