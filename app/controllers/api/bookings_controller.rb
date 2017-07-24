class Api::BookingsController < ApplicationController
  # skip_before_action :verify_authenticity_token

  def show
    @booking = Booking.find_by_user_id(params[:id])
  end

  # def create
  #   @booking = Booking.new(booking_params)
  #
  #   if @booking.save
  #     render 'api/bookings/show'
  #   else
  #     render json: @booking.errors.full_messages, status: 422
  #   end
  # end

  private

  def booking_params
    params.require(:booking).permit(:start_date, :end_date, :message)
  end
end
