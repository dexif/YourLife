'use strict';

function redraw(){

	var life_block = document.querySelector('#life');
	life_block.innerHTML = '';
	var now = new Date();
	var matches = window.location.hash.match(/#(\d{4})\.(\d{1,2})\.(\d{1,2})/);
	if(matches && matches.length > 0) {
		console.log(matches);
		var birth_year = parseInt(matches[1], 10);
		var birth_month = parseInt(matches[2], 10);
		var birth_day = parseInt(matches[3], 10);
	} else {
		var birth_year = prompt('What year were you born in?', 1980);
		var birth_month = prompt('What month(number) were you born in?', 1);
		var birth_day = prompt('What day were you born in?', 1);
	}

	if (birth_year > 1900 && birth_year < now.getFullYear()) {
	} else {
		alert('Wrong year!');
		return;
	}


	if (birth_month > 0 && birth_month < 13) {
	} else {
		alert('Wrong month!');
		return;
	}


	if (birth_day > 0 && birth_day < 32) {
	} else {
		alert('Wrong day!');
		return;
	}

	var birthdate = Date.UTC(birth_year, birth_month, birth_day);
	var today = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
	var weeks = (today - birthdate) / (1000 * 60 * 60 * 24 * 7);

	var week_of_life = 0;
	var div, week, year_number, week_class, title;
	for (var i = 0; i <= 80; i++) {
		div = document.createElement('div');
		div.setAttribute('id', 'year_' + i);
		div.setAttribute('class', 'year');
		year_number = document.createElement('div');
		year_number.setAttribute('class', 'year_number');
		year_number.innerHTML = i;
		div.appendChild(year_number);
		for (var j = 1; j <= 52; j++) {
			week_of_life++;
			title = '';
			week = document.createElement('div');
			week.setAttribute('id', 'week_' + week_of_life);

			week_class = 'week week_of_year_' + j;
			if (week_of_life <= weeks) {
				week_class += ' ended';
			}
			if (week_of_life == Math.ceil(weeks)) {
				week_class += ' current';
			}
			week.setAttribute('title', title + week_of_life + ' week of life and ' + j + ' week of ' + i + ' year.');
			week.setAttribute('class', week_class);
			div.appendChild(week);
		}
		life_block.appendChild(div);
	}
}
document.addEventListener('DOMContentLoaded', function() {
	redraw();
	window.onhashchange = redraw;
});
