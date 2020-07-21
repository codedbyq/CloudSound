class Api::SearchesController < ApplicationController

    def search
        search = params[:search]
        @songs = Song.where("lower(title) LIKE :search or lower(genre) LIKE :search", :search => "%#{search.downcase}%")
        @users = User.where("lower(username) LIKE ?", "%#{search.downcase}%")

        render :index
    end

end
