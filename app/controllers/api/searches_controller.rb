class Api::SearchesController < ApplicationController

    def search
        input = params[:input]
        @songs = Song.where("lower(title) LIKE :search or lower(genre) LIKE :search", :search => "%#{input.downcase}%")
        @users = User.where("lower(username) LIKE ?", "%#{input.downcase}%")

        render :index
    end

end
