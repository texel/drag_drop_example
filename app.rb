require 'rubygems'
require 'sinatra'
require 'erb'

get '/' do
  erb :"index.html"
end

put '/' do
end