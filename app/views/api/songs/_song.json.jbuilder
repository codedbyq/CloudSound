json.extract! song, :id, :title, :description, :artist_id
json.coverURL url_for(song.cover) if song.cover.attached?