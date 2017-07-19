@trainers.each do |trainer|
  json.set! trainer.id do
    json.partial! '/api/trainers/trainer', trainer: trainer
  end
end
