class Api::SearchesController < ApplicationController

    def search
        search = params[:search]
        @songs = Song.where("lower(title) LIKE ? or lower(genre) LIKE ?", :search => "%#{search.downcase}%")
        @users = User.where("lower(username) LIKE ?", "%#{search.downcase}%")

        render
    end

end
