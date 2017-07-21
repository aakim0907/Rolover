# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



trainer1 = Trainer.create(name: 'David', obedience: true, behavior: false, advanced: false, profile_quote: 'Capybara David', description: 'I will take care of your dogs!!', price: 20, zip: 94109, city: 'San Francisco', state: 'California')
trainer2 = Trainer.create(name: 'Kelly', obedience: true, behavior: true, advanced: true, profile_quote: 'Y\'all good?', description: 'Hash Browns', price: 50, zip: 94109, city: 'San Francisco', state: 'California')
trainer3 = Trainer.create(name: 'Aaron', obedience: true, behavior: true, advanced: false, profile_quote: 'Love for dogs', description: 'React is awesome', price: 20, zip: 94109, city: 'San Francisco', state: 'California')
trainer4 = Trainer.create(name: 'Hope', obedience: true, behavior: true, advanced: true, profile_quote: 'Corgis rock!', description: 'Love for Sir Toast<3', price: 45, zip: 94109, city: 'San Francisco', state: 'California')
