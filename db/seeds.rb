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
xo = User.create!(username: 'xo', email: 'xo@email.com', password: '123456')
leon = User.create!(username: 'leon', email: 'leon@email.com', password: '123456')
andersonpaak = User.create!(username: 'andersonpaak', email: 'andersonpaak@email.com', password: '123456')
beyonce = User.create!(username: 'beyonce', email: 'beyonce@email.com', password: '123456')
usher = User.create!(username: 'usher', email: 'usher@email.com', password: '123456')
joey = User.create!(username: 'joey99', email: 'joey@email.com', password: '123456')
black = User.create!(username: 'bLAck pARty', email: 'black@email.com', password: '123456')
amalou = User.create!(username: 'amalou', email: 'amalou@email.com', password: '123456')
her = User.create!(username: 'H.E.R.', email: 'her@email.com', password: '123456')
shake = User.create!(username: '070shake', email: '070shake@email.com', password: '123456')


Song.destroy_all

htc = Song.create!(title: 'Hate The Club (feat. Masego)', genre: 'R&B & Soul', description: 'I was in my feels #trending', artist_id: kehlani.id)
htc.coverFile.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/loose/Kehlani.jpg'), filename: 'Kehlani.jpg')
htc.audioFile.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/loose/Kehlani.mp3'), filename: 'Kehlani.mp3')

war = Song.create!(title: 'War', genre: 'Hip-Hop', description: 'this song is deep #bubbling #blm', artist_id: rexx.id)
war.coverFile.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/loose/rexx.jpg'), filename: 'rexx.jpg')
war.audioFile.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/loose/War.mp3'), filename: 'War.mp3')

nmw = Song.create!(title: 'New Magic Wand', genre: 'Hip-Hop', description: 'this is my favorite song off my new album #trending', artist_id: tyler.id)
nmw.coverFile.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/loose/tyler-the-creator-igor-cover.png'), filename: 'tyler-the-creator-igor-cover.png')
nmw.audioFile.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/loose/NEW+MAGIC+WAND.mp3'), filename: 'NEW MAGIC WAND.mp3')

dbz = Song.create!(title: 'Dragonball Durag', genre: 'R&B & Soul', description: 'Get your very own dragonball durag on my website now! #bubbling', artist_id: thundercat.id)
dbz.coverFile.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/loose/dragonballdurag.jpg'), filename: 'dragonballdurag.jpg')
dbz.audioFile.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/loose/dragonball_durag.mp3'), filename: 'dragonball_durag.mp3')

jbv = Song.create!(title: 'Amarillo', genre: 'Latin', description: 'Off my new album Colores #latin', artist_id: jbalvin.id)
jbv.coverFile.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/loose/Colores_J+Balvin.jpg'), filename: 'Colores_J Balvin.jpg')
jbv.audioFile.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/loose/jbalvin.mp3'), filename: 'jbalvin.mp3')

bd = Song.create!(title: 'Breathe Deeper', genre: 'Alternative', description: 'Off of our new album, The Slow Rush #trending', artist_id: tame.id)
bd.coverFile.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/loose/Tame_Impala.jpg'), filename: 'Tame_Impala.jpg')
bd.audioFile.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/loose/breathe_deeper.mp3'), filename: 'breathe_deeper.mp3')

dyst = Song.create!(title: 'drugs you should try it', genre: 'Hip-Hop', description: 'best song i"ve ever made!! #trending', artist_id: travis.id)
dyst.coverFile.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/loose/days-before.jpg'), filename: 'days-before.jpg')
dyst.audioFile.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/loose/04+Drugs+You+Should+Try+It.mp3'), filename: '04 Drugs You Should Try It.mp3')

dol = Song.create!(title: 'Dolerme', genre: 'Latin', description: 'New single out now #latin', artist_id: rosalia.id)
dol.coverFile.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/rosalia/dolerme.jpg'), filename: 'dolerme.jpg')
dol.audioFile.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/rosalia/ROSAL%C3%8DA+-+Dolerme.mp3'), filename: 'ROSALÍA - Dolerme.mp3')

