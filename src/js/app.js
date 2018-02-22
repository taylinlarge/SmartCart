"use strict";

var SmartCart = (function(){
	let shared = {};
	
	let blackList = [];
	let todoList = [];
	let data;

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
		var addToListButton = document.querySelector('.add-to-list-button');
		var checkBoxes = document.querySelectorAll('.single-list-item__checkbox');

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
		addToListButton.addEventListener('click', addToListArray);
	}

	function toggleVitaminCheck(e) {
		e.preventDefault();
		e.currentTarget.classList.toggle('active');
		console.log(e.currentTarget.dataset.id);
	}

	function removeList() {
		var selectedVitaminContainer = document.querySelectorAll('.selected-vitamin-container');
		var expandedInfoWindow = document.querySelectorAll('.expanded-info-window');
		var needsContainer = document.querySelector('.my-needs-container');
		var needsName = document.querySelectorAll('.my-needs-title');
		var needsDes = document.querySelectorAll('.my-needs-des');

		if (selectedVitaminContainer.length) {
			for (let i = 0; i < selectedVitaminContainer.length; i++) {
				selectedVitaminContainer[i].parentNode.removeChild(selectedVitaminContainer[i]);
			}
		}


		while (needsContainer.childNodes.length) {
			needsContainer.removeChild(needsContainer.childNodes[0]);
		}
	}

	function populateNutrientDes() {
		var vitaminButtons = document.querySelectorAll('.vitamin-button');
		var myNeedsTitle = document.querySelector('.my-needs-title');
		var selectedVitaminName = document.querySelector('.selected-vitamin__name');
		var myNeedsContainer = document.querySelector('.my-needs-container');

		vitaminButtons.forEach(function(button) {
			if (button.classList.contains('active')) {
				var myNeedsTitle = document.createElement('h3');
				myNeedsTitle.classList.add('my-needs-title');
				myNeedsTitle.innerHTML = button.dataset.value;
				myNeedsContainer.appendChild(myNeedsTitle);

				for (let r = 0; r < vitaminDescription.length; r++) {
					if (vitaminDescription[r].name == button.dataset.value) {
						var myNeedsDes = document.createElement('p');
						myNeedsDes.classList.add('my-needs-des');
						myNeedsDes.innerHTML = vitaminDescription[r].des;
						console.log(myNeedsDes);
						myNeedsContainer.appendChild(myNeedsDes);
					}
				}
			}
		});
	}

	function populateList(data, nutrientID) {
		var vitaminButtons = document.querySelectorAll('.vitamin-button');
		var singleListItem = document.querySelector('.single-list-item');
		var listItemName = document.querySelector('.single-list-item__name');
		var listItemDV = document.querySelector('.single-list-item__dv');
		var list = document.createElement('div');
		list.classList.add('list');
		
		var newHeader = createHeader(data, nutrientID);
		
		console.log("call createListItemz()")
		createListItemz(data, list);
		newHeader.appendChild(list);
	}

	function createListItemz(data, list) {
		for (let i = 0; i < data.report.foods.length; i++) {

				let dataPrefix = data.report.foods[i].nutrients[0];

				let listName = data.report.foods[i].name;
				let splitItemName = listName.split(',');

				var createNewListItem = document.createElement('div');
				createNewListItem.classList.add('single-list-item');
				createNewListItem.dataset.id = i;

				var createNewListItemContainer = document.createElement('div');
				createNewListItemContainer.classList.add('single-list-item-container');

				var createNewListItemName = document.createElement('h4');
				createNewListItemName.classList.add('single-list-item__name');
				createNewListItemName.innerHTML = splitItemName;

				var createNewListItemDV = document.createElement('h4');
				createNewListItemDV.classList.add('single-list-item__dv');
				createNewListItemDV.innerHTML = dataPrefix.value + ' ' + dataPrefix.unit;

				var createNewListItemCheckbox = document.createElement('input');
				createNewListItemCheckbox.type = "checkbox";
				createNewListItemCheckbox.classList.add('single-list-item__checkbox');

				createNewListItemContainer.appendChild(createNewListItemName);
				createNewListItemContainer.appendChild(createNewListItemDV);
				createNewListItemContainer.appendChild(createNewListItemCheckbox)
				createNewListItem.appendChild(createNewListItemContainer);
				list.appendChild(createNewListItem);

				checkBoxEvent(createNewListItemCheckbox);
				expandedWindowCreator(data, createNewListItem, listName, dataPrefix, i);
				expandedWindowListener(createNewListItem);
				
			}
	}

	function createHeader(data, nutrientID) {
		var popListMod = document.querySelector('.populated-list-module');
		var addToListButton = document.querySelector('.add-to-list-button');

		var selectedVitaminContainer = document.createElement('div');
		var selectedVitaminContainerTitle = document.createElement('div');
		var selectedVitaminName = document.createElement("h3");
		var vitaminLegend = document.createElement('div');
		var vitaminLegendDV = document.createElement('p');
		var vitaminLegendAddToList = document.createElement('p');

		selectedVitaminContainer.classList.add('selected-vitamin-container');
		selectedVitaminContainerTitle.classList.add('selected-vitamin-container__title');
		selectedVitaminName.classList.add('selected-vitamin__name');
		vitaminLegend.classList.add('vitamin-legend');
		vitaminLegendDV.classList.add('vitamin-legend__dv');
		vitaminLegendAddToList.classList.add('add-to-list');

		vitaminLegendDV.innerHTML = data.report.foods[0].nutrients[0].unit;
		vitaminLegendAddToList.innerHTML = 'add to list';
		selectedVitaminName.innerHTML = nutrientID;

		vitaminLegend.appendChild(vitaminLegendDV);
		vitaminLegend.appendChild(vitaminLegendAddToList);

		selectedVitaminContainerTitle.appendChild(selectedVitaminName);
		selectedVitaminContainer.appendChild(selectedVitaminContainerTitle);
		selectedVitaminContainer.appendChild(vitaminLegend);
		popListMod.insertBefore(selectedVitaminContainer, addToListButton);

		return selectedVitaminContainer;
	}

	function expandedWindowCreator (data, element, listName, dataPrefix, i) {
		var expandedInfoWindow = document.createElement('div');
		var expandedInfoWindowName = document.createElement('h3');
		var expandedInfoWindowMeasurement = document.createElement('p');
		var expandedInfoWindowNurients = document.createElement('div');
		var expandedInfoWindowNurientsList = document.createElement('p');

		expandedInfoWindowNurientsList.classList.add('expanded-info-window__nutrients-list');
		expandedInfoWindowNurients.classList.add('expanded-info-window__nurtients');
		expandedInfoWindowMeasurement.classList.add('expanded-info-window__measurement');
		expandedInfoWindowName.classList.add('expanded-info-window__name');
		expandedInfoWindow.classList.add('expanded-info-window');

		expandedInfoWindow.dataset.id = i;
		

		expandedInfoWindowNurientsList.innerHTML = dataPrefix.nutrient + ': ' + `<br />` + dataPrefix.value;
		expandedInfoWindowMeasurement.innerHTML = 'Measurement: ' + `<br />` + data.report.foods[i].measure;
		expandedInfoWindowName.innerHTML = listName;

		expandedInfoWindowNurients.appendChild(expandedInfoWindowNurientsList);
		expandedInfoWindow.appendChild(expandedInfoWindowName);
		expandedInfoWindow.appendChild(expandedInfoWindowMeasurement);
		expandedInfoWindow.appendChild(expandedInfoWindowNurients);
		
		if (element.dataset.id == expandedInfoWindow.dataset.id) {
			element.insertAdjacentElement('afterend', expandedInfoWindow);
		}
	}

	function expandedWindowListener(element) {
		element.addEventListener('click', function(e) {
			this.parentNode.querySelector(".expanded-info-window[data-id='"+this.dataset.id+"']").classList.toggle("active")
		});
	}

	function checkBoxEvent (element) {
		element.addEventListener('click', function(e) {
			e.stopPropagation();
		})
	}

	function addToListArray () {
		var listItem = document.querySelectorAll('.single-list-item');
		
		for (var i = 0; i < listItem.length; i++) {
			if (listItem[i].firstChild.childNodes[2].checked) {
				let shoppingListItem = listItem[i].firstChild.childNodes[0].textContent;
				todoList.push(shoppingListItem);
			}
		}
		console.log(todoList);
		createShoppingList();
	}

	function createShoppingList() {
		var tl = new TimelineMax();
		var listModule = document.querySelector('.populated-list-module');
		var shoppingModule = document.querySelector('.list-module');
		var ul = document.createElement('ul');
		ul.classList.add('shopping-list-ul');
		document.querySelector('.shopping-list__container').appendChild(ul);
		for (var i = 0; i < todoList.length; i++) {
			console.log(todoList[i]);
			var li = document.createElement('li');
			li.classList.add('shopping-list-li');
			li.innerHTML = todoList[i];
			ul.appendChild(li);
		}
		tl.to(listModule, 0.2, {opacity: 0});
		tl.to(listModule, 0.2, {display: "none"});
		tl.to(shoppingModule, 0.2, {display: "block"});
		tl.to(shoppingModule, 0.2, {opacity: 1});
	}

	function searchVitamins(e) {
		e.preventDefault();
		removeList();
		// var container = document.querySelectorAll('.selected-vitamin-container');
		var vitaminButtons = document.querySelectorAll('.vitamin-button');
		var ajaxGif = document.querySelector('.ajax-loader');
		var homeModule = document.querySelector('.home-module');
		var listModule = document.querySelector('.populated-list-module');
		var tl = new TimelineMax();
		ajaxGif.classList.add('active');

		let url = "https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=UagOcIiD2fvLJeWTT2wdjowabdjWJb3DX6GE86ZR&sort=c&max=20";

		// for (var i = 0; i < vitaminButtons.length; i++) {
		// 	if (!vitaminButtons[i].contains('active')) {

		// 	}
		// }

		vitaminButtons.forEach(function(item) {
			if (item.classList.contains('active')) {
				var newUrl = url + '&nutrients=' + item.dataset.id;
				var nutrientID = item.dataset.value;
				console.log(newUrl);
				fetch(newUrl)
				  .then(
				    function(response) {
						if (response.status !== 200) {
							console.log('Looks like there was a problem. Status Code: ' +
							response.status);
							return;
						}
						response.json().then(function(data) {
							console.log(data, item);
							ajaxGif.classList.remove('active');
							// addToNewArray(data);
							populateList(data, nutrientID);
							tl.to(homeModule, 0.4, {opacity: 0});
							tl.to(homeModule, 0.1, {display: "none"});
							tl.to(listModule, 0.1, {display: "block"});
							tl.to(listModule, 0.4, {opacity: 1});
						});
				    }
				  )
				  .catch(function(err) {
				    console.log('Fetch Error :-S', err);
				  });
				newUrl = url;
			}
		})
		populateNutrientDes();
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
		fetch("http://circuslabs.net/~taylin.large/Q6/Teams/php-proxy.php?url=" + encodeURIComponent(url))
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

	shared.data = data;
	shared.blackList = blackList;
	shared.init = init;

	return shared;

}());

SmartCart.init();
