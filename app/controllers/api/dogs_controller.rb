class Api::DogsController < ApplicationController
  # skip_before_action :verify_authenticity_token

  def show
    @dog = Dog.find_by_user_id(params[:id])
  end

  # def create
  #   @dog = Dog.new(dog_params)
  #
  #   if @dog.save
  #     render 'api/dogs/show'
  #   else
  #     render json: @dog.errors.full_messages, status: 422
  #   end
  # end

  private

  def dog_params
    params.require(:dog).permit(:name, :age_year, :age_month, :weight, :breed, :sex)
  end
end
