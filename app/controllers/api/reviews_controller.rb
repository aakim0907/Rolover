class Api::ReviewsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @reviews = Trainer.find(params[:trainer_id]).reviews
  end

  def create
    @review = Review.new(review_params)
    # debugger
    # @review.user_id = current_user.id

    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  # def destroy
  #
  # end

  private

  def review_params
    params.require(:review).permit(:rating, :body, :trainer_id, :user_id)
  end
end
