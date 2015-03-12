SRC=./src
MP3=./mp3

all: $(MP3)/in-the-name-of.mp3 $(MP3)/sinewave-60-hz.mp3 $(MP3)/1917-to-1991.mp3 $(MP3)/modulated.mp3

$(MP3)/%.mp3:
	baudio $(SRC)/$*/$*.js -d 3m31s -o $@
