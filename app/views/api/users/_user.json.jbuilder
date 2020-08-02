json.extract! user, :id, :username, :email, :bio
json.photoURL user.photo.attached? ? url_for(user.photo) : 'https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/User-Icon-Grey.png'
