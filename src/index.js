class SoccerPitchJS {
	constructor(id, players) {
		this.element = document.getElementById(id);
		this.goalkeeper = players.goalkeeper.split(',');
		this.defender = players.defender.split(',');
		this.midfielder = players.midfielder.split(',');
		this.forwarder = players.forwarder.split(',');
	}

	create() {
		var soccerPitch = document.createElement('div');
		soccerPitch.classList.add('soccer-field');
		this.soccerPitch = soccerPitch;

		// Create Soccer Pitch Elements
		var soccerPitchElems = document.createElement('div');
		soccerPitchElems.classList.add('soccer-fields-elems');
		soccerPitch.appendChild(soccerPitchElems);

		// Create Rows for Pitch
		for (var i = 0; i <= 100; i = i + 20) {
			if (i > 0) {
				var pitchRow = document.createElement('div');
				pitchRow.classList.add('soccer-fields-row', 't' + i);
				soccerPitchElems.appendChild(pitchRow);
			}
		}

		// Create Half Pitch
		var halfPitch = document.createElement('div');
		halfPitch.classList.add('half-pitch');
		soccerPitchElems.appendChild(halfPitch);

		// Create Area
		var pitchArea = document.createElement('div');
		pitchArea.innerHTML =
			'<div class="pitch-area"></div><div class="half-moon-area"></div><span class="pitch-area-dot"></span>';
		pitchArea.classList.add('pitch-area');
		soccerPitchElems.appendChild(pitchArea);

		const team = this.element;
		team.appendChild(soccerPitch);

		// Players
		this.addPlayers('goalkeeper');
	}

	addPlayers(type) {
		console.log(this.soccerPitch);
		console.log(this.goalkeeper);

		var players = document.createElement('div');
		players.classList.add('players', type);
	}

	get() {
		return this.element;
	}
}
