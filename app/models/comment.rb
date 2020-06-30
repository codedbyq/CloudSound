class Comment < ApplicationRecord

    validates :user_id, :song_id, :body, presence: true

    belongs_to :song,
        foreign_key: :song_id,
        class_name: :Song 
    
    belongs_to :author,
        foreign_key: :user_id,
        class_name: :User 
    
end
