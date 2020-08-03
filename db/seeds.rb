# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# users
User.destroy_all

demo = User.create!(username: 'DemoLogin', email: 'demo@login.com', password: '123456', bio: 'Houston, TX')
travis = User.create!(username: 'travisxx', email: 'travis@email.com', password: '123456', bio: 'Houston, TX')
kehlani = User.create!(username: 'kehlani', email: 'kehlani@email.com', password: '123456', bio: 'Oakland, CA')
phonyppl = User.create!(username: 'phonyppl', email: 'phonyppl@email.com', password: '123456', bio: 'Good Morning Brooklyn')
tame = User.create!(username: 'tameimpala', email: 'tame@email.com', password: '123456', bio: 'The Slow Rush')
rexx = User.create!(username: 'rexxlife', email: 'rexx@email.com', password: '123456', bio: 'Berkley Superhero')
rosalia = User.create!(username: 'rosalia', email: 'rosalia@email.com', password: '123456', bio: 'El mal querer')
jbalvin = User.create!(username: 'jbalvin', email: 'jbalvin@email.com', password: '123456', bio: 'Colores')
badbunny = User.create!(username: 'badbunny', email: 'badbunny@email.com', password: '123456', bio: 'YHLQMDLG')
tyler = User.create!(username: 'tyler', email: 'tyler@email.com', password: '123456', bio: 'I won a grammy')
thundercat = User.create!(username: 'thundercat', email: 'thundercat@email.com', password: '123456', bio: 'Need someone to watch anime with.')
xo = User.create!(username: 'xo', email: 'xo@email.com', password: '123456', bio: 'Aftr Hours')
leon = User.create!(username: 'leon', email: 'leon@email.com', password: '123456', bio: 'Fort Worth, TX')
andersonpaak = User.create!(username: 'andersonpaak', email: 'andersonpaak@email.com', password: '123456', bio: 'Yes Lawd!')
beyonce = User.create!(username: 'beyonce', email: 'beyonce@email.com', password: '123456', bio: 'Black is King')
usher = User.create!(username: 'usher', email: 'usher@email.com', password: '123456', bio: 'Atlanta, GA')
joey = User.create!(username: 'joey99', email: 'joey@email.com', password: '123456', bio: 'Pro Era')
black = User.create!(username: 'bLAck pARty', email: 'black@email.com', password: '123456', bio: '"Music is Life')
amalou = User.create!(username: 'amalou', email: 'amalou@email.com', password: '123456', bio: 'Ama, who?')
her = User.create!(username: 'H.E.R.', email: 'her@email.com', password: '123456', bio: 'Do To Me out now!')
shake = User.create!(username: '070shake', email: '070shake@email.com', password: '123456', bio: 'Modus Vivendi out now')

# user profile pictures
amalou.photo.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/ama.jpg'), filename: 'ama.jpg')
andersonpaak.photo.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/anderson.jpg'), filename: 'anderson.jpg')
badbunny.photo.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/bad-bunny.jpg'), filename: 'bad-bunny.jpg')
beyonce.photo.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/beyonce.jpg'), filename: 'beyonce.jpg')
black.photo.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/black.jpg'), filename: 'black.jpg')
demo.photo.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/dub.jpeg'), filename: 'dub.jpeg')
her.photo.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/her.jpg'), filename: 'her.jpg')
jbalvin.photo.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/jbalvin.jpg'), filename: 'jbalvin.jpg')
joey.photo.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/joey.jpg'), filename: 'joey.jpg')
kehlani.photo.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/kehlani.jpg'), filename: 'kehlani.jpg')
leon.photo.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/leon.jpg'), filename: 'leon.jpg')
phonyppl.photo.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/phony.jpg'), filename: 'phony.jpg')
rexx.photo.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/rexx.jpg'), filename: 'rexx.jpg')
rosalia.photo.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/rosalia.jpg'), filename: 'rosalia.jpg')
shake.photo.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/shake.jpg'), filename: 'shake.jpg')
tame.photo.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/tame.jpg'), filename: 'tame.jpg')
xo.photo.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/the-weeknd.jpg'), filename: 'the-weeknd.jpg')
thundercat.photo.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/thunder.jpg'), filename: 'thunder.jpg')
travis.photo.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/travis.jpg'), filename: 'travis.jpg')
tyler.photo.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/tyler.jpg'), filename: 'tyler.jpg')
usher.photo.attach(io: open('https://cloud-sound-assets.s3-us-west-1.amazonaws.com/seeds/usher.jpg'), filename: 'usher.jpg')

