## users
column name       | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
email             | string    | not null, unique
password_digest   | string    | not null, unique
session_token     | string    | not null, unique
profile_img_url   | string    | default = "http://res.cloudinary.com/rolover/image/upload/v1500672475/gray_logo_rnqfnk.png"

## dogs
column name       | data type | details
------------------|-----------|--------------------------------------------------
id                | integer   | not null, primary key
user_id           | integer   | not null, foreign key (references users), indexed
name              | string    | not null
age_year          | integer   |
age_month         | integer   |
weight            | integer   | not null
breed             | string    | not null
sex               | string    | not null, inclusion: [Male, Female]

## trainers
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary key
name               | string    | not null
obedience          | boolean   | not null
behavior           | boolean   | not null
advanced           | boolean   | not null
profile_quote      | text      | not null
description        | text      | not null
price              | integer   | not null
zip                | integer   | not null
city               | string    | not null
state              | string    | not null

## images
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary key
trainer_id         | integer   | foreign key (references trainers), indexed
img_url            | string    | not null
img_type           | string    | not null, inclusion: [profile, main]

## bookings
column name | data type | details
------------|-----------|-----------------------------------------------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
dog_id      | integer   | not null, foreign key (references dogs), indexed
trainer_id  | integer   | not null, foreign key (references trainers), indexed
start_date  | date      | not null
end_date    | date      | not null
status      | string    | not null, default = "PENDING", inclusion: [PENDING, APPROVED, DENIED]
message     | text      | not null


## reviews
column name | data type | details
------------|-----------|-----------------------------------------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
trainer_id  | integer   | not null, foreign key (references trainers), indexed
rating      | float     | not null
body        | text      | not null
