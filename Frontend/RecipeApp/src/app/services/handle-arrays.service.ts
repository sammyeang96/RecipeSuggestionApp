import { Injectable } from '@angular/core';
import { Ingredient } from '../models/Ingredient.model';
import { Recipe } from '../models/Recipe.model';
import { User } from '../models/User.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HandleArraysService {

  public therecipes:Array<Recipe>=[
    //{id:1,name:'Beef',category:'turkey'}
    ];
  public meats:Array<Ingredient>=[
  {id:1,name:'Beef',category:'meats', weight:12},
  {id:2,name:'Chicken',category:'meats', weight:12},
  {id:3,name:'Turkey',category:'meats', weight:12},
  {id:4,name:'Pork',category:'meats', weight:12},
  {id:5,name:'Shrimp',category:'meats', weight:12},
  {id:6,name:'Salmon',category:'meats', weight:12},
  {id:7,name:'Tuna',category:'meats', weight:12},
  {id:8,name:'Tilapia',category:'meats', weight:12},
  {id:9,name:'Halibut',category:'meats', weight:12},


];
public veggies:Array<Ingredient>=[
  {id:1,name:'Broccoli',category:'veggies',weight:4},
  {id:2,name:'Squash',category:'veggies',weight:4},
  {id:3,name:'Spinach',category:'veggies',weight:4},
  {id:4,name:'Carrots',category:'veggies',weight:4},
  {id:5,name:'Onion',category:'veggies',weight:4},
  {id:6,name:'Cabbage',category:'veggies',weight:4},
  {id:7,name:'Zucchini',category:'veggies',weight:4},
  {id:8,name:'Eggplant',category:'veggies',weight:4},
  {id:9,name:'Corn',category:'veggies',weight:4},
  {id:10,name:'Lettuce',category:'veggies',weight:4},
  {id:11,name:'Chives',category:'veggies',weight:4},
  {id:12,name:'Asparagus',category:'veggies',weight:4},
  {id:13,name:'Garlic',category:'veggies',weight:4},
  {id:14,name:'Peas',category:'veggies',weight:4},
  {id:15,name:'Chickpea',category:'veggies',weight:4},
  {id:16,name:'Mushroom',category:'veggies',weight:4},
  {id:17,name:'Celery',category:'veggies',weight:4},
  {id:18,name:'Kale',category:'veggies',weight:4},
  {id:19,name:'Radish',category:'veggies',weight:4},
  {id:20,name:'Artichokes',category:'veggies',weight:4},
  {id:21,name:'Arugula',category:'veggies',weight:4},
  {id:22,name:'Spring Beans',category:'veggies',weight:4},
  {id:23,name:'Beets',category:'veggies',weight:4},
  {id:24,name:'Belgian Endive',category:'veggies',weight:4},
  {id:25,name:'Bok Choy',category:'veggies',weight:4},
  {id:26,name:'Broccoli Rabe',category:'veggies',weight:4},
  {id:27,name:'Brussel Sprouts',category:'veggies',weight:4},
  {id:28,name:'Cauliflower',category:'veggies',weight:4},
  {id:29,name:'Collard Greens',category:'veggies',weight:4},
  {id:30,name:'Crookneck',category:'veggies',weight:4},
  {id:31,name:'Fennel',category:'veggies',weight:4},
  {id:32,name:'Ginger Root',category:'veggies',weight:4},
  {id:33,name:'Horseradish',category:'veggies',weight:4},
  {id:34,name:'Jicama',category:'veggies',weight:4}



  ];

  public fruits:Array<Ingredient>=[
    {id:1,name:'Tomato',category:'fruits',weight:7},
    {id:2,name:'Bell Pepper',category:'fruits',weight:7},
    {id:3,name:'Cucumber',category:'fruits',weight:7},
    {id:4,name:'Olives',category:'fruits',weight:7},
    {id:5,name:'Avocado',category:'fruits',weight:7},
    {id:6,name:'Banana',category:'fruits',weight:7},
    {id:7,name:'Pineapple',category:'fruits',weight:7},
    {id:8,name:'Cherry',category:'fruits',weight:7},
    {id:9,name:'Lemon',category:'fruits',weight:7},
    {id:10,name:'Lime',category:'fruits',weight:7},
    {id:11,name:'Orange',category:'fruits',weight:7},
    {id:12,name:'Pear',category:'fruits',weight:7},
    {id:13,name:'Mango',category:'fruits',weight:7},
    {id:14,name:'Jalepeno Pepper',category:'fruits',weight:7},
    {id:15,name:'Strawberry',category:'fruits',weight:7},
    {id:16,name:'Blueberry',category:'fruits',weight:7},
    {id:17,name:'Watermelon',category:'fruits',weight:7},
    {id:18,name:'Apple',category:'fruits',weight:7},
    {id:19,name:'Plum',category:'fruits',weight:7},
    {id:20,name:'Peach',category:'fruits',weight:7},
    {id:21,name:'Grapes',category:'fruits',weight:7},
    {id:22,name:'Coconut',category:'fruits',weight:7},
    {id:23,name:'Cherries',category:'fruits',weight:7},
    {id:24,name:'Raspberry',category:'fruits',weight:7},
    {id:24,name:'Blackberry',category:'fruits',weight:7}





    ];

  public dairy:Array<Ingredient>=[
    {id:1,name:'Buttermilk',category:'dairy',weight:5},
    {id:2,name:'Butter',category:'dairy',weight:5},
    {id:3,name:'Sour cream',category:'dairy',weight:5},
    {id:4,name:'Cheddar Cheese',category:'dairy',weight:5},
    {id:5,name:'Cottage Cheese',category:'dairy',weight:5},
    {id:6,name:'Mozzarella',category:'dairy',weight:5},
    {id:7,name:'Milk',category:'dairy',weight:5},
    {id:8,name:'Swiss Cheese',category:'dairy',weight:5},
    {id:9,name:'Cream',category:'dairy',weight:5},
    {id:10,name:'Cheese',category:'dairy',weight:5},
    {id:10,name:'Cream Cheese',category:'dairy',weight:5},
    {id:10,name:'Eggnog',category:'dairy',weight:5}




   
    ];
 
  public spices:Array<Ingredient>=[
    {id:1,name:'Lemon pepper',category:'spices',weight:2},
    {id:2,name:'Chili Powder',category:'spices',weight:2},
    {id:3,name:'Oregano',category:'spices',weight:2},
    {id:4,name:'Cayenne pepper',category:'spices',weight:2},
    {id:5,name:'Paprika',category:'spices',weight:2},
    {id:6,name:'Basil',category:'spices',weight:2},
    {id:7,name:'Crushed Red Pepper',category:'spices',weight:2},
    {id:8,name:'Pepper',category:'spices',weight:2},
    {id:9,name:'Salt',category:'spices',weight:2},
    {id:10,name:'Cumin',category:'spices',weight:2},
    {id:11,name:'Thyme',category:'spices',weight:2},
    {id:12,name:'Cinnamon',category:'spices',weight:2},
    {id:13,name:'Ginger',category:'spices',weight:2},
    {id:14,name:'Parsley',category:'spices',weight:2},
    {id:15,name:'Ketchup',category:'spices',weight:2},
    {id:16,name:'Mustard',category:'spices',weight:2},
    {id:17,name:'Sesame',category:'spices',weight:2},
    {id:18,name:'Onion Powder',category:'spices',weight:2},
    {id:19,name:'Bay Leaf',category:'spices',weight:2},
    {id:20,name:'Sugar',category:'spices',weight:2},
    {id:21,name:'Powdered Sugar',category:'spices',weight:2}









    
    ];

    public starches:Array<Ingredient>=[
      {id:1,name:'White Rice',category:'grains',weight:15},
      {id:2,name:'Brown Rice',category:'grains',weight:15},
      {id:3,name:'Wheat',category:'grains',weight:15},
      {id:4,name:'Bread',category:'grains',weight:15},
      {id:5,name:'Rye',category:'grains',weight:15},
      {id:6,name:'Cornmeal',category:'grains',weight:15},
      {id:7,name:'Tortilla',category:'grains',weight:15},
      {id:8,name:'Rice',category:'grains',weight:15},
      {id:10,name:'Lasagna',category:'grains',weight:15},
      {id:11,name:'Linguini',category:'grains',weight:15},
      {id:12,name:'Spaghetti',category:'grains',weight:15},
      {id:13,name:'Fettucini',category:'grains',weight:15},
      {id:14,name:'Ravioli',category:'grains',weight:15},
      {id:15,name:'Baking powder',category:'grains',weight:15},
      {id:16,name:'Flour',category:'grains',weight:15}





      ];


      public getStarches() {
        return this.starches;
      }
      public getSpices() {
        return this.spices;
      }
      public getDairy() {
        return this.dairy;
      }
      public getFruits() {
        return this.fruits;
      }
      public getVeggies() {
        return this.veggies;
      }
      public getMeats() {
        return this.meats;
      }

      public getRecipes(){
        return this.therecipes;
      }

  constructor() { }
}
