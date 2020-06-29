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

    validates :title, :artist_id, presence: true
    validates :artist_id, uniqueness: { scope: :title }

    belongs_to :artist,
        foreign_key: :artist_id,
        class_name: :User

    has_one_attached :audioFile
    has_one_attached :coverFile
end

