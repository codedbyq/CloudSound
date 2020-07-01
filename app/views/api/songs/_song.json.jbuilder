json.extract! song, :id, :title, :description, :genre, :artist_id, :created_at
json.coverURL url_for(song.coverFile) if song.coverFile.attached?
json.audioURL url_for(song.audioFile) if song.audioFile.attached?