# API Endpoints

## HTML API
### Root
* `GET /`
  * Loads React web app

## JSON API
### Session
* `POST /api/session`
* Log In

* `DELETE /api/session`
* Log Out

### Users
* `POST /api/users`
  * Sign Up

### Dogs
* `GET /api/users/:id/dogs`
  * Fetch current user's dogs

### Trainers
* `GET /api/trainers/?query_params`
  * Trainers index/Search
  * Respond to a query with matching trainers

* `GET /api/trainers/:id`
  * Show trainer detail page

### Bookings
* `GET /api/users/:id/bookings`
  * Fetch current user's bookings

* `POST /api/trainers/:id/bookings`
  * Create new booking

* `DELETE /api/bookings/:id`
  * Delete booking

### Reviews
* `GET /api/trainers/:id/reviews`
  * Fetch given trainer's reviews

* `POST /api/trainers/:id/reviews`
  * Create new review for a trainer
