class Api::ReviewsController < ApplicationController
  # skip_before_action :verify_authenticity_token

  def show
    @review = Review.find_by_trainer_id(params[:id])
  end

  # def create
  #   @review = Review.new(review_params)
  #
  #   if @review.save
  #     render 'api/reviews/show'
  #   else
  #     render json: @review.errors.full_messages, status: 422
  #   end
  # end

  private

  def review_params
    params.require(:review).permit(:rating, :body)
  end
end
