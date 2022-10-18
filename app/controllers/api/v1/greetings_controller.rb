class Api::V1::GreetingsController < ApplicationController
  def index
    @greetings = Greeting.all.sample.message
    respond_to do |format|
      format.json { render json: @greetings }
      format.html { render json: @greetings }
    end
  end
end
