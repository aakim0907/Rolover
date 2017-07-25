json.extract! review, :id, :rating, :body
json.user do
  json.email review.user.email
  json.profile review.user.profile_img_url
end
