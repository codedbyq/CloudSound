json.extract! song, :id, :title, :description, :genre, :created_at
json.coverURL url_for(song.coverFile) if song.coverFile.attached?
json.audioURL url_for(song.audioFile) if song.audioFile.attached?
json.artist song.artist, :id, :username