# songs
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

#comments
Comment.destroy_all

htc1 = Comment.create!(user_id: rexx.id, song_id: htc.id, body: 'Why am I crying in the club rn 😭')
htc2 = Comment.create!(user_id: rosalia.id, song_id: htc.id, body: '😭😭😭😭😭')
htc3 = Comment.create!(user_id: her.id, song_id: htc.id, body: 'Love this')
htc4 = Comment.create!(user_id: beyonce.id, song_id: htc.id, body: 'love you kehlani!')
htc5 = Comment.create!(user_id: badbunny.id, song_id: htc.id, body: 'Upload more!!!')

war1 = Comment.create!(user_id: andersonpaak.id, song_id: war.id, body: 'Still relevant...')
war2 = Comment.create!(user_id: leon.id, song_id: war.id, body: 'Beautiful song')
war3 = Comment.create!(user_id: beyonce.id, song_id: war.id, body: 'Love This!')
war4 = Comment.create!(user_id: kehlani.id, song_id: war.id, body: '🖤🖤🖤🖤')

nmw1 = Comment.create!(user_id: travis.id, song_id: nmw.id, body: 'Dude')
nmw2 = Comment.create!(user_id: xo.id, song_id: nmw.id, body: 'this is crazy')
nmw3 = Comment.create!(user_id: black.id, song_id: nmw.id, body: '🤯')
nmw4 = Comment.create!(user_id: shake.id, song_id: nmw.id, body: 'wowwwwww')
nmw5 = Comment.create!(user_id: amalou.id, song_id: nmw.id, body: 'My new favorite song')
nmw6 = Comment.create!(user_id: tyler.id, song_id: nmw.id, body: "sucks...")

dbz2 = Comment.create!(user_id: xo.id, song_id: dbz.id, body: 'Need one asap')
dbz1 = Comment.create!(user_id: travis.id, song_id: dbz.id, body: 'I neeeeeed one')
dbz3 = Comment.create!(user_id: tyler.id, song_id: dbz.id, body: 'hahahahahaha amazing')
dbz4 = Comment.create!(user_id: kehlani.id, song_id: dbz.id, body: 'You are too much!')
dbz5 = Comment.create!(user_id: tame.id, song_id: dbz.id, body: 'incredible')
dbz6 = Comment.create!(user_id: badbunny.id, song_id: dbz.id, body: '🤣🤣🤣🤣')

jbv1 = Comment.create!(user_id: rosalia.id, song_id: jbv.id, body: 'Me encanta esto')
jbv2 = Comment.create!(user_id: beyonce.id, song_id: jbv.id, body: 'Lets make another song!')
jbv3 = Comment.create!(user_id: badbunny.id, song_id: jbv.id, body: 'Amarilloooo')
jbv4 = Comment.create!(user_id: tyler.id, song_id: jbv.id, body: "idk what you're saying but i love it")
jbv5 = Comment.create!(user_id: travis.id, song_id: jbv.id, body: "Let's do a remix")
jbv6 = Comment.create!(user_id: badbunny.id, song_id: jbv.id, body: 'I need to be on this remix too!')

bd1 = Comment.create!(user_id: amalou.id, song_id: bd.id, body: 'absolutely amazing')
bd2 = Comment.create!(user_id: andersonpaak.id, song_id: bd.id, body: "Can't wait to see this live!")
bd3 = Comment.create!(user_id: shake.id, song_id: bd.id, body: 'you can do no wrong')
bd4 = Comment.create!(user_id: thundercat.id, song_id: bd.id, body: "Let's collab!!")
bd5 = Comment.create!(user_id: black.id, song_id: bd.id, body: 'whole album is great!')

