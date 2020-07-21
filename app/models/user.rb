# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  username        :string           not null
#  bio             :string
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :username, :email, :password_digest, :session_token, presence: true
    validates :username, :email, :session_token, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true }

    has_many :songs,
        foreign_key: :artist_id,
        class_name: :Song

    has_many :comments,
        foreign_key: :user_id,
        class_name: :Comment

    has_one_attached :photo

    attr_reader :password
    after_initialize :ensure_session_token

    def self.search(input) 
        users = User.where("lower(username) LIKE ?", "#{search.downcase}")
    end

    def self.find_by_credentials(input, password)
        user = User.find_by(username: input) || User.find_by(email: input)
        user && user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end

end
