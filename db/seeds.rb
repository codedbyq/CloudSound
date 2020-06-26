# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

demo = User.create!(username: 'DemoLogin', email: 'demo@login.com', password: '123456')
travis = User.create!(username: 'travisxx', email: 'travis@email.com', password: '123456')
kehlani = User.create!(username: 'kehlani', email: 'kehlani@email.com', password: '123456')
rexx = User.create!(username: 'rexxlife', email: 'rexx@email.com', password: '123456')


Song.destroy_all

dyst = Song.create!(title: 'drugs you should try it', description: 'best song i"ve ever made!!', artist_id: travis.id)
htc = Song.create!(title: 'War', description: 'this song is deep', artist_id: rexx.id)
dyst = Song.create!(title: 'Hate The Club (feat. Masego)', description: 'I was in my feels', artist_id: kehlani.id)