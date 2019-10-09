class WinnersController < ApplicationController
  def index
    winners = Winner.all.order("vote_count DESC")
    render json: winners.with_attached_picture
  end

  def create
    winner = Photo.create(title, owner, vote_count, picture)
    render json: winner
  end

end
