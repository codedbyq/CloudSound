json.extract! user, :id, :username, :email, :bio
json.photoURL url_for(user.photo) if user.photo.attached?
