## Component Hierarchy

* SessionFormContainer
  * SessionForm

* NavBar

* GreetingContainer
  * Greeting

* MainPage

* SearchContainer
  * SearchBox

* TrainerListContainer
  * TrainerList
    * TrainerListItem

* TrainerDetailContainer
  * TrainerDetail

* ReviewContainer
  * ReviewList
    * ReviewListItem

* ReviewFormContainer
  * ReviewForm

* BookingFormContainer
  * BookingForm

* Footer

## Routes

| Route Type | Path  | Component   |
|------------|-------|-------------|
| Route(exact path) | "/" | "HomeContainer" |
| Route(exact path) | "/" | "SearchContainer" |
| Route | "/s" | "TrainerListContainer" |
| Route | "/s" | "SearchContainer" |
| Route | "/trainers/:id" | "TrainerDetailContainer" |
| Route | "/trainers/:id" | "ReviewContainer" |
| ProtectedRoute | "/trainers/:id" | "ReviewFormContainer" |
| ProtectedRoute | "/trainers/:id/bookings/new" | "BookingFormContainer" |
