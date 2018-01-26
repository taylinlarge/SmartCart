"use strict";

// var app = new Vue({
//   el: '#content',
//   data: {
//     food: [
//     	{
//     		name: 'Broccoli',
//     		vitamins: 
//     			{
//     				vitaminA: 567 + 'IU',
//     				vitaminB: 0,
//     				vitaminC: 81.2 + 'mg',
//     				vitaminD: 0,
//     				vitaminE: 0,
//     				calcium: 42.8 + 'mg',
//     				fiber: 2.4 + 'g',
//     				iron: 0.7 + 'mg',
//     				magnesium: 19.1 + 'mg',
//     				potassium: 288 + 'mg',
//     				protein: 2.6 + 'g',

//     			},

//     		recipe: [
//     			{
//     				name: 'Broccoli Casserol',
//     				ingredients: ['Broccoli', 'Cheese', 'Mayonaise', 'Mushroom Soup', 'Eggs', 'Butter'],
//     				directions: 'Preheat oven to 350°F. Spray a 13 x 9 inch baking dish with cooking spray. In a large bowl, combine broccoli, mayonnaise, cheese, soup and eggs. Mix well. Place the mixture in pan. Top with crushed crackers and pour the melted butter evenly over crackers. Bake for 35 minutes or until set and browned.',
//     			},
//     			{
//     				name: 'Broccoli With Lemon Butter Sauce',
//     				ingredients: ['Broccoli', 'Butter', 'Water', 'Lemon', 'Salt and Pepper', 'Cayenne'],
//     				directions: 'In a large skillet, combine the butter, water, lemon juice, cayenne pepper, salt and pepper. Bring to a simmer over medium heat. Add the broccoli to the pan, stir to coat, and cover with a lid. Cook for 10 to 15 minutes over medium-low heat, stirring once, until broccoli is tender but still bright green. Serve warm, or refrigerate and serve cold.'
//     			},
//     			{
//     				name: 'Broccoli Cheedar Soup',
//     				ingredients: ['Broccoli', 'Cheese', 'Onion', 'Flour', 'Eggs', 'Butter', 'Milk', 'Chicken Stock', 'Carrots', 'Celery', 'Salt and Pepper'],
//     				directions: 'Melt 1 tablespoon butter in a skillet over medium-high heat. Saute onion in hot butter until translucent, about 5 minutes. Set aside. Whisk 1/4 cup melted butter and flour together in a large saucepan over medium-low heat; cook until flour loses it\'s granular texture, adding 1 to 2 tablespoons of milk if necessary to keep the flour from burning, 3 to 4 minutes. Gradually pour milk into flour mixture while whisking constantly. Stir chicken stock into milk mixture. Bring to a simmer; cook until flour taste is gone and mixture is thickened, about 20 minutes. Add broccoli, carrots, sauteed onion, and celery; simmer until vegetables are tender, about 20 minutes. Stir Cheddar cheese into vegetable mixture until cheese melts. Season with salt and pepper to taste.',
//     			},
//     		]

//     	},
//     	{
//     		name: 'Banana',
//     		vitamins:
//     			{
//     				vitaminA: 144 + 'IU',
//     				vitaminB: 0,
//     				vitaminC: 19.6 + 'mg',
//     				vitaminD: 0,
//     				vitaminE:  0.2 + 'mg',
//     				calcium: 11.3 + 'mg',
//     				fiber: 5.9 + 'g',
//     				iron: 0.6 + 'mg',
//     				magnesium: 60.8 + 'mg',
//     				potassium: 806 + 'mg',
//     				protein: 2.5 + 'g',

//     			},
//     		recipe: [
//     			{

//     			}
//     		]

//     	},
//     ]
//   },
//   methods: {
//   	findRecipes: function(e) {
//   		for (var i = 0; i < app.food.length; i++) {

//   			if (e.currentTarget.innerHTML == app.food[i].name) {
  				
//   				for (var r = 0; r < app.food[i].recipe.length; r++) {
//   					console.log(app.food[i].recipe[r].name);

//   					var wrapper = document.querySelector('#content');
//   					var recipe = document.createElement('div');

//   					recipe.innerHTML = app.food[i].recipe[r].directions;
//   					wrapper.appendChild(recipe);
//   				}
//   			}
//   		}
//   	}
//   }
// })



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

*/


