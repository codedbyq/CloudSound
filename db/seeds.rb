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

bd = Song.create!(title: 'Breathe Deeper', genre: 'Alternative', description: 'Off of our new album, The Slow Rush', artist_id: tameimpala.id)
bd.coverFile.attach(io: open('https://cloud-sound-dev.s3-us-west-1.amazonaws.com/seeds/loose/Tame_Impala.jpg'), filename: 'Tame_Impala.jpg')
bd.audioFile.attach(io: open('https://cloud-sound-dev.s3-us-west-1.amazonaws.com/seeds/loose/breathe_deeper.mp3'), filename: 'breathe_deeper.mp3')

dol = Song.create!(title: 'Dolerme', genre: 'Latin', description: 'New single out now', artist_id: rosalia.id)
dol.coverFile.attach(io: open('https://cloud-sound-dev.s3-us-west-1.amazonaws.com/seeds/rosalia/dolerme.jpg'), filename: 'dolerme.jpg')
dol.audioFile.attach(io: open('https://cloud-sound-dev.s3-us-west-1.amazonaws.com/seeds/rosalia/ROSAL%C3%8DA+-+Dolerme.mp3'), filename: 'ROSALÍA - Dolerme.mp3')

tkn = Song.create!(title: 'TKN', genre: 'Latin', description: 'I taught Travis Scott spanish!', artist_id: rosalia.id)
tkn.coverFile.attach(io: open('https://cloud-sound-dev.s3-us-west-1.amazonaws.com/seeds/rosalia/tkn.jpg'), filename: 'tkn.jpg')
tkn.audioFile.attach(io: open('https://cloud-sound-dev.s3-us-west-1.amazonaws.com/seeds/rosalia/ROSAL%C3%8DA+%26+Travis+Scott+-+TKN+(Official+Video).mp3'), filename: 'ROSALÍA & Travis Scott - TKN (Official Video).mp3')

vete = Song.create!(title: 'Vete', genre: 'Latin', description: 'From my new album YHLQMDLG', artist_id: badbunny.id)
vete.coverFile.attach(io: open('https://cloud-sound-dev.s3-us-west-1.amazonaws.com/seeds/badbunny/YHLQMDLG_Bad+Bunny.jpg'), filename: 'YHLQMDLG_Bad Bunny.jpg')
vete.audioFile.attach(io: open('https://cloud-sound-dev.s3-us-west-1.amazonaws.com/seeds/badbunny/VETE+-+Bad+Bunny+(Audio+Official).mp3'), filename: 'VETE - Bad Bunny (Audio Official).mp3')

yps = Song.create!(title: 'Yo Perreo Sola', genre: 'Latin', description: 'From my new album YHLQMDLG', artist_id: badbunny.id)
yps.coverFile.attach(io: open('https://cloud-sound-dev.s3-us-west-1.amazonaws.com/seeds/badbunny/YHLQMDLG_Bad+Bunny.jpg'), filename: 'YHLQMDLG_Bad Bunny.jpg')
yps.audioFile.attach(io: open('https://cloud-sound-dev.s3-us-west-1.amazonaws.com/seeds/badbunny/Yo+Perreo+Sola+-+Bad+Bunny+(+Video+Oficial+).mp3'), filename: 'Yo Perreo Sola - Bad Bunny ( Video Oficial ).mp3')

rmw = Song.create!(title: 'You Rock My World', genre: 'Neo Soul', description: 'An old cover we did of Michael Jacksons"s "You Rock My World" ', artist_id: phonyppl.id)
rmw.coverFile.attach(io: open('https://cloud-sound-dev.s3-us-west-1.amazonaws.com/seeds/phony/rockmyworld.jpg'), filename: 'rockmyworld.jpg')
rmw.audioFile.attach(io: open('https://cloud-sound-dev.s3-us-west-1.amazonaws.com/seeds/phony/Phony+Ppl+-+You+Rock+My+World..mp3'), filename: 'Phony Ppl - You Rock My World..mp3')

wtf = Song.create!(title: 'Way Too Far.', genre: 'Neo Soul', description: "Off of our album mō'zā-ik", artist_id: phonyppl.id)
wtf.coverFile.attach(io: open('https://cloud-sound-dev.s3-us-west-1.amazonaws.com/seeds/phony/phony-mozaik.jpg'), filename: 'phony-mozaik.jpg')
wtf.audioFile.attach(io: open('https://cloud-sound-dev.s3-us-west-1.amazonaws.com/seeds/phony/Way+Too+Far.mp3'), filename: 'Way Too Far.mp3')

bf = Song.create!(title: 'Before You Get a Boyfriend.', genre: 'Neo Soul', description: "Off of our album mō'zā-ik", artist_id: phonyppl.id)
bf.coverFile.attach(io: open('https://cloud-sound-dev.s3-us-west-1.amazonaws.com/seeds/phony/phony-mozaik.jpg'), filename: 'phony-mozaik.jpg')
bf.audioFile.attach(io: open('https://cloud-sound-dev.s3-us-west-1.amazonaws.com/seeds/phony/Before+You+Get+A+Boyfriend.mp3'), filename: 'Before You Get A Boyfriend.mp3')

some = Song.create!(title: 'somethinG about your love.', genre: 'Neo Soul', description: 'this song is deep', artist_id: phonyppl.id)
some.coverFile.attach(io: open('https://cloud-sound-dev.s3-us-west-1.amazonaws.com/seeds/phony/phony-mozaik.jpg'), filename: 'phony-mozaik.jpg')
some.audioFile.attach(io: open('https://cloud-sound-dev.s3-us-west-1.amazonaws.com/seeds/phony/Somethin+About+Your+Love.mp3'), filename: 'Somethin About Your Love.mp3')

shw = Song.create!(title: 'Somehow.', genre: 'Neo Soul', description: 'Off of our album Yesterday"s Tomorrow', artist_id: phonyppl.id)
shw.coverFile.attach(io: open('https://cloud-sound-dev.s3-us-west-1.amazonaws.com/seeds/phony/phonyppl-somehow.jpg'), filename: 'phonyppl-somehow.jpg')
shw.audioFile.attach(io: open('https://cloud-sound-dev.s3-us-west-1.amazonaws.com/seeds/phony/Somehow..mp3'), filename: 'Somehow..mp3')

moon = Song.create!(title: 'Why iii Love the Moon.', genre: 'Neo Soul', description: 'Off of our album Yesterday"s Tomorrow', artist_id: phonyppl.id)
moon.coverFile.attach(io: open('https://cloud-sound-dev.s3-us-west-1.amazonaws.com/seeds/phony/phonyppl-somehow.jpg'), filename: 'phonyppl-somehow.jpg')
moon.audioFile.attach(io: open('https://cloud-sound-dev.s3-us-west-1.amazonaws.com/seeds/phony/Why+iii+Love+The+Moon+(Official+Video).mp3'), filename: 'Why iii Love The Moon (Official Video).mp3')




htc.coverFile.attach(io: open(''), filename: '')
htc.audioFile.attach(io: open(''), filename: '')