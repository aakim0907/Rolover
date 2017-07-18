## Component Hierarchy

**AuthFormContainer**
* AuthForm

**HomeContainer**
* NavBar
* SearchContainer
* HomeIndex

**TrainerListContainer**
* NavBar
* TrainerList
  * TrainerListItem

**TrainerDetailContainer**
* NavBar
* TrainerDetail
* ReviewContainer
  * ReviewList
    * ReviewListItem
  * ReviewFormContainer
    * ReviewForm

**BookingFormContainer**
* NavBar
* BookingForm

**Footer**

## Routes

| Route Type | Path  | Component   |
|------------|-------|-------------|
| AuthRoute | "/sign-up" | "AuthFormContainer" |
| AuthRoute | "/sign-in" | "AuthFormContainer" |
| Route(exact path) | "/" | "HomeContainer" |
| Route | "/search-results" | "TrainerListContainer" |
| Route | "/trainers/:id" | "TrainerDetailContainer" |
| ProtectedRoute | "/trainers/:id" | "ReviewFormContainer" |
| ProtectedRoute | "/trainers/:id/bookings/new" | "BookingFormContainer" |
