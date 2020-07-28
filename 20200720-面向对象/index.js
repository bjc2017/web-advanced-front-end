import Game from './game/game.js';

let game = new Game();

let eles = {
	login: {
		loginView: document.querySelector('.login'),
		username: document.querySelector('.username'),
		sub: document.querySelector('.sub')
	},
	game: {
		gameView: document.querySelector('.game'),
		chioseusername: document.querySelector('.chioseusername'),
		heroView: document.querySelector('.heroView'),
		heroShow: document.querySelector('.heroShow'),
		skillsView: document.querySelector('.skillsView')
	}
};

eles.login.sub.onclick = function () {
	let username = eles.login.username.value;
	eles.login.loginView.style.display = 'none';
	eles.game.chioseusername.innerHTML = username;
	eles.game.gameView.style.display = 'block';
	game.login(username);
	console.log(game);
	renderHeroes();
};

function renderHeroes() {
	eles.game.heroView.innerHTML = '';
	let heroes = game.player.heroes;
	heroes.forEach((hero) => {
		let div = document.createElement('div');
		div.classList.add('heroItem');
		div.innerHTML = `<img src="${hero.ico}" />
                    <span>${hero.name}</span>`;
		eles.game.heroView.appendChild(div);

		div.onclick = function () {
			eles.game.skillsView.innerHTML = '';
			eles.game.heroShow.innerHTML = `<img src="${hero.ico}" />`;
			let skills = hero.skills;
			renderSkills(skills);
		};
	});
}

function renderSkills(skills) {
	skills.forEach((skill) => {
		let img = document.createElement('img');
		img.src = skill.ico;
		eles.game.skillsView.appendChild(img);
	});
}
