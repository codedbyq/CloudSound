class Api::SongsController < ApplicationController

    # before_action :require_login, only: [:create, :delete, :update]

    def index
        @songs = Song.all
        render 'api/songs/index'
    end

    def show
        @song = Song.find(params[:id])
        render 'api/songs/show'
    end

    def create
        @song = Song.new(song_params)
        @song.artist_id = current_user.id

        if @song.save
            render 'api/songs/show'
        else
            render json: @song.errors.full_messages, status: 400
        end
    end

    def update
        @song = Song.find(params[:id])
        @song.update(song_params)

        if @song.save
            render 'api/songs/show'
        else
            render json: @song.errors.full_messages, status: 400
        end
    end

    def destroy
        @song = Song.find(params[:id])
        render 'api/songs/show' if @song.delete
    end

    private 
    def song_params
        params.require(:song).permit(:title, :description, :genre, :audioFile, :coverFile)
    end
end
