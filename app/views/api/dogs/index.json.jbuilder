@dogs.each do |dog|
  json.set! dog.id do
    json.partial! '/api/dogs/dog', dog: dog
  end
end
