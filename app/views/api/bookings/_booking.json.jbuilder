json.extract! booking, :id, :trainer_id, :user_id, :dog_id, :start_date, :end_date, :message, :status, :training_type

json.trainer_name booking.trainer.name
