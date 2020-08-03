class Api::CommentsController < ApplicationController

    # before_action :require_login, only: [:create, :delete, :update]

    def index
        @song = Song.find(params[:song_id])
        @comments = @song.comments
        render :index
    end

    def create
        @comment = Comment.new(comment_params)
        @comment.user_id = current_user.id 

        if @comment.save
            @song = @comment.song_id
            render :show
        else
            render json: @comment.errors.full_messages, status: 400
        end
    end

    def destroy
        @comment = Comment.find(params[:id])
        @comment.destroy

        render :show
    end

    private
    def comment_params
        params.require(:comment).permit(:body, :song_id)
    end
end
