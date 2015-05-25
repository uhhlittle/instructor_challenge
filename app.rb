require 'sinatra'
require 'json'

get '/' do
  File.read('index.html')
end

get '/favorites' do
  response.header['Content-Type'] = 'application/json'
  File.read('data.json')
end

post '/favorites' do
  file = JSON.parse(File.read['data.json'])
  unless params[:name] && params[:oid]
    return 'Invalid Request'
  else
  params = JSON.parse(request.body.read)
  movie = { params }
  movie.to_json
  file << movie
  File.write('data.json', JSON.pretty_generate(file))
  end
end
