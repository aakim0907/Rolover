```js
{
  session: {
    currentUser: {
      id: 1,
      name: "Carrie Underwood",
      bookings: [
        {
          trainer_id: 1,
          start_date: { month: "Jul", day: 16, year: 2017 },
          end_date: { month: "Jul", day: 17, year: 2017 }
        }
      ]
    },
    errors: []
  },

  trainers: {
    1: {
      id: 1,
      name: "John Doe",
      image_urls: [],
      profile: "Awesome Animal Lover",
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
  }
}
```
