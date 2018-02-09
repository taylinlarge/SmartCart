"use strict";

/*

	vitamin list:
		calcium, vitamin c, potassium, fiber, protein

		scratch food items. reciepes shown from vitamin search.

	
	flow:
		choosing vitamins:
			food list:
				show foods, DV%, check boxes to add to cart, 
			recipes:
				show recipes with vitamin chosen in them. show DV%, 



	Create seperate recipe array
*/




var SmartCart = (function(){
	var shared = {};

	const vitaminDescription = [
		{
			name: 'Calcium',
			des: 'A mineral found mainly in the hard part of bones, where it is stored. Calcium is added to bone by cells called osteoblasts and removed from bone by cells called osteoclasts. Calcium is essential for healthy bones and is also important for muscle contraction, heart action, and normal blood clotting.'
		},
		{
			name: 'Potassium',
			des: 'Potassium is a mineral that, among other things, helps muscles contract, helps regulate fluids and mineral balance in and out of body cells, and helps maintain normal blood pressure by blunting the effect of sodium.'
		},
		{
			name: 'Fiber',
			des: 'Fiber: The parts of fruits and vegetables that cannot be digested. Fiber is of vital importance to digestion; it helps the body move food through the digestive tract, reduces serum cholesterol, and contributes to disease protection. Also known as bulk and roughage.'
		},
		{
			name: 'Magnesium',
			des: 'Magnesium is needed for more than 300 biochemical reactions in the body. It helps to maintain normal nerve and muscle function, supports a healthy immune system, keeps the heart beat steady, and helps bones remain strong. It also helps regulate blood glucose levels and aid in the production of energy and protein.'
		},
		{
			name: 'Protein',
			des: 'Protein: One of the three nutrients used as energy sources (calories) by the body. Proteins are essential components of the muscle, skin, and bones. Proteins and carbohydrates each provide 4 calories of energy per gram, whereas fats provide 9 calories per gram.'
		},
		{
			name: 'Iron',
			des: 'Iron: An essential mineral. Iron is necessary for the transport of oxygen (via hemoglobin in red blood cells) and for oxidation by cells (via cytochrome). Deficiency of iron is a common cause of anemia. Food sources of iron include meat, poultry, eggs, vegetables and cereals (especially those fortified with iron).'
		},
		{
			name: 'Vitamin A',
			des: 'Vitamin A is a fat-soluble vitamin which helps maintain normal reproduction, vision and immune function. It comes in a number of forms (as retinol, retinal, retinoic acid or retinyl ester). ... One RE is defined as the biological activity associated with 1 µg of all-trans retinol.'
		},
		{
			name: 'Vitamin C',
			des: 'Vitamin C is required for growth and repair of tissues in all parts of the body. It is essential for life and in healing wounds and maintaining the integrity of gums, bones, and teeth. Vitamin C is a water-soluble vitamin. Water-soluble nutrients are not stored in the body.'
		},
		{
			name: 'Vitamin E',
			des: 'Vitamin E is a fat-soluble nutrient found in many foods. In the body, it acts as an antioxidant, helping to protect cells from the damage caused by free radicals.'
		}
	];

	function setupListeners() {
		var submitButton = document.querySelector('.list-search-button');
		var recipeButton = document.querySelector('.recipe-seach-button');

		var protein = document.querySelector('.protein');
		var calcium = document.querySelector('.calcium');
		var magnesium = document.querySelector('.magnesium');
		var vitaminA = document.querySelector('.vitamin-a');
		var vitaminC = document.querySelector('.vitamin-c');
		var vitaminE = document.querySelector('.vitamin-e');
		var iron = document.querySelector('.iron');
		var fiber = document.querySelector('.fiber');
		var potassium = document.querySelector('.potassium');

		protein.addEventListener('click', toggleVitaminCheck);
		calcium.addEventListener('click', toggleVitaminCheck);
		vitaminA.addEventListener('click', toggleVitaminCheck);
		vitaminC.addEventListener('click', toggleVitaminCheck);
		vitaminE.addEventListener('click', toggleVitaminCheck);
		iron.addEventListener('click', toggleVitaminCheck);
		fiber.addEventListener('click', toggleVitaminCheck);
		magnesium.addEventListener('click', toggleVitaminCheck);
		potassium.addEventListener('click', toggleVitaminCheck);


		submitButton.addEventListener('click', searchVitamins);
		recipeButton.addEventListener('click', searchRecipies);
	}

	function toggleVitaminCheck(e) {
		e.preventDefault();
		e.currentTarget.classList.toggle('active');
		console.log(e.currentTarget.dataset.id);
	}

	// function replacer(data) {
	// 	let newListItemName = str.replace(,.*$, '');
	// }

	function populateList(data) {
		var singleListItem = document.querySelector('.single-list-item');
		var listItemName = document.querySelector('.single-list-item__name');
		var listItemDV = document.querySelector('.single-list-item__dv');
		var list = document.querySelector('.list');
		var vitaminButtons = document.querySelectorAll('.vitamin-button');
		var myNeedsTitle = document.querySelector('.my-needs-title');
		var myNeedsDes = document.querySelector('.my-needs-des');
		var selectedVitaminName = document.querySelector('.selected-vitamin__name');

		for (var i = 0; i < vitaminButtons.length; i++) {
			if (vitaminButtons[i].classList.contains('active')) {
				myNeedsTitle.innerHTML = vitaminButtons[i].dataset.value;
				selectedVitaminName.innerHTML = vitaminButtons[i].dataset.value;

				for (var r = 0; r < vitaminDescription.length; r++) {
					if (vitaminDescription[r].name == vitaminButtons[i].dataset.value) {
						myNeedsDes.innerHTML = vitaminDescription[r].des;
					}
				}
			}
		}


		for (var i = 0; i < data.report.foods.length; i++) {

			var dataSHIT = data.report.foods[i].nutrients[0];

			var listName = data.report.foods[i].name;
			var splitItemName = listName.split(',', 1);
			console.log(splitItemName);

			var createNewListItem = document.createElement('div');
			createNewListItem.classList.add('single-list-item');

			var createNewListItemName = document.createElement('h4');
			createNewListItemName.classList.add('single-list-item__name');
			createNewListItemName.innerHTML = splitItemName[0];

			var createNewListItemDV = document.createElement('h4');
			createNewListItemDV.classList.add('single-list-item__dv');
			createNewListItemDV.innerHTML = dataSHIT.value + ' ' + dataSHIT.unit;

			var createNewListItemCheckbox = document.createElement('input');
			createNewListItemCheckbox.type = "checkbox";
			createNewListItemCheckbox.classList.add('single-list-item__checkbox');
			
			createNewListItem.appendChild(createNewListItemName);
			createNewListItem.appendChild(createNewListItemDV);
			createNewListItem.appendChild(createNewListItemCheckbox);
			list.appendChild(createNewListItem);

			// console.log(listItemName.text);
		}
	}


	function searchVitamins(e) {
		e.preventDefault();

		var vitaminButtons = document.querySelectorAll('.vitamin-button');

		let url = "https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=UagOcIiD2fvLJeWTT2wdjowabdjWJb3DX6GE86ZR&sort=c&max=50";

		for (var i = 0; i < vitaminButtons.length; i++) {
			if (vitaminButtons[i].classList.contains('active')) {
				url += '&nutrients=' + vitaminButtons[i].dataset.id;
			}
		}
		console.log(url);
		fetch(url)
		  .then(
		    function(response) {
				if (response.status !== 200) {
				console.log('Looks like there was a problem. Status Code: ' +
				  response.status);
				return;
				}

				response.json().then(function(data) {
				console.log(data);
				populateList(data);
				});
		    }
		  )
		  .catch(function(err) {
		    console.log('Fetch Error :-S', err);
		  });
	}

	function searchRecipies(e) {
		e.preventDefault();

		var vitaminButtons = document.querySelectorAll('.vitamin-button');

		let url = "https://api.edamam.com/search/?app_id=f2bbfd2e&app_key=688f5e309e9e2dca6fea9bf6d5529074";

		for (var i = 0; i < vitaminButtons.length; i++) {
			if (vitaminButtons[i].classList.contains('active')) {
				url += '&nutrients[' + vitaminButtons[i].dataset.range + ']=30';
			}
		}

		let header = new Headers({
		    'Access-Control-Allow-Origin':'*',
		    'Content-Type': 'multipart/form-data'
		});
		
		let sentData={
		    method: 'GET',
		    mode: 'cors',
		    header: header,
		};

		console.log(url);
		fetch("http://circuslabs.net/~taylin.large/Q6/Teams/SmartCart/recipe-proxy.php?url=" + url)
		  .then(
		    function(response) {
				if (response.status !== 200) {
				console.log('Looks like there was a problem. Status Code: ' +
				  response.status);
				return;
				}

				response.json().then(function(data) {
				console.log(data);
				});
		    }
		  )
		  .catch(function(err) {
		    console.log('Fetch Error :-S', err);
		});

	}

	

	function init(){
		setupListeners();
	}

	shared.init = init;

	return shared;

}());

SmartCart.init();