dyst1 = Comment.create!(user_id: rosalia.id, song_id: dyst.id, body: '🤯🤯🤯🤯🤯')
dyst2 = Comment.create!(user_id: thundercat.id, song_id: dyst.id, body: 'this is too good')
dyst3 = Comment.create!(user_id: badbunny.id, song_id: dyst.id, body: 'Bro')
dyst4 = Comment.create!(user_id: tame.id, song_id: dyst.id, body: 'love the production')
dyst5 = Comment.create!(user_id: xo.id, song_id: dyst.id, body: 'You did your thing!')
dyst6 = Comment.create!(user_id: kehlani.id, song_id: dyst.id, body: 'This sounds crazy')
dyst7 = Comment.create!(user_id: usher.id, song_id: dyst.id, body: 'Throwback travis!')

dol1 = Comment.create!(user_id: jbalvin.id, song_id: dol.id, body: 'si si si')
dol2 = Comment.create!(user_id: kehlani.id, song_id: dol.id, body: '💙')
dol3 = Comment.create!(user_id: demo.id, song_id: dol.id, body: 'i like this!')
dol4 = Comment.create!(user_id: shake.id, song_id: dol.id, body: 'Rosalia!!')

tkn1 = Comment.create!(user_id: travis.id, song_id: tkn.id, body: 'TKN')
tkn2 = Comment.create!(user_id: badbunny.id, song_id: tkn.id, body: '🇵🇷 ✈ 🇪🇸')
tkn3 = Comment.create!(user_id: black.id, song_id: tkn.id, body: 'this is a hit!')
tkn4 = Comment.create!(user_id: demo.id, song_id: tkn.id, body: 'Love this beat')
tkn5 = Comment.create!(user_id: amalou.id, song_id: tkn.id, body: '🔥🔥🔥')
tkn6 = Comment.create!(user_id: beyonce.id, song_id: tkn.id, body: 'You guys sound great')

vete1 = Comment.create!(user_id: rosalia.id, song_id: vete.id, body: "I don't wanna go away!")
vete2 = Comment.create!(user_id: rexx.id, song_id: vete.id, body: 'Got this on repeat')
vete3 = Comment.create!(user_id: tyler.id, song_id: vete.id, body: 'love you dude')
vete4 = Comment.create!(user_id: kehlani.id, song_id: vete.id, body: 'my favorite!')
vete5 = Comment.create!(user_id: usher.id, song_id: vete.id, body: 'YHLQMDLG 👁')
vete6 = Comment.create!(user_id: xo.id, song_id: vete.id, body: 'vete oh oh ohhhh')
vete7 = Comment.create!(user_id: thundercat.id, song_id: vete.id, body: 'yup')

yps1 = Comment.create!(user_id: travis.id, song_id: yps.id, body: "lets work man")
yps2 = Comment.create!(user_id: tame.id, song_id: yps.id, body: '👁')
yps3 = Comment.create!(user_id: joey.id, song_id: yps.id, body: '🔥🔥🔥🔥🔥')
yps4 = Comment.create!(user_id: shake.id, song_id: yps.id, body: 'This is dope')

moon1 = Comment.create!(user_id: tame.id, song_id: moon.id, body: 'love what you guys are doing')
moon2 = Comment.create!(user_id: travis.id, song_id: moon.id, body: 'vibes on vibes on vibes')
moon3 = Comment.create!(user_id: joey.id, song_id: moon.id, body: 'BROOKLYN')
moon4 = Comment.create!(user_id: thundercat.id, song_id: moon.id, body: 'Bari Bass!')
moon5 = Comment.create!(user_id: phonyppl.id, song_id: moon.id, body: 'Thank you guys!')
moon6 = Comment.create!(user_id: demo.id, song_id: moon.id, body: 'I have tix to see you guys at Harlows!!')

