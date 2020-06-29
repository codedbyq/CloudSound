# == Schema Information
#
# Table name: songs
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :string
#  artist_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Song < ApplicationRecord

    @@GENRES = [
        "None",
        "Alternative",
        "Ambient",
        "Classical",
        "Country",
        "Dance &amp; EDM",
        "Dancehall",
        "Dubstep",
        "Electronic",
        "Hip-Hop",
        "Indie",
        "Jazz &amp; Blues",
        "Latin",
        "Metal",
        "Piano",
        "Pop",
        "R&amp;B &amp; Soul",
        "Reggae",
        "Reggaeton",
        "Rock",
        "Soundtrack",
    ]

    validates :title, :artist_id, presence: true
    validates :artist_id, uniqueness: { scope: :title }
    validates :genre, inclusion: { in: @@GENRES }

    has_one_attached :audioFile
    has_one_attached :coverFile
end

