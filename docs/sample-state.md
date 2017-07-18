```js
{
  session: {
    currentUser: {
      id: 1,
      name: "Carrie Underwood"
    },
    errors: []
  },

  dogs: {
    1: {
      id: 1,
      user_id: 20,
      name: "Ruby",
      age_year: 1,
      age_month: 3,
      weight: 15,
      breed: "Shitzhu",
      sex: "Female"
    }
  }

  trainers: {
    1: {
      id: 1,
      name: "John Doe",
      training_type: "obedience",
      profile_quote: "Awesome Animal Lover",
      description: "John Doe is a .......",
      profile_image_url: "",
      price: 45,
      zip: 94109,
      city: "San Francisco",
      state: "California"
    },

    2: {
      id: 2,
      ...,
    }
  },

  trainerDetail: {
    currentTrainer: {
      id: 1,
      name: "John Doe",
      profile_quote: "Awesome Animal Lover",
      description: "John Doe is a .......",
      profile_image_url: "",
      image_urls: [],
      price: 45,
      zip: 94109,
      city: "San Francisco",
      state: "California"
    }
    reviews: [
      {
        user_id: 3,
        rating: 5,
        body: "John was such a great trainer!"
      },
      {
        user_id: 21,
        rating: 4,
        body: "My dog can sit & stay now! Yay!"
      }
    ]
  },

  bookings: {
    1: {
      user_id: 3,
      dog_id: 11,
      trainer_id: 1,
      start_date: { month: "Jul", day: 16, year: 2017 },
      end_date: { month: "Jul", day: 17, year: 2017 },
      status: "PENDING",
      message: "Hi, my dog ..."
    }
  },

  reviews: {
    1: {
      user_id: 21,
      trainer_id: 4,
      rating: 5,
      body: "My dog can sit & stay now! Yay!"
    }
  }
}
```