var app2 = new Vue({
	el: '#content',
	data: {
		vitamins: [
			{
				name: 'Calcium',
				food: [
					{
						type: 'Milk',
						dv: '30%',
						mg: 300,
					},
					{
						type: 'Kale',
						dv: '24%',
						mg: 245,
					},
					{
						type: 'Sardines',
						dv: '21%',
						mg: 217,
					},
					{
						type: 'Yogurt',
						dv: '30%',
						mg: 300,
					},
					{
						type: 'Broccoli',
						dv: '9%',
						mg: 93,
					},
					{
						type: 'Watercress',
						dv: '4%',
						mg: 41,
					},
					{
						type: 'Cheese',
						dv: '23%',
						mg: 224
					},
					{
						type: 'Bok Choy',
						dv: '7%',
						mg: 74,
					},
					{
						type: 'Okra',
						dv: '8%',
						mg: 82,
					},
					{
						type: 'Almonds',
						dv: '8%',
						mg: 76,
					},
				]
			},
			{
				name: "Vitamin C",
				food: [
					{
						type: 'Guava',
						dv: '628%',
						mg: 377,
					},
					{
						type: 'Black Currant',
						dv: '338%',
						mg: 203,
					},
					{
						type: 'Red Pepper',
						dv: '317%',
						mg: 190,
					},
					{
						type: 'Kiwi',
						dv: '273%',
						mg: 164,
					},
					{
						type: 'Green Pepper',
						dv: '200%',
						mg: 120,
					},
					{
						type: 'Orange',
						dv: '163%',
						mg: 82,
					},
					{
						type: 'Strawberries',
						dv: '149%',
						mg: 89.4,
					},
					{
						type: 'Papaya',
						dv: '144%',
						mg: 86.5,
					},
					{
						type: 'Broccoli',
						dv: '135%',
						mg: 81.2,
					},
					{
						type: 'Kale',
						dv: '134%',
						mg: 80,
					},
				]
			},
			{
				name: 'Potassium',
				food: [
					{
						type: 'Avocado',
						dv: '30%',
						mg: 1067,
					},
					{
						type: 'Acorn Squash',
						dv: '26%',
						mg: 896,
					},
					{
						type: 'Spinach',
						dv: '24%',
						mg: 839,
					},
					{
						type: 'Sweet Potato',
						dv: '24%',
						mg: 855,
					},
					{
						type: 'Wild-Caught Salmon',
						dv: '22%',
						mg: 772,
					},
					{
						type: 'Dried Apricots',
						dv: '22%',
						mg: 756,
					},
					{
						type: 'Pomegranate',
						dv: '19%',
						mg: 667,
					},
					{
						type: 'Coconut Water',
						dv: '17%',
						mg: 600,
					},
					{
						type: 'White Beans',
						dv: '15%',
						mg: 502,
					},
					{
						type: 'Banana',
						dv: '14%',
						mg: 487,
					},
				]
			},
			{
				name: 'Fiber',
				food: [
					{
						type: 'Bran',
						dv: '240%',
						g: 60,
					},
					{
						type: 'Cauliflower',
						dv: '9%',
						g: 2,
					},
					{
						type: 'Cabbage',
						dv: '8%',
						g: 2,
					},
					{
						type: 'Berries',
						dv: '32%',
						g: 8,
					},
					{
						type: 'Leafy Greens',
						dv: '4%',
						g: 1,
					},
					{
						type: 'Celery',
						dv: '6%',
						g: 2,
					},
					{
						type: 'Squash',
						dv: '19%',
						g: 5,
					},
					{
						type: 'Kidney Beans',
						dv: '46%',
						g: 11,
					},
					{
						type: 'Mushrooms',
						dv: '14%',
						g: 3,
					},
					{
						type: 'Oranges',
						dv: '18%',
						g: 4,
					},

				]
			},
			{
				name: 'Protein',
				food: [
					{
						type: 'Chicken Breast',
						dv: '60%',
						g: 30,
					},
					{
						type: 'Pork Chop',
						dv: '54%',
						g: 27,
					},
					{
						type: 'Ground Beef',
						dv: '52%',
						g: 26,
					},
					{
						type: 'Swiss Cheese',
						dv: '50%',
						g: 25,
					},
					{
						type: 'Lamb Lion',
						dv: '50%',
						g: 25,
					},
					{
						type: 'Salmon',
						dv: '48%',
						g: 24,
					},
					{
						type: 'Ham',
						dv: '46%',
						g: 23,
					},
					{
						type: 'Black Beans',
						dv: '44%',
						g: 22,
					},
					{
						type: 'Almonds',
						dv: '42%',
						g: 21,
					},
					{
						type: 'Pumpkin Seeds',
						dv: '38%',
						g: 19,
					},
				]
			}
		]
	},
	methods: {
		thisFunction: function(e){
			for (var i = 0; i < this.vitamins.length; i++) {

				if (e.currentTarget.innerHTML == this.vitamins[i].name) {

					for (var r = 0; r < this.vitamins[i].food.length; r++) {
						console.log(this.vitamins[i].food[r].type);
					}
				}
			}
		},

		searchVitamin: function(e) {
			let searchInput = document.querySelector('.search-input').value;
			console.log(searchInput);
			
			for (var i = 0; i < this.vitamins.length; i++) {
				if (searchInput == this.vitamins[i].name) {
					for (var r = 0; r < this.vitamins[i].food.length; r++) {
						console.log(this.vitamins[i].food[r].type);
						var ul = document.querySelector('.ul');
						var listItem = document.createElement('li');
						listItem.innerHTML = this.vitamins[i].food[r].type;
						ul.appendChild(listItem);
					}
				}
			}
		}
	}
})










