class Api::BookingsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @bookings = User.find(params[:user_id]).bookings
  end

  def create
    @booking = Booking.new(booking_params)

    if @booking.save
      render :show
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  private

  def booking_params
    params.require(:booking).permit(:trainer_id, :user_id, :dog_id, :start_date, :end_date, :message, :status)
  end
end
