## Component Hierarchy

**AuthFormContainer**
* AuthForm

**HomeContainer**
* SearchContainer
* HomeIndex

**TrainerListContainer**
* TrainerList
  * TrainerListItem

**TrainerDetailContainer**
* TrainerDetail
* ReviewContainer
  * ReviewList
    * ReviewListItem
  * ReviewFormContainer

**BookingFormContainer**

**UserProfileContainer**
* BookingListContainer

**NavBar**
**Footer**

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/users/:id" | "UserProfileContainer" |
| "/" | "HomeContainer" |
| "/search-results" | "TrainerListContainer" |
| "/trainers/:id" | "TrainerDetailContainer" |
| "/trainers/:id/bookings/new" | "BookingFormContainer" |
