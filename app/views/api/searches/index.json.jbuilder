json.results do
    json.songs do 
        @songs.each do |song| 
            json.set! song.id do
                json.extract! song, :id, :title, :description, :genre, :artist_id, :created_at
                json.coverURL url_for(song.coverFile) if song.coverFile.attached?
                json.audioURL url_for(song.audioFile) if song.audioFile.attached?
            end
        end
    end

    json.users do
        @users.each do |user| 
            json.set! user.id do
                json.extract! user, :id, :username, :email, :bio
            end
        end
    end
end