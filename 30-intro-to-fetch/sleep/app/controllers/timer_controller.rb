class TimerController < ApplicationController
  def show
    arr = ["Did you hear about the restaurant on the moon? Great food, no atmosphere.",
    "What do you call a fake noodle? An impasta.",
    "How many apples grow on a tree? All of them.",
    "Want to hear a joke about paper? Never mind it's tearable.",
    "I just watched a program about beavers. It was the best dam program I've ever seen.",
    "Why did the coffee file a police report? It got mugged.",
    "Where does a penguin keep his money?  In a snow bank.",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "I'm reading a book about anti-gravity. It's impossible to put down!",
    "What's the best part about living in Switzerland? I don't know, but the flag is a big plus.",
    "A slice of apple pie is $2.50 in Jamaica and $3.00 in the Bahamas. These are the pie rates of the Caribbean.",

  ]
    sleep(params[:num].to_i)
    render json: {
      results: {
        message: arr[rand(10)],
        seconds: params[:num].to_i
      }
    }
  end
end
