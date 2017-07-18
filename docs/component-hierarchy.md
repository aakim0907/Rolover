## Component Hierarchy

**SessionFormContainer**
* SessionForm

**NavBar**
* GreetingsContainer

**HomeContainer**
* SearchContainer
* HomeIndex

**TrainerListContainer**
* SearchContainer
* TrainerList
  * TrainerListItem

**TrainerDetailContainer**
* TrainerDetail
* ReviewContainer
  * ReviewList
    * ReviewListItem
  * ReviewFormContainer
    * ReviewForm

**BookingFormContainer**
* BookingForm

**Footer**

## Routes

| Route Type | Path  | Component   |
|------------|-------|-------------|
| AuthRoute | "/sign-up" | "SessionFormContainer" |
| AuthRoute | "/sign-in" | "SessionFormContainer" |
| Route(exact path) | "/" | "HomeContainer" |
| Route | "/search-results" | "TrainerListContainer" |
| Route | "/trainers/:id" | "TrainerDetailContainer" |
| ProtectedRoute | "/trainers/:id" | "ReviewFormContainer" |
| ProtectedRoute | "/trainers/:id/bookings/new" | "BookingFormContainer" |
