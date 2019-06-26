class WinnersController < ApplicationController
  def index
    winners = Winner.all
    render json: winners
  end

  def create
    winner = Photo.create(title, owner, vote_count)
    render json: winner
  end

end
