class Api::CommentsController < ApplicationController

    before_action :require_login, only: [:create, :delete, :update]

    def index
        @comments = Comment.all
    end

    def create
        @comment = Comment.new(comment_params)
        @comment.user_id = current_user.id 
        @comment.song_id = params[:id]

        if @comment.save
            @song = @comment.song
            render 'api/songs/show'
        else
            render json: @comment.errors.full_messages, status: 400
        end
    end

    def destroy
        @comment = Comment.find_by(user_id: current_user.id, song_id: params[:id])
        @comment.destroy
        @song = @comment.song 
        render 'api/songs/show'
    end

    private
    def comment_params
        params.require(:comment).permit(:body)
    end
end
