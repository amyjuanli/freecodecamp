var status = "more";

	function toggleText(id, toggleButton) {
		if (status == "more") {
			if (id == 'nature') {
				text = " It allows donors to pick their coordinates of adopted forest land and display them on the map.";
			} else if (id == 'fcc') {
				text = "Including Front-End, Back-End, and Full-Stack projects.";
			}
			document.getElementById(id).innerHTML = text;
			document.getElementById(toggleButton).innerText = "See Less";
			status = "less";
		} else if (status == "less") {
			document.getElementById(id).innerHTML = "";
			document.getElementById(toggleButton).innerText = "See More";
			status = "more";
		}
	}