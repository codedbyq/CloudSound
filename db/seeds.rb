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
phonyppl = User.create!(username: 'phonyppl', email: 'phonyppl@email.com', password: '123456')
tame = User.create!(username: 'tameimpala', email: 'tame@email.com', password: '123456')
rexx = User.create!(username: 'rexxlife', email: 'rexx@email.com', password: '123456')
rosalia = User.create!(username: 'rosalia', email: 'rosalia@email.com', password: '123456')
jbalvin = User.create!(username: 'jbalvin', email: 'jbalvin@email.com', password: '123456')
badbunny = User.create!(username: 'badbunny', email: 'badbunny@email.com', password: '123456')
tyler = User.create!(username: 'tyler', email: 'tyler@email.com', password: '123456')
thundercat = User.create!(username: 'thundercat', email: 'thundercat@email.com', password: '123456')


Song.destroy_all

dyst = Song.create!(title: 'drugs you should try it', genre: 'Hip-Hop', description: 'best song i"ve ever made!!', artist_id: travis.id)
dyst.coverFile.attach(io: open('https://cloud-sound-dev.s3-us-west-1.amazonaws.com/seeds/loose/days-before.jpg'), filename: 'days-before.jpg')
dyst.audioFile.attach(io: open('https://cloud-sound-dev.s3-us-west-1.amazonaws.com/seeds/loose/04+Drugs+You+Should+Try+It.mp3'), filename: '04 Drugs You Should Try It.mp3')

htc = Song.create!(title: 'Hate The Club (feat. Masego)', genre: 'R&B & Soul', description: 'I was in my feels', artist_id: kehlani.id)
htc.coverFile.attach(io: open('https://cloud-sound-dev.s3-us-west-1.amazonaws.com/seeds/loose/Kehlani.jpg'), filename: 'Kehlani.jpg')
htc.audioFile.attach(io: open('https://cloud-sound-dev.s3-us-west-1.amazonaws.com/seeds/loose/Kehlani.mp3'), filename: 'Kehlani.mp3')

war = Song.create!(title: 'War', genre: 'Hip-Hop', description: 'this song is deep', artist_id: rexx.id)
htc.coverFile.attach(io: open('https://cloud-sound-dev.s3-us-west-1.amazonaws.com/seeds/loose/rexx.jpg'), filename: 'rexx.jpg')
htc.audioFile.attach(io: open('https://cloud-sound-dev.s3-us-west-1.amazonaws.com/seeds/loose/War.mp3'), filename: 'War.mp3')

nmw = Song.create!(title: 'New Magic Wand', genre: 'Hip-Hop', description: 'this is my favorite song off my new album', artist_id: tyler.id)
nmw.coverFile.attach(io: open('https://cloud-sound-dev.s3-us-west-1.amazonaws.com/seeds/loose/tyler-the-creator-igor-cover.png'), filename: 'tyler-the-creator-igor-cover.png')
nmw.audioFile.attach(io: open('https://cloud-sound-dev.s3-us-west-1.amazonaws.com/seeds/loose/NEW+MAGIC+WAND.mp3'), filename: 'NEW MAGIC WAND.mp3')

dbz = Song.create!(title: 'Dragonball Durag', genre: 'R&B & Soul', description: 'Get your very own dragonball durag on my website now!', artist_id: thundercat.id)
dbz.coverFile.attach(io: open('https://cloud-sound-dev.s3-us-west-1.amazonaws.com/seeds/loose/dragonballdurag.jpg'), filename: 'dragonballdurag.jpg')
dbz.audioFile.attach(io: open('https://cloud-sound-dev.s3-us-west-1.amazonaws.com/seeds/loose/dragonball_durag.mp3'), filename: 'dragonball_durag.mp3')

jbv = Song.create!(title: 'Amarillo', genre: 'Latin', description: 'Off my new album Colores', artist_id: jbalvin.id)
jbv.coverFile.attach(io: open('https://cloud-sound-dev.s3-us-west-1.amazonaws.com/seeds/loose/Colores_J+Balvin.jpg'), filename: 'Colores_J Balvin.jpg')
jbv.audioFile.attach(io: open('https://cloud-sound-dev.s3-us-west-1.amazonaws.com/seeds/loose/jbalvin.mp3'), filename: 'jbalvin.mp3')

war = Song.create!(title: 'Breathe Deeper', genre: 'Hip-Hop', description: 'this song is deep', artist_id: rexx.id)
htc.coverFile.attach(io: open(''), filename: '')
htc.audioFile.attach(io: open(''), filename: '')

war = Song.create!(title: 'War', genre: 'Hip-Hop', description: 'this song is deep', artist_id: rexx.id)
htc.coverFile.attach(io: open(''), filename: '')
htc.audioFile.attach(io: open(''), filename: '')

war = Song.create!(title: 'War', genre: 'Hip-Hop', description: 'this song is deep', artist_id: rexx.id)
htc.coverFile.attach(io: open(''), filename: '')
htc.audioFile.attach(io: open(''), filename: '')

war = Song.create!(title: 'War', genre: 'Hip-Hop', description: 'this song is deep', artist_id: rexx.id)
htc.coverFile.attach(io: open(''), filename: '')
htc.audioFile.attach(io: open(''), filename: '')

war = Song.create!(title: 'War', genre: 'Hip-Hop', description: 'this song is deep', artist_id: rexx.id)
htc.coverFile.attach(io: open(''), filename: '')
htc.audioFile.attach(io: open(''), filename: '')

war = Song.create!(title: 'War', genre: 'Hip-Hop', description: 'this song is deep', artist_id: rexx.id)
htc.coverFile.attach(io: open(''), filename: '')
htc.audioFile.attach(io: open(''), filename: '')




htc.coverFile.attach(io: open(''), filename: '')
htc.audioFile.attach(io: open(''), filename: '')