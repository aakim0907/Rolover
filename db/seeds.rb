#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Dog.create([
  { user_id: 1, name: 'Ruby', age_year: 1, age_month: 3, weight: 30, breed: 'Shitzhu', sex: 'F' },
  { user_id: 1, name: 'Java', age_year: 3, weight: 15, breed: 'Maltize', sex: 'M' }
  ])

Image.create([
  # { trainer_id: 1, img_url: 'http://res.cloudinary.com/rolover/image/upload/v1500615300/rebekah-howell-221666_pxgagf.jpg', img_type: 'profile'},
  # { trainer_id: 1, img_url: 'http://res.cloudinary.com/rolover/image/upload/v1500676796/nick-turner-2570_cysug8.jpg', img_type: 'main'},
  # { trainer_id: 1, img_url: 'http://res.cloudinary.com/rolover/image/upload/v1500676796/greg-rakozy-234360_lnidhq.jpg', img_type: 'main'},
  # { trainer_id: 1, img_url: 'http://res.cloudinary.com/rolover/image/upload/v1500615297/ross-sokolovski-167993_vmclu0.jpg', img_type: 'main'},
  # { trainer_id: 1, img_url: 'http://res.cloudinary.com/rolover/image/upload/v1500614239/dawid-sobolewski-285655_iauvhs.jpg', img_type: 'main'},
  # { trainer_id: 2, img_url: 'http://res.cloudinary.com/rolover/image/upload/v1500615274/hannah-busing-310503_dyj1vz.jpg', img_type: 'profile'},
  # { trainer_id: 2, img_url: 'http://res.cloudinary.com/rolover/image/upload/v1500615252/pete-bellis-217830_o7hl7o.jpg', img_type: 'main'},
  # { trainer_id: 2, img_url: 'http://res.cloudinary.com/rolover/image/upload/v1500676791/alexander-dummer-117495_alnvz6.jpg', img_type: 'main'},
  # { trainer_id: 2, img_url: 'http://res.cloudinary.com/rolover/image/upload/v1500676794/crew-56836_uxjhwt.jpg', img_type: 'main'},
  # { trainer_id: 2, img_url: 'http://res.cloudinary.com/rolover/image/upload/v1500615255/nicolas-tessari-218491_hswkzo.jpg', img_type: 'main'},
  # { trainer_id: 3, img_url: 'http://res.cloudinary.com/rolover/image/upload/v1500666134/hJLEzfh-1_p49exx.jpg', img_type: 'profile'},
  # { trainer_id: 3, img_url: 'http://res.cloudinary.com/rolover/image/upload/v1500676798/pete-bellis-217145_wryecn.jpg', img_type: 'main'},
  # { trainer_id: 3, img_url: 'http://res.cloudinary.com/rolover/image/upload/v1500676792/andrew-pons-9713_uhf06p.jpg', img_type: 'main'},
  # { trainer_id: 3, img_url: 'http://res.cloudinary.com/rolover/image/upload/v1500676792/andrew-branch-123375_arltld.jpg', img_type: 'main'},
  # { trainer_id: 3, img_url: 'http://res.cloudinary.com/rolover/image/upload/v1500676792/andy-omvik-295479_qi5fxn.jpg', img_type: 'main'},
  # { trainer_id: 4, img_url: 'http://res.cloudinary.com/rolover/image/upload/v1500615295/marvin-meyer-188676_wnyexr.jpg', img_type: 'profile'},
  # { trainer_id: 4, img_url: 'http://res.cloudinary.com/rolover/image/upload/v1500676798/rachel-omnes-159038_nzxnte.jpg', img_type: 'main'},
  # { trainer_id: 4, img_url: 'http://res.cloudinary.com/rolover/image/upload/v1500676795/leio-mclaren-299158_caimzl.jpg', img_type: 'main'},
  # { trainer_id: 4, img_url: 'http://res.cloudinary.com/rolover/image/upload/v1500676796/kaci-baum-114910_vn1y0k.jpg', img_type: 'main'},
  # { trainer_id: 4, img_url: 'http://res.cloudinary.com/rolover/image/upload/v1500614250/justin-veenema-156591_kw18s0.jpg', img_type: 'main'}
  { trainer_id: 1, img_url: 'http://res.cloudinary.com/rolover/image/upload/v1501021956/220px-Cesar_millan_duxfsk.jpg', img_type: 'profile'},
  { trainer_id: 1, img_url: 'http://res.cloudinary.com/rolover/image/upload/v1501021956/K%C3%B6peklere_F%C4%B1s%C4%B1ldayan_Adam_lsxick.jpg', img_type: 'main'},
  { trainer_id: 1, img_url: 'http://res.cloudinary.com/rolover/image/upload/v1501022116/cesar-bio2_v8hzrh.jpg', img_type: 'main'},
  { trainer_id: 1, img_url: 'http://res.cloudinary.com/rolover/image/upload/v1501021956/How-to-talk-to-your-dog_jpmmzj.jpg', img_type: 'main'},
  { trainer_id: 1, img_url: 'http://res.cloudinary.com/rolover/image/upload/v1501022151/What-People-Say-about-Cesar-Millan-Live_egnynf.jpg', img_type: 'main'},
  { trainer_id: 2, img_url: 'http://res.cloudinary.com/rolover/image/upload/v1501029144/41008-025_cwn06r.jpg', img_type: 'profile'},
  { trainer_id: 2, img_url: 'http://res.cloudinary.com/rolover/image/upload/v1501029144/dsc_0076_izsbxv.jpg', img_type: 'main'},
  { trainer_id: 2, img_url: 'http://res.cloudinary.com/rolover/image/upload/v1501029144/dscn0184_eqfqf2.jpg', img_type: 'main'},
  { trainer_id: 2, img_url: 'http://res.cloudinary.com/rolover/image/upload/v1501029143/images_h11gx7.jpg', img_type: 'main'},
  { trainer_id: 2, img_url: 'http://res.cloudinary.com/rolover/image/upload/v1501029144/James-Hamm_j6w8ti.jpg', img_type: 'main'},
  { trainer_id: 3, img_url: 'http://res.cloudinary.com/rolover/image/upload/v1501030169/linda-sparky-199x240_mxbbsa.jpg', img_type: 'profile'},
  { trainer_id: 3, img_url: 'http://res.cloudinary.com/rolover/image/upload/v1501030169/Linda-Michaels-1_lntpxs.jpg', img_type: 'main'},
  { trainer_id: 3, img_url: 'http://res.cloudinary.com/rolover/image/upload/v1501030169/IMG_5205_2-266x300_zm7vni.jpg', img_type: 'main'},
  { trainer_id: 3, img_url: 'http://res.cloudinary.com/rolover/image/upload/v1501030169/1074288_571493969558977_1456544694_o-300x191_ucczor.jpg', img_type: 'main'},
  { trainer_id: 4, img_url: 'http://res.cloudinary.com/rolover/image/upload/v1501030916/Tonya-Wilhelm1_gatcjj.jpg', img_type: 'profile'},
  { trainer_id: 4, img_url: 'http://res.cloudinary.com/rolover/image/upload/v1501030916/Tonya-Wilhelm-dog-trainer_lxnrsa.jpg', img_type: 'main'},
  { trainer_id: 4, img_url: 'http://res.cloudinary.com/rolover/image/upload/v1501030916/Tonya-Wilhelm_mwcht1.jpg', img_type: 'main'},
  { trainer_id: 4, img_url: 'http://res.cloudinary.com/rolover/image/upload/v1501030916/images_cigzhr.jpg', img_type: 'main'},
  { trainer_id: 5, img_url: 'http://res.cloudinary.com/rolover/image/upload/v1501034775/martin-deeley-training-297x300_ffbozn.jpg', img_type: 'profile'},
  { trainer_id: 5, img_url: 'http://res.cloudinary.com/rolover/image/upload/v1501034775/Martin-Deeley1_qcv29a.jpg', img_type: 'main'},
  { trainer_id: 5, img_url: 'http://res.cloudinary.com/rolover/image/upload/v1501034775/Martin-Deeley_wuubqe.jpg', img_type: 'main'},
  { trainer_id: 5, img_url: 'http://res.cloudinary.com/rolover/image/upload/v1501034775/md-fl-dog-heel-274x300_xu9tjk.png', img_type: 'main'},
  { trainer_id: 6, img_url: 'http://res.cloudinary.com/rolover/image/upload/v1501035606/Ian-Dunbar_msaqfm.jpg', img_type: 'profile'},
  { trainer_id: 6, img_url: 'http://res.cloudinary.com/rolover/image/upload/v1501035606/Ian-Dunbar1_fjlv3s.jpg', img_type: 'main'},
  { trainer_id: 6, img_url: 'http://res.cloudinary.com/rolover/image/upload/v1501035606/hqdefault_yqzatz.jpg', img_type: 'main'},
  { trainer_id: 6, img_url: 'http://res.cloudinary.com/rolover/image/upload/v1501035606/1024x1024_adf1km.jpg', img_type: 'main'},
  { trainer_id: 7, img_url: 'http://res.cloudinary.com/rolover/image/upload/v1501036299/16641094_1236637856384561_3065910687404662623_n_pa653a.jpg', img_type: 'profile'},
  { trainer_id: 7, img_url: 'http://res.cloudinary.com/rolover/image/upload/v1501036299/10258424_680348342013518_3150777692879905584_o_j4dbaq.jpg', img_type: 'main'},
  { trainer_id: 7, img_url: 'http://res.cloudinary.com/rolover/image/upload/v1501036299/27342334_dbb0v4.jpg', img_type: 'main'},
  { trainer_id: 7, img_url: 'http://res.cloudinary.com/rolover/image/upload/v1501036299/download_mh7ach.jpg', img_type: 'main'}
  # { trainer_id:, img_url: '', img_type: ''}
  ])

  Review.create([
    # { user_id: 1, trainer_id: 1, rating: 5, body: "Kelly loves Hash Browns so much!!!"},
    # { user_id: 1, trainer_id: 2, rating: 5, body: "Hope loves Corgis so much!!!"},
    # { user_id: 1, trainer_id: 3, rating: 5, body: "David loves snacks so much!!!"},
    # { user_id: 1, trainer_id: 4, rating: 5, body: "Aaron loves dogs so much!!!"},
    # { user_id: 1, trainer_id: 1, rating: 4, body: "Looking forward to next training session!"},
    # { user_id: 1, trainer_id: 2, rating: 4, body: "My dog can roll over now. Thanks Hope:)"}
    { user_id: 3, trainer_id: 1, rating: 5, body: 'Cesar is a great person. He is hard-working, honest, and a very personable guy. He personally spent time with me to go over the problem I was having with my dog, and gave me great advices. Thanks so much.'},
    { user_id: 4, trainer_id: 1, rating: 4, body: "My dog had a separation anxiety. During the training session, Cesar helped me understand the reasons behind my dog's behaviors. I would have never been able to fully understand my dog if it weren't for Cesar." },
    { user_id: 5, trainer_id: 1, rating: 5, body: 'I had a last-minute trainig session with Cesar for an upcoming dog contest. The session was very useful: intense yet so interactive with my dog. Our performance was great and won a gold medal! It was awesome!'},
    { user_id: 6, trainer_id: 1, rating: 5, body: 'Cesar was awesome! I would definitely love to meet with him again. My dog was able to learn few cool tricks!'},
    { user_id: 3, trainer_id: 2, rating: 4, body: 'James really knew how to communicate with the dogs. I was very impressed by his proficiency.' },
    { user_id: 6, trainer_id: 2, rating: 5, body: 'I loved how his trainings were the real world experience the dogs get. He also introduced me to a doctor that he knew and helped him relax and calm down. Difference in my dog was amazing and I would definitely contact James again!' },
    { user_id: 2, trainer_id: 3, rating: 5, body: 'Linda easily trained my dog using positive dog training methods which were really effective! I was really impressed! Would definitely revisit her.' },
    { user_id: 6, trainer_id: 3, rating: 4, body: 'Her training completely surpassed my expectations. My dog is so well behaved now walking without a leash for hours and obeying my commands! I no longer have to be stressed worrying about my dog. I appreciate the time Linda spent with my dog.' },
    { user_id: 7, trainer_id: 3, rating: 4, body: "Linda was not only great in training my dog, but she also introduced me to a new 'job' as my dog's handler. It was a great experience!" },
    { user_id: 3, trainer_id: 4, rating: 5, body: 'Meeting with Tonya was the best decision I made this year. After a phone call, she invited me over to a well-equipped training facility where me and my dog were able to learn so much.' },
    { user_id: 7, trainer_id: 4, rating: 5, body: 'Tonya goes beyond regular dog training. It was very obvious that she loved what she does and had a true love for dogs' },
    { user_id: 2, trainer_id: 5, rating: 4, body: "I have always wanted to meet Martin in person and get help on training my dog ever since I read his book. It was a great opportunity to get to meet him and receive such a great advice!" },
    { user_id: 4, trainer_id: 5, rating: 4, body: 'Martin is a great trainer, and an amazing person. It was a pleasure working with him. Reputations do not lie!' },
    { user_id: 4, trainer_id: 6, rating: 4, body: 'Ian had me and my dog play interactive games which definitely helped us enhance our relationship. He stressed that the stronger our relationship is, the better our training will go. I greatly appreciated that he set such a strong bond between us.' },
    { user_id: 5, trainer_id: 6, rating: 5, body: 'My dog had some aggression issues that made me worried even when we were out for a short walk. Ian helped me understand my dog more and improve her behavior.' },
    { user_id: 7, trainer_id: 6, rating: 5, body: 'It was so great getting to meet him in person knowing that he is a renowned trainer and a vet. During the session, I felt relieved knowing that I were in good hands.' },
    { user_id: 2, trainer_id: 7, rating: 5, body: 'My dog was always craving for attention and overflowing with energy that actually was disturbing us. Kyra introduced us to dog sports which exposed her to new things, teached her to make good choices and gave her emotional support and confidence.' },
    { user_id: 5, trainer_id: 7, rating: 4, body: 'Kyra helped me realize how discipline is an important factor in building a strong relationship with my dog. Her energy was amazing!' }
    # { user_id:, trainer_id:, rating:, body: '' }
    ])

  # Cesar Millan
  Trainer.create([
    # { name: 'Kelly', obedience: true, behavior: true, advanced: true, profile_quote: 'Y\'all good?', description: 'Hash Browns', price: 50, zip: 94109, city: 'San Francisco', state: 'California' },
    # { name: 'Hope', obedience: true, behavior: true, advanced: true, profile_quote: 'Corgis rock!', description: 'Love for Sir Toast<3', price: 45, zip: 94109, city: 'San Francisco', state: 'California' },
    # { name: 'David', obedience: true, behavior: false, advanced: false, profile_quote: 'Capybara David', description: 'I will take care of your dogs!!', price: 20, zip: 94109, city: 'San Francisco', state: 'California' },
    # { name: 'Aaron', obedience: true, behavior: true, advanced: false, profile_quote: 'Love for dogs', description: 'React is awesome', price: 20, zip: 94109, city: 'San Francisco', state: 'California' }
    { name: 'Cesar Millan', obedience: true, behavior: true, advanced: true, profile_quote: "Creating balanced relationships between humans and canines", description: "Cesar Millan is a Mexican-American dog behaviorist with over 25 years of canine experience. He is widely known for his Emmy-nominated television series 'Dog Whisperer with Cesar Millan'.", price: 70, zip: 94109, city: 'San Francisco', state: 'California'},
    { name: 'James Hamm', obedience: true, behavior: false, advanced: false, profile_quote: 'Lonestar dog trainer providing real world dog training!', description: 'James is a retired United States Army Command Sergeant Major who served for 30 years on Active Duty. He is responsible for leading the preservation of balanced and human approaches to dog training', price: 65, zip: 76540, city: 'Killeen', state: 'Texas' },
    { name: 'Linda Michaels', obedience: true, behavior: false, advanced: false, profile_quote: "Our clients aren't just dogs, they're family!", description: 'Linda focuses on the psychological aspects of dog behavior that often mirror human psychological conditions, such as: fear, separation/attachment disorders, and aggression towards humans ad other dogs. She teaches private, customized basic manners/obedience lessons for dogs of all ages and every breed.', price: 70, zip: 92130, city: 'San Diego', state: 'California' },
    { name: 'Tonya Wilhelm', obedience: false, behavior: false, advanced: true, profile_quote: 'Raising your pets naturally', description: 'Tonya Wilhelm provides positive dog training services, helping thousands of dog owners over twenty years to start happy relationship with their dogs. The dog owners get the needed tools and learn the necessary skills for the positive training of their dogs', price: 60, zip: 43528, city: 'Holland', state: 'Ohio' },
    { name: 'Martin Deely', obedience: false, behavior: true, advanced: true, profile_quote: 'To give you a lifetime of happy companionship', description: 'Martin Deely is an internationally renowned for over 35 years as a trainer, author and teacher. He is widely known as a professional canine behaviorist and dog training expert.', price: 60, zip: 94104, city: 'San Francisco', state: 'California' },
    { name: 'Ian Dunbar', obedience: true, behavior: true, advanced: false, profile_quote: 'Dogs with Dunbar', description: 'Dr. Ian Dunbar is not just a professional dog trainer as he is also a veterinarian and animal behaviorist. He is the first in the whole world to design and teach off-leash puppy socialization and training classes.', price: 70, zip: 94109, city: 'San Francisco', state: 'California' },
    { name: 'Kyra Sundance', obedience: false, behavior: false, advanced: true, profile_quote: 'Do more with your dog!', description: 'Training dogs for Kyra is a lifestyle and is also about involving your dog in your life through sports, training, and more.', price: 70, zip: 94109, city: 'San Francisco', state: 'California' }
    # { name: '', obedience:, behavior:, advanced:, profile_quote: '', description: '', price:, zip:, city: '', state: '' }
    ])

  User.create([
    { email: 'guest@rolover.dog', password: 'woofbark' },
    { email: 'ying@gmail.com', password: 'ying@gmail', profile_img_url: 'http://res.cloudinary.com/rolover/image/upload/v1500676799/yingchou-han-170404_narkbn.jpg' },
    { email: 'alex@gmail.com', password: 'alex@gmail', profile_img_url: 'http://res.cloudinary.com/rolover/image/upload/v1500614251/user_profile/alex-klopcic-302332_epi8zb.jpg' },
    { email: 'hannah@gmail.com', password: 'hannah@gmail', profile_img_url: 'http://res.cloudinary.com/rolover/image/upload/v1500615274/user_profile/hannah-busing-310503_dyj1vz.jpg'},
    { email: 'belle@gmail.com', password: 'belle@gmail', profile_img_url: 'http://res.cloudinary.com/rolover/image/upload/v1500615279/user_profile/pete-bellis-191833_nulkd9.jpg' },
    { email: 'jennifer@rolover.dog', password: 'alexandria@gmail', profile_img_url: 'http://res.cloudinary.com/rolover/image/upload/v1500615252/user_profile/pete-bellis-217830_o7hl7o.jpg'},
    { email: 'teddy@gmail.com', password: 'teddy@gmail', profile_img_url: 'http://res.cloudinary.com/rolover/image/upload/v1500615300/user_profile/teddy-kelley-124043_ameyan.jpg' }
    ])