some1 = Comment.create!(user_id: thundercat.id, song_id: some.id, body: "Brooklyn's best kept secret")
some2 = Comment.create!(user_id: kehlani.id, song_id: some.id, body: 'you guys are amazing')
some3 = Comment.create!(user_id: leon.id, song_id: some.id, body: 'Such a vibe')
some4 = Comment.create!(user_id: beyonce.id, song_id: some.id, body: "Y'all are something special")

shw1 = Comment.create!(user_id: her.id, song_id: shw.id, body: 'beautiful')
shw2 = Comment.create!(user_id: tyler.id, song_id: shw.id, body: 'music to my ears... literally')
shw3 = Comment.create!(user_id: usher.id, song_id: shw.id, body: 'Keep it up guys!')
shw4 = Comment.create!(user_id: shake.id, song_id: shw.id, body: "New York 🏙")

bf1 = Comment.create!(user_id: shake.id, song_id: bf.id, body: 'the east coast internet')
bf2 = Comment.create!(user_id: tame.id, song_id: bf.id, body: "New York's finest")
bf3 = Comment.create!(user_id: beyonce.id, song_id: bf.id, body: 'Your music is such a breath of fresh air')

rmw1 = Comment.create!(user_id: andersonpaak.id, song_id: rmw.id, body: 'MJ')
rmw2 = Comment.create!(user_id: demo.id, song_id: rmw.id, body: 'RIP 🙏')
rmw3 = Comment.create!(user_id: xo.id, song_id: rmw.id, body: 'Love this cover of a classic')

wtf1 = Comment.create!(user_id: thundercat.id, song_id: wtf.id, body: "I'm just waiting for you guys to blow up!")
wtf2 = Comment.create!(user_id: rosalia.id, song_id: wtf.id, body: 'This song can relate to any relationship. Romantic, platonic, or family.')
wtf3 = Comment.create!(user_id: amalou.id, song_id: wtf.id, body: 'Soo underrated')
wtf4 = Comment.create!(user_id: tyler.id, song_id: wtf.id, body: 'yoo tyler on this would be dope')

gc1 = Comment.create!(user_id: thundercat.id, song_id: gc.id, body: 'This song is for sensitive gangsters')
gc2 = Comment.create!(user_id: tame.id, song_id: gc.id, body: 'The line that says "you look like the moon in the morning, jaded, faded, almost gone" is absolutely stellar')
gc3 = Comment.create!(user_id: tyler.id, song_id: gc.id, body: 'i listened to this song and robbed a store while crying')
gc4 = Comment.create!(user_id: badbunny.id, song_id: gc.id, body: 'Quarantine brings out my good taste in music')

nth1 = Comment.create!(user_id: beyonce.id, song_id: nth.id, body: 'Her vibe remind me of Aaliyah. Very talented')
nth2 = Comment.create!(user_id: rexx.id, song_id: nth.id, body: 'this girl needs more recognition')
nth3 = Comment.create!(user_id: kehlani.id, song_id: nth.id, body: 'Her voice and this song omg')
nth3 = Comment.create!(user_id: phonyppl.id, song_id: nth.id, body: 'Love this!')

dan1 = Comment.create!(user_id: tyler.id, song_id: dan.id, body: 'When HIM TYLER AND GET ON A SONG IT WILL BE THE MOST BEAUTIFUL SIMPLISTIC THING IN LIFE ')
dan2 = Comment.create!(user_id: thundercat.id, song_id: dan.id, body: 'This beat is giving me odd future/internet vibes. Maybe its just me')
dan3 = Comment.create!(user_id: tame.id, song_id: dan.id, body: 'This song makes me feel happy.')
dan3 = Comment.create!(user_id: phonyppl.id, song_id: dan.id, body: 'Love the vibe on this song')

bl1 = Comment.create!(user_id: shake.id, song_id: bl.id, body: "The 80's vibes are back and it's awesome.")
bl2 = Comment.create!(user_id: thundercat.id, song_id: bl.id, body: 'The only bad part aboout this song is.. that is has to end')
bl3 = Comment.create!(user_id: amalou.id, song_id: bl.id, body: "he's way too talented")
bl4 = Comment.create!(user_id: usher.id, song_id: bl.id, body: 'We need more songs like this with 80s vibes in the 2020s.. ')
bl5 = Comment.create!(user_id: tame.id, song_id: bl.id, body: "I like the 80's style! ")
bl6 = Comment.create!(user_id: joey.id, song_id: bl.id, body: 'Madness with a touch of reality.')

