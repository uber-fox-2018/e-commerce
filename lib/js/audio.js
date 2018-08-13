function createAudioObject(inList) {
	const audios = [
		"Binaural-beats",
		"Chill-tune-chill-carrier-23-chills",
		"Melancholic-piano-music",
		"Relaxing-ambient-music",
		"Soft-piano-music-piano-zen",
		"Zen-stones"
	];
	if (!inList) {
		let chosenAudio = theChosenOne(audios);
		let audioUrl = `./assets/audio/${chosenAudio}.mp3`;
		return audioUrl;
	} else {
		return audios.map(x => `./assets/audio/${x}.mp3`);
	}
}

const characters = {
	play: "&#9654;",
	paused: "| | "
};

let howler_example = new Howl(createNewHowl());

function createNewHowl() {
	return {
		src: [createAudioObject()],
		volume: 0.5,
		onplay: function() {
			console.log(this);
		},
		onend: function() {
			console.log("ended!");
			changeBackground();
			howler_example = new Howl(createNewHowl());
			howler_example.play();
		}
	};
}

$("#audioPlayer").html(characters.play);
let playing = false;

$(document).ready(function() {
	$("#audioPlayer").on("click", function() {
		if (!playing) {
			howler_example.play();
			$("#audioPlayer").html(characters.paused);
			playing = true;
		} else {
			howler_example.pause();
			$("#audioPlayer").html(characters.play);
			playing = false;
		}
	});

	$("#audioPlayerVolUp").on("click", function() {
		var vol = howler_example.volume();
		vol += 0.1;
		if (vol > 1) {
			vol = 1;
		}
		howler_example.volume(vol);
	});

	$("#audioPlayerVolDown").on("click", function() {
		var vol = howler_example.volume();
		vol -= 0.1;
		if (vol < 0) {
			vol = 0;
		}
		howler_example.volume(vol);
	});
});
