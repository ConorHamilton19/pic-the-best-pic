class WinnersController < ApplicationController
  def index
    winners = Winner.last
    render json: winner
  end

  def create
    winner = Photo.create(winner_params)
    render json: winner
  end

  private
    def winner_params
      params.require(:photo).permit(:id, :title, :owner, :vote_count)
    end
end 
