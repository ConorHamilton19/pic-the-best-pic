class WinnersController < ApplicationController
  def index
    winners = Winner.last
    render json: winner
  end

  def create
    winner = Photo.create(title, owner, vote_count)
    render json: winner
  end

end
