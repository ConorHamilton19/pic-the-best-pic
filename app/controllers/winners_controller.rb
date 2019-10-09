class WinnersController < ApplicationController
  def index
    winners = Winner.all
    render json: winners.with_attached_picture
  end

  def create
    winner = Photo.create(title, owner, vote_count, picture)
    render json: winner
  end

end
