class Api::DogsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @dogs = User.find(params[:user_id]).dogs
  end

  def create
    @dog = Dog.new(dog_params)

    if @dog.save
      render :show
    else
      render json: @dog.errors.full_messages, status: 422
    end
  end

  private

  def dog_params
    params.require(:dog).permit(:user_id, :name, :age_year, :age_month, :weight, :breed, :sex)
  end
end
