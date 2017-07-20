## Component Hierarchy

* SessionFormContainer
  * SessionForm

* App
  * NavBar
    * GreetingContainer
      * Greeting
  * MainPage
    * SearchContainer
      * SearchBox
  * TrainerContainer
    * TrainerList
      * TrainerListItem
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
| Route | "/search-results" | "TrainerListContainer" |
| Route | "/trainers/:id" | "TrainerDetailContainer" |
| ProtectedRoute | "/trainers/:id" | "ReviewFormContainer" |
| ProtectedRoute | "/trainers/:id/bookings/new" | "BookingFormContainer" |
