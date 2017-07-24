# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170724233827) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookings", force: :cascade do |t|
    t.integer "user_id",                           null: false
    t.integer "dog_id",                            null: false
    t.integer "trainer_id",                        null: false
    t.date    "start_date",                        null: false
    t.date    "end_date",                          null: false
    t.string  "status",        default: "PENDING", null: false
    t.text    "message",                           null: false
    t.string  "training_type"
    t.index ["dog_id"], name: "index_bookings_on_dog_id", using: :btree
    t.index ["trainer_id"], name: "index_bookings_on_trainer_id", using: :btree
    t.index ["user_id"], name: "index_bookings_on_user_id", using: :btree
  end

  create_table "dogs", force: :cascade do |t|
    t.integer "user_id",   null: false
    t.string  "name",      null: false
    t.integer "age_year"
    t.integer "age_month"
    t.integer "weight",    null: false
    t.string  "breed",     null: false
    t.string  "sex",       null: false
    t.index ["user_id"], name: "index_dogs_on_user_id", using: :btree
  end

  create_table "images", force: :cascade do |t|
    t.integer "trainer_id", null: false
    t.string  "img_url",    null: false
    t.string  "img_type",   null: false
    t.index ["trainer_id"], name: "index_images_on_trainer_id", using: :btree
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "user_id",    null: false
    t.integer "trainer_id", null: false
    t.integer "rating",     null: false
    t.text    "body",       null: false
    t.index ["trainer_id"], name: "index_reviews_on_trainer_id", using: :btree
    t.index ["user_id"], name: "index_reviews_on_user_id", using: :btree
  end

  create_table "trainers", force: :cascade do |t|
    t.string   "name",          null: false
    t.text     "profile_quote", null: false
    t.text     "description",   null: false
    t.integer  "price",         null: false
    t.integer  "zip",           null: false
    t.string   "city",          null: false
    t.string   "state",         null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.boolean  "obedience",     null: false
    t.boolean  "behavior",      null: false
    t.boolean  "advanced",      null: false
    t.index ["advanced"], name: "index_trainers_on_advanced", using: :btree
    t.index ["behavior"], name: "index_trainers_on_behavior", using: :btree
    t.index ["obedience"], name: "index_trainers_on_obedience", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                                                                                                       null: false
    t.string   "password_digest",                                                                                             null: false
    t.string   "session_token",                                                                                               null: false
    t.datetime "created_at",                                                                                                  null: false
    t.datetime "updated_at",                                                                                                  null: false
    t.string   "profile_img_url", default: "http://res.cloudinary.com/rolover/image/upload/v1500672475/gray_logo_rnqfnk.png"
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
  end

end
