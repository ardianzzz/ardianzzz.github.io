var template = document.getElementById("template").innerHTML;
		var compiledTemplate = Hogan.compile(template);
		var data = {
			logo : "http://www.ranklogos.com/wp-content/uploads/2012/07/108300_garden_breeze_restaurant_logo.jpg",
			siteNav : [
				{ name: "Menu", URL: "/menu.html", active:"active" },
				{ name: "Survey", URL: "/survey.html" },
				{ name: "About", URL: "/About.html" }
			],
			menuCategory : [
				{ name: "Semua menu", URL : ""},
				{ name: "Sepsial Iga", URL : ""},
				{ name: "Spesial Jamur", URL : ""},
				{ name: "Aneka Juice", URL : ""},
				{ name: "Minuk", URL : ""}
			],
			menuOut : "3",
			menuList : [
				{ name: "Pizza Supreme Cheese", menuURL : "single.html", menuImg : "img/sample1.jpg", price : "50.000", rate : "9/10" },
				{ name: "Pizza Cheese Burger", menuURL : "single.html", menuImg : "img/sample2.jpg", price : "72.000", rate : "9/10" },
				{ name: "Pizza Something Awful", menuURL : "single.html", menuImg : "img/sample3.jpg", price : "30.000", rate : "9/10" },
				{ name: "Pizza Mataneasu", menuURL : "single.html", menuImg : "img/sample1.jpg", price : "50.000", rate : "9/10" },
				{ name: "Pizza Campor", menuURL : "single.html", menuImg : "img/sample2.jpg", price : "50.000", rate : "9/10" },
				{ name: "Pizza Rapatek enak", menuURL : "single.html", menuImg : "img/sample3.jpg", price : "50.000", rate : "9/10" }

			]
		};
		var renderedTemplate = compiledTemplate.render(data);
		document.getElementById("render").innerHTML = renderedTemplate;