lock1 = Comment.create!(user_id: joey.id, song_id: lock.id, body: 'RIP GEORGE FLOYD')
lock2 = Comment.create!(user_id: her.id, song_id: lock.id, body: 'Only he can make such a serious topic this groovy.')
lock3 = Comment.create!(user_id: leon.id, song_id: lock.id, body: 'Everyone needs to listen to this actually LISTEN')
lock4 = Comment.create!(user_id: beyonce.id, song_id: lock.id, body: 'This is incredible.')
lock5 = Comment.create!(user_id: tame.id, song_id: lock.id, body: 'what a voice, what a message.')

bp1 = Comment.create!(user_id: usher.id, song_id: bp.id, body: '#blackisking')
bp2 = Comment.create!(user_id: jbalvin.id, song_id: bp.id, body: 'QUEEN 🐝')
bp3 = Comment.create!(user_id: andersonpaak.id, song_id: bp.id, body: "playing this on repeat")
bp4 = Comment.create!(user_id: her.id, song_id: bp.id, body: "I cant forget my history, its Her Story")
bp5 = Comment.create!(user_id: amalou.id, song_id: bp.id, body: 'This song makes me feel so much better during this time')
bp6 = Comment.create!(user_id: kehlani.id, song_id: bp.id, body: 'Omgggg the Song is just perfect')
bp7 = Comment.create!(user_id: rosalia.id, song_id: bp.id, body: 'This song is addictive, I love it')

cb1 = Comment.create!(user_id: kehlani.id, song_id: cb.id, body: 'RIP George Floyd')
cb2 = Comment.create!(user_id: beyonce.id, song_id: cb.id, body: 'I love how H.E.R is using her platform to speak out and spread a message through her music. This sent shivers down my spine.')
cb3 = Comment.create!(user_id: rosalia.id, song_id: cb.id, body: 'say their names')
cb4 = Comment.create!(user_id: leon.id, song_id: cb.id, body: 'a voice for this generation!')

land1 = Comment.create!(user_id: travis.id, song_id: land.id, body: "so we all just gonna act like Joey ain't just drop a classic? 🤔")
land2 = Comment.create!(user_id: leon.id, song_id: land.id, body: 'This is the kind of music that needs to be heard.')
land3 = Comment.create!(user_id: her.id, song_id: land.id, body: 'It’s saddening when this song is relevant now more than ever')
land4 = Comment.create!(user_id: badbunny.id, song_id: land.id, body: 'rest in peace george floyd')
land5 = Comment.create!(user_id: demo.id, song_id: land.id, body: "This is one of the most powerful songs I've ever heard")
land6 = Comment.create!(user_id: usher.id, song_id: land.id, body: 'This kid is deep')

cry1 = Comment.create!(user_id: kehlani.id, song_id: cry.id, body: 'this song made my cry.')
cry2 = Comment.create!(user_id: her.id, song_id: cry.id, body: 'Just a legend, his voice aging like wine')
cry3 = Comment.create!(user_id: joey.id, song_id: cry.id, body: 'Usher is one of the best male singers ever existed.')

sw1 = Comment.create!(user_id: her.id, song_id: sw.id, body: 'This beat. His voice. This song is Everything!')
sw2 = Comment.create!(user_id: kehlani.id, song_id: sw.id, body: 'We are all hoping for a life more sweeter right now.')
sw3 = Comment.create!(user_id: tame.id, song_id: sw.id, body: "I need this song to be longer. Just didn't want it to end.")
sw4 = Comment.create!(user_id: rosalia.id, song_id: sw.id, body: "hopefully the world will soon become a better place for everyone")
sw5 = Comment.create!(user_id: phonyppl.id, song_id: sw.id, body: "I’m still not over how powerful this is.")


