require 'rubygems'
require 'sinatra'
require 'erb'

get '/' do
  erb :"index.html"
end

put '/' do
  puts "uploaded #{env['HTTP_X_FILENAME']} - #{request.body.read.size} bytes"
end