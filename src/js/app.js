"use strict";

var app = new Vue({
  el: '#content',
  data: {
    food: [
    	{
    		name: 'Broccoli',
    		vitamins: 
    			{
    				vitaminA: 567 + 'IU',
    				vitaminB: 0,
    				vitaminC: 81.2 + 'mg',
    				vitaminD: 0,
    				vitaminE: 0,
    				calcium: 42.8 + 'mg',
    				fiber: 2.4 + 'g',
    				iron: 0.7 + 'mg',
    				magnesium: 19.1 + 'mg',
    				potassium: 288 + 'mg',
    				protein: 2.6 + 'g',

    			},

    		recipe: [
    			{
    				name: 'Broccoli Casserol',
    				ingredients: ['Broccoli', 'Cheese', 'Mayonaise', 'Mushroom Soup', 'Eggs', 'Butter'],
    				directions: 'Preheat oven to 350°F. Spray a 13 x 9 inch baking dish with cooking spray. In a large bowl, combine broccoli, mayonnaise, cheese, soup and eggs. Mix well. Place the mixture in pan. Top with crushed crackers and pour the melted butter evenly over crackers. Bake for 35 minutes or until set and browned.',
    			},
    			{
    				name: 'Broccoli With Lemon Butter Sauce',
    				ingredients: ['Broccoli', 'Butter', 'Water', 'Lemon', 'Salt and Pepper', 'Cayenne'],
    				directions: 'In a large skillet, combine the butter, water, lemon juice, cayenne pepper, salt and pepper. Bring to a simmer over medium heat. Add the broccoli to the pan, stir to coat, and cover with a lid. Cook for 10 to 15 minutes over medium-low heat, stirring once, until broccoli is tender but still bright green. Serve warm, or refrigerate and serve cold.'
    			},
    			{
    				name: 'Broccoli Cheedar Soup',
    				ingredients: ['Broccoli', 'Cheese', 'Onion', 'Flour', 'Eggs', 'Butter', 'Milk', 'Chicken Stock', 'Carrots', 'Celery', 'Salt and Pepper'],
    				directions: 'Melt 1 tablespoon butter in a skillet over medium-high heat. Saute onion in hot butter until translucent, about 5 minutes. Set aside. Whisk 1/4 cup melted butter and flour together in a large saucepan over medium-low heat; cook until flour loses it\'s granular texture, adding 1 to 2 tablespoons of milk if necessary to keep the flour from burning, 3 to 4 minutes. Gradually pour milk into flour mixture while whisking constantly. Stir chicken stock into milk mixture. Bring to a simmer; cook until flour taste is gone and mixture is thickened, about 20 minutes. Add broccoli, carrots, sauteed onion, and celery; simmer until vegetables are tender, about 20 minutes. Stir Cheddar cheese into vegetable mixture until cheese melts. Season with salt and pepper to taste.',
    			},
    		]

    	},
    	{
    		name: 'Banana',
    		vitamins:
    			{
    				vitaminA: '',
    				vitaminB: '',
    				vitaminC: '',
    				vitaminD: '',
    				vitaminE: '',
    				calcium: '',
    				fiber: '',
    				iron: '',
    				magnesium: '',
    				potassium: '',
    				protein: '',

    			},
    		recipe: [
    			{

    			}
    		]

    	},
    ]
  }
})
