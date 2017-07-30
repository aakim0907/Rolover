# Rolover

[http://rolover.dog](https://rolover.dog)

[Rolover](http://rolover.dog) is a full-stack web application, inspired by Rover. Rolover enables users to search for dog trainers according to different training types, and send a request to book a training session with a trainer.

Rolover is a personal project by Young Eun Kim.

![Rolover splash page][splash]
![Rolover trainer index page][index page]

## Features

### Secure Authentication
* BCrypt for password-salting and hashing for a secure authentication system
* Demo Account available
* Modals used to let users Log In/Sign Up without redirecting

![Auth modal][auth modal]

### Trainer Search
* Search for trainers based on different training types
* Click through search results to reach trainer detail page
* Additional search bar on trainer index page to assist users with further search

![Trainer search][trainer search]

### Send a booking request to a Trainer
* Send request to a trainer for a training session
* Different booking form for users with/without saved dog information
* Only logged in users can send request (pops up log in modal when not logged in)

![Booking][booking]

### Leave a review to a trainer
* Leave reviews for a trainer with rating system
* Review count and average rating available
* Only logged in users can leave a review

![Review][review]

### User profile page
* Keep track of booking records
* Can add dog information

![Dog][dog]

## Project Design

Rolover was designed and built in 2 weeks. View the original [proposal][proposal] and [database schema][schema].

## Implementation

### User Authentication

- Users must be logged in to either leave a review or make a booking request. Review section renders different contents depending on whether the user is logged in or not, and attempting to access the booking form when logged out pops up a modal prompting the user to log in. Searching and browsing is accessible to all users.
- Users have access to their own profile page which includes information about their dogs and bookings.
- Signing out redirects the users to the main page.

This is achieved through the implementation of Protected routes (routes that cannot be visited unless logged in). React DOM makes this easy by creating a component for every route under a switch.

```js
<Switch>
  <ProtectedRoute path='/trainers/:id/bookings/new' component={BookingFormContainer}/>
  <Route path='/trainers/:id' component={TrainerDetailContainer}/>
  <Route path='/trainers' component={TrainerListContainer}/>
  <ProtectedRoute path='/profile' component={UserProfileContainer}/>
  <Route exact path="/" component={MainPage}/>
</Switch>
```

### Trainers

When fetching trainer information from the backend, it also fetches average rating and review count information as well as all the images for each trainer. These data utilize a combination of associations and methods in Trainer model where it also handles the basic logic of searching for trainers with training types.

```ruby
has_many :images
has_many :bookings
has_many :reviews

def self.search(search_params)
  searched = []
  search_params.each do |key, val|
    searched.concat(self.where(key, "= true")) if val == "true"
  end
  searched.uniq
end

def rating
  reviewTotal = 0
  reviews.each { |review| reviewTotal += review.rating }
  reviewTotal.to_f / reviews.count
end

def review_count
  reviews.count
end
```

In detail page for each trainers, a carousel was implemented to display each trainers images.

```js
// trainer_detail.jsx
<div className='trainer-header-box-1'>
  <TrainerCarousel images={images} />
</div>

// trainer_carousel.jsx
class TrainerCarousel extends React.Component {
  render() {
    const { images } = this.props;
    return (
      <Carousel wrapAround={true} autoplay={true} autoplayInterval={10000} width={600} initialHeight={600} decorators={Decorators}>
        { images.map(image => {
          return (
            <img key={image.id} className='carousel-img' src={image.img_url} />
          );
        })}
      </Carousel>
    );
  }
}
```

### Review & Booking

Review section and booking form are only accessible to logged in users. For the review section, a conditional statement was used to render different contents depending on the users' logged in status.

```js
render() {
  if (this.props.currentUser) {
    return (
      <div className='review-form-container'>
        <form onSubmit={this.handleSubmit}>
          ...
        </form>
      </div>
    );
  } else {
    return (
      <div className='review-form-container'>
        <p>( Log in to leave a review )</p>
      </div>
    );
  }
}
```

For the booking form, an auth modal pops up when a user tries to access the form without logging in.

```js
handleBooking() {
  const { trainer, currentUser } = this.props;
  if (currentUser) {
    this.props.history.push(`/trainers/${trainer.id}/bookings/new`);
  } else {
    this.openModal();
  }
}
```

After user logs in, the modal will close if there were no errors (e.g. invalid email and password). If there are any errors, the auth modal will display them prompting the users to try again..

```js
handleSubmit(e) {
  e.preventDefault();
  const user = this.state;
  this.props.processForm(user).then(
    () => {
      if (this.props.errors.length === 0) {
        this.props.closeModal();
      }
    }
  );
}
```

## Technology
Rolover is a single-page application built on the following technologies:

### Backend
- Ruby on Rails
- PostgreSQL database
- Cloudinary for image upload and storage
- BCrypt for password-salting and hashing for a secure authentication system

### Frontend
- React.js with Redux
- React DOM
- React Router
- jQuery
- React Modal
- Nuka Carousel
- GoogleMap API
- Webpack as the bundler for all frontend components. The bundled file is located in `/app/assets/javascripts` and is included in `application.js`.

### Hosting
- Heroku platform

## Future Implementations

#### Implement zipcode search

Users can also search with zipcode.

#### Develop trainer accounts

Trainers can make an account to upload their information and either approve/deny booking requests.

[splash]: ./docs/images/splash.png "Rolover splash"
[index page]: ./docs/images/home_index.png
[auth modal]: ./docs/images/auth_modal.gif
[trainer search]: ./docs/images/trainer_search.gif
[booking]: ./docs/images/booking.gif
[review]: ./docs/images/review.gif
[review]: ./docs/images/dog.gif

[proposal]: ./docs/README.md
[schema]: ./docs/schema.md
