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
    currentTrainer: {
      id: 7,
      ...
    },

    byID: {
      1: {
        id: 1,
        name: "John Doe",
        training_type: "obedience",
        profile_quote: "Awesome Animal Lover",
        description: "John Doe is a .......",
        price: 45,
        zip: 94109,
        city: "San Francisco",
        state: "California",
        profile_image_id: 7
      },

      2: {
        id: 2,
        ...,
      }
    }
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
