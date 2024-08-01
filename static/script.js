		function checkForm()
		{
			var radios = document.getElementsByName("answer");
			for (var i = 0, len = radios.length; i < len; i++) {
					if (radios[i].checked) {
							return true;
					}
			}
			document.getElementById("error").style.display = "block";
			return false;
		}

		function changeStyle()
		{
			var style_choice = "static/" + document.getElementById("style_choice").value + ".css";
			document.getElementById("pagestyle").setAttribute("href", style_choice);
		}