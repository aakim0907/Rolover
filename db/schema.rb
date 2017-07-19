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

ActiveRecord::Schema.define(version: 20170719233939) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "images", force: :cascade do |t|
    t.integer "trainer_id", null: false
    t.string  "url",        null: false
    t.string  "type",       null: false
    t.index ["trainer_id"], name: "index_images_on_trainer_id", using: :btree
  end

  create_table "trainers", force: :cascade do |t|
    t.string   "name",          null: false
    t.string   "training_type", null: false
    t.text     "profile_quote", null: false
    t.text     "description",   null: false
    t.integer  "price",         null: false
    t.integer  "zip",           null: false
    t.string   "city",          null: false
    t.string   "state",         null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
  end

end
