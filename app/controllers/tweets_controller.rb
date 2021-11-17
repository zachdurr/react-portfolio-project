class TweetsController < ApplicationController
  def index
    tweets = Tweet.order("created_at DESC")
    render json: tweets
  end

  def create
    tweet = Tweet.create(tweet_param)
    render json: tweet
  end

  def update
    tweet = tweet.find(params[:id])
    tweet.update_attributes(tweet_param)
    render json: tweet
  end

  def destroy
    tweet = Tweet.find(params[:id])
    tweet.destroy
    head :no_content, status: :ok
  end

  private
    def tweet_param
      params.require(:tweet).permit(:text)
    end
end
