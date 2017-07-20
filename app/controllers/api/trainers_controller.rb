class Api::TrainersController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def index
    if params[:search]
      @trainers = Trainer.search(params[:search])
    else
      @trainers = Trainer.all
    end
  end

  def show
    @trainer = Trainer.find_by_id(params[:id])
  end
end