tkn = Song.create!(title: 'TKN', genre: 'Latin', description: 'I taught Travis Scott spanish! #bubbling #latin', artist_id: rosalia.id)
tkn.coverFile.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/rosalia/tkn.jpg'), filename: 'tkn.jpg')
tkn.audioFile.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/rosalia/ROSAL%C3%8DA+%26+Travis+Scott+-+TKN+(Official+Video).mp3'), filename: 'ROSALÍA & Travis Scott - TKN (Official Video).mp3')

vete = Song.create!(title: 'Vete', genre: 'Latin', description: 'From my new album YHLQMDLG #trending #latin', artist_id: badbunny.id)
vete.coverFile.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/badbunny/YHLQMDLG_Bad+Bunny.jpg'), filename: 'YHLQMDLG_Bad Bunny.jpg')
vete.audioFile.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/badbunny/VETE+-+Bad+Bunny+(Audio+Official).mp3'), filename: 'VETE - Bad Bunny (Audio Official).mp3')

yps = Song.create!(title: 'Yo Perreo Sola', genre: 'Latin', description: 'From my new album YHLQMDLG #latin', artist_id: badbunny.id)
yps.coverFile.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/badbunny/YHLQMDLG_Bad+Bunny.jpg'), filename: 'YHLQMDLG_Bad Bunny.jpg')
yps.audioFile.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/badbunny/Yo+Perreo+Sola+-+Bad+Bunny+(+Video+Oficial+).mp3'), filename: 'Yo Perreo Sola - Bad Bunny ( Video Oficial ).mp3')

moon = Song.create!(title: 'Why iii Love the Moon.', genre: 'Neo Soul', description: 'Off of our album Yesterday"s Tomorrow #bubbling #phony', artist_id: phonyppl.id)
moon.coverFile.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/phony/phonyppl-somehow.jpg'), filename: 'phonyppl-somehow.jpg')
moon.audioFile.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/phony/Why+iii+Love+The+Moon+(Official+Video).mp3'), filename: 'Why iii Love The Moon (Official Video).mp3')

some = Song.create!(title: 'somethinG about your love.', genre: 'Neo Soul', description: 'this song is deep #phony', artist_id: phonyppl.id)
some.coverFile.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/phony/phony-mozaik.jpg'), filename: 'phony-mozaik.jpg')
some.audioFile.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/phony/Somethin+About+Your+Love.mp3'), filename: 'Somethin About Your Love.mp3')

shw = Song.create!(title: 'Somehow.', genre: 'Neo Soul', description: 'Off of our album Yesterday"s Tomorrow #phony', artist_id: phonyppl.id)
shw.coverFile.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/phony/phonyppl-somehow.jpg'), filename: 'phonyppl-somehow.jpg')
shw.audioFile.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/phony/Somehow..mp3'), filename: 'Somehow..mp3')

bf = Song.create!(title: 'Before You Get a Boyfriend.', genre: 'Neo Soul', description: "Off of our album mō'zā-ik #phony", artist_id: phonyppl.id)
bf.coverFile.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/phony/phony-mozaik.jpg'), filename: 'phony-mozaik.jpg')
bf.audioFile.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/phony/Before+You+Get+A+Boyfriend.mp3'), filename: 'Before You Get A Boyfriend.mp3')

rmw = Song.create!(title: 'You Rock My World', genre: 'Neo Soul', description: 'An old cover we did of Michael Jacksons"s "You Rock My World" #phony', artist_id: phonyppl.id)
rmw.coverFile.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/phony/rockmyworld.jpg'), filename: 'rockmyworld.jpg')
rmw.audioFile.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/phony/Phony+Ppl+-+You+Rock+My+World..mp3'), filename: 'Phony Ppl - You Rock My World..mp3')

wtf = Song.create!(title: 'Way Too Far.', genre: 'Neo Soul', description: "Off of our album mō'zā-ik #phony", artist_id: phonyppl.id)
wtf.coverFile.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/phony/phony-mozaik.jpg'), filename: 'phony-mozaik.jpg')
wtf.audioFile.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/phony/Way+Too+Far.mp3'), filename: 'Way Too Far.mp3')


gc = Song.create!(title: 'Guilty Conscience', genre: 'Alternative', description: 'Modus Vivendi out now! #bubbling', artist_id: shake.id)
gc.coverFile.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/loose/070-Shake-Modus-Vivendi.jpg'), filename: '070-Shake-Modus-Vivendi.jpg')
gc.audioFile.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/loose/070+Shake+-+Guilty+Conscience.mp3'), filename: '070 Shake - Guilty Conscience.mp3')

