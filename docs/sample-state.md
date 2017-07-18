```js
{
  session: {
    currentUser: {
      id: 1,
      name: "Carrie Underwood"
    },
    errors: []
  },

  trainers: {
    1: {
      id: 1,
      name: "John Doe",
      training_type: "obedience",
      profile_quote: "Awesome Animal Lover",
      description: "John Doe is a .......",
      profile_image_url: "",
      image_urls: [],
      price: 45,
      zip: 94109,
      city: "San Francisco",
      state: "California",
      review_ids: [7, 9, 20, 210]
    },

    2: {
      id: 2,
      ...,
    }
  },

  trainerDetail: {
    id: 1,
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
      trainer_id: 1,
      start_date: { month: "Jul", day: 16, year: 2017 },
      end_date: { month: "Jul", day: 17, year: 2017 }
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
