require 'sinatra/base'

class App < Sinatra::Base
  get '/' do
    erb :index
  end

  put '/' do
    puts "uploaded #{env['HTTP_X_FILENAME']} - #{request.body.read.size} bytes"
  end
end