nth = Song.create!(title: 'NORTHSIDE', genre: 'R&B & Soul', description: 'Ama, who? #bubbling', artist_id: amalou.id)
nth.coverFile.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/loose/ama.jpg'), filename: 'ama.jpg')
nth.audioFile.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/loose/Ama+Lou+-+NORTHSIDE+(Official+Music+Video).mp3'), filename: 'Ama Lou - NORTHSIDE (Official Music Video).mp3')

dan = Song.create!(title: 'Dancing', genre: 'R&B & Soul', description: 'Endless Summer #bubbling', artist_id: black.id)
dan.coverFile.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/loose/blackparty.jpg'), filename: 'blackparty.jpg')
dan.audioFile.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/loose/bLAck+pARty+-+Dancing+(Audio).mp3'), filename: 'bLAck pARty - Dancing (Audio).mp3')

bl = Song.create!(title: 'Blinding Lights', genre: 'Pop', description: 'After Hours out now #trending', artist_id: xo.id)
bl.coverFile.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/loose/blinding.jpg'), filename: 'blinding.jpg')
bl.audioFile.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/loose/The+Weeknd+-+Blinding+Lights+(Lyrics).mp3'), filename: 'The Weeknd - Blinding Lights (Lyrics).mp3')

lock = Song.create!(title: 'Lockdown', genre: 'Hip-Hop', description: 'You shoulda been downtown... #trending #blm', artist_id: andersonpaak.id)
lock.coverFile.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/blm/anderson-paak-lockdown-video.jpg'), filename: 'anderson-paak-lockdown-video.jpg')
lock.audioFile.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/blm/Anderson+.Paak+-+Lockdown.mp3'), filename: 'Anderson .Paak - Lockdown.mp3')

bp = Song.create!(title: 'BLACK PARADE', genre: 'R&B & Soul', description: 'Happy Juneteenth #trending #blm', artist_id: beyonce.id)
bp.coverFile.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/blm/Black-Parade.jpg'), filename: 'Black-Parade.jpg')
bp.audioFile.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/blm/Beyonc%C3%A9+BLACK+PARADE+(Official+Audio).mp3'), filename: 'Beyoncé BLACK PARADE (Official Audio).mp3')

cb = Song.create!(title: "I Can't Breathe", genre: 'R&B & Soul', description: 'RIP George Floyd #blm', artist_id: her.id)
cb.coverFile.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/blm/her-i-cant-breathe.jpg'), filename: 'her-i-cant-breathe.jpg')
cb.audioFile.attach(io: open("https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/blm/H.E.R.+-+I+Can't+Breathe+(Audio).mp3"), filename: "H.E.R. - I Can't Breathe (Audio).mp3")

land = Song.create!(title: 'Land of the Free', genre: 'Hip-Hop', description: 'Pro Era #blm', artist_id: joey.id)
land.coverFile.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/blm/joey.png'), filename: 'joey.png')
land.audioFile.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/blm/Joey+Bada%24%24+-+Land+of+the+Free+(Official+Music+Video).mp3'), filename: 'Joey Bada$$ - Land of the Free (Official Music Video).mp3')

cry = Song.create!(title: 'I Cry', genre: 'R&B & Soul', description: 'Inspired by my children #blm', artist_id: usher.id)
cry.coverFile.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/blm/usher.jpg'), filename: 'usher.jpg')
cry.audioFile.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/blm/Usher+-+I+Cry+(Official+Audio).mp3'), filename: 'Usher - I Cry (Official Audio).mp3')

sw = Song.create!(title: 'Sweeter (feat. Terrace Martin)', genre: 'R&B & Soul', description: 'Hoping for a life more sweeter #bubbling #blm', artist_id: leon.id)
sw.coverFile.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/blm/leon.png'), filename: 'leon.png')
sw.audioFile.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/blm/Leon+Bridges+-+Sweeter+(Official+Video)+ft.+Terrace+Martin.mp3'), filename: 'Leon Bridges - Sweeter (Official Video) ft. Terrace Martin.mp3')

