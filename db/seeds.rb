#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create([
  { email: 'bob@gmail', password: '123456' }
  ])

Trainer.create([
  { name: 'Kelly', obedience: true, behavior: true, advanced: true, profile_quote: 'Y\'all good?', description: 'Hash Browns', price: 50, zip: 94109, city: 'San Francisco', state: 'California' },
  { name: 'Hope', obedience: true, behavior: true, advanced: true, profile_quote: 'Corgis rock!', description: 'Love for Sir Toast<3', price: 45, zip: 94109, city: 'San Francisco', state: 'California' },
  { name: 'David', obedience: true, behavior: false, advanced: false, profile_quote: 'Capybara David', description: 'I will take care of your dogs!!', price: 20, zip: 94109, city: 'San Francisco', state: 'California' },
  { name: 'Aaron', obedience: true, behavior: true, advanced: false, profile_quote: 'Love for dogs', description: 'React is awesome', price: 20, zip: 94109, city: 'San Francisco', state: 'California' }
  ])

Images.create([
  { trainer_id: 1, url: 'http://res.cloudinary.com/rolover/image/upload/v1500615300/rebekah-howell-221666_pxgagf.jpg', type: 'profile'},
  { trainer_id: 1, url: 'http://res.cloudinary.com/rolover/image/upload/v1500676796/nick-turner-2570_cysug8.jpg', type: 'main'},
  { trainer_id: 1, url: 'http://res.cloudinary.com/rolover/image/upload/v1500676796/greg-rakozy-234360_lnidhq.jpg', type: 'main'},
  { trainer_id: 1, url: 'http://res.cloudinary.com/rolover/image/upload/v1500615297/ross-sokolovski-167993_vmclu0.jpg', type: 'main'},
  { trainer_id: 1, url: 'http://res.cloudinary.com/rolover/image/upload/v1500614239/dawid-sobolewski-285655_iauvhs.jpg', type: 'main'},
  { trainer_id: 2, url: 'http://res.cloudinary.com/rolover/image/upload/v1500615274/hannah-busing-310503_dyj1vz.jpg', type: 'profile'},
  { trainer_id: 2, url: 'http://res.cloudinary.com/rolover/image/upload/v1500615252/pete-bellis-217830_o7hl7o.jpg', type: 'main'},
  { trainer_id: 2, url: 'http://res.cloudinary.com/rolover/image/upload/v1500676791/alexander-dummer-117495_alnvz6.jpg', type: 'main'},
  { trainer_id: 2, url: 'http://res.cloudinary.com/rolover/image/upload/v1500676794/crew-56836_uxjhwt.jpg', type: 'main'},
  { trainer_id: 2, url: 'http://res.cloudinary.com/rolover/image/upload/v1500615255/nicolas-tessari-218491_hswkzo.jpg', type: 'main'},
  { trainer_id: 3, url: 'http://res.cloudinary.com/rolover/image/upload/v1500666134/hJLEzfh-1_p49exx.jpg', type: 'profile'},
  { trainer_id: 3, url: 'http://res.cloudinary.com/rolover/image/upload/v1500676798/pete-bellis-217145_wryecn.jpg', type: 'main'},
  { trainer_id: 3, url: 'http://res.cloudinary.com/rolover/image/upload/v1500676792/andrew-pons-9713_uhf06p.jpg', type: 'main'},
  { trainer_id: 3, url: 'http://res.cloudinary.com/rolover/image/upload/v1500676792/andrew-branch-123375_arltld.jpg', type: 'main'},
  { trainer_id: 3, url: 'http://res.cloudinary.com/rolover/image/upload/v1500676792/andy-omvik-295479_qi5fxn.jpg', type: 'main'},
  { trainer_id: 4, url: 'http://res.cloudinary.com/rolover/image/upload/v1500615295/marvin-meyer-188676_wnyexr.jpg', type: 'profile'},
  { trainer_id: 4, url: 'http://res.cloudinary.com/rolover/image/upload/v1500676798/rachel-omnes-159038_nzxnte.jpg', type: 'main'},
  { trainer_id: 4, url: 'http://res.cloudinary.com/rolover/image/upload/v1500676795/leio-mclaren-299158_caimzl.jpg', type: 'main'},
  { trainer_id: 4, url: 'http://res.cloudinary.com/rolover/image/upload/v1500676796/kaci-baum-114910_vn1y0k.jpg', type: 'main'},
  { trainer_id: 4, url: 'http://res.cloudinary.com/rolover/image/upload/v1500614250/justin-veenema-156591_kw18s0.jpg', type: 'main'}
  ])
