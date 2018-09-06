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
  {id:1,name:'Beef',category:'meats', weight:10},
  {id:2,name:'Chicken',category:'meats', weight:10},
  {id:3,name:'Turkey',category:'meats', weight:10},
  {id:4,name:'Pork',category:'meats', weight:10},
  {id:5,name:'Shrimp',category:'meats', weight:10},
  {id:6,name:'Salmon',category:'meats', weight:10},
  {id:7,name:'Tuna',category:'meats', weight:10},
  {id:8,name:'Tilapia',category:'meats', weight:10},
  {id:9,name:'Halibut',category:'meats', weight:10},


];
public veggies:Array<Ingredient>=[
  {id:1,name:'Broccoli',category:'veggies',weight:6},
  {id:2,name:'Squash',category:'veggies',weight:6},
  {id:3,name:'Spinach',category:'veggies',weight:6},
  {id:4,name:'Carrots',category:'veggies',weight:6},
  {id:5,name:'Onion',category:'veggies',weight:6},
  {id:6,name:'Cabbage',category:'veggies',weight:6},
  {id:7,name:'Zucchini',category:'veggies',weight:6},
  {id:8,name:'Eggplant',category:'veggies',weight:6},
  {id:9,name:'Corn',category:'veggies',weight:6},
  {id:10,name:'Lettuce',category:'veggies',weight:6},
  {id:11,name:'Chives',category:'veggies',weight:6},
  {id:12,name:'Asparagus',category:'veggies',weight:6},
  {id:13,name:'Garlic',category:'veggies',weight:6},
  {id:14,name:'Peas',category:'veggies',weight:6},
  {id:15,name:'Chickpea',category:'veggies',weight:6},


  ];

  public fruits:Array<Ingredient>=[
    {id:1,name:'Tomato',category:'fruits',weight:5},
    {id:2,name:'Bell Pepper',category:'fruits',weight:5},
    {id:3,name:'Cucumbers',category:'fruits',weight:5},
    {id:4,name:'Olives',category:'fruits',weight:5},
    {id:5,name:'Avocado',category:'fruits',weight:5},
    {id:6,name:'Bananas',category:'fruits',weight:5},
    {id:7,name:'Pineapple',category:'fruits',weight:5},
    {id:8,name:'Cherries',category:'fruits',weight:5},
    {id:9,name:'Lemons',category:'fruits',weight:5},
    {id:10,name:'Limes',category:'fruits',weight:5},
    {id:11,name:'Oranges',category:'fruits',weight:5},
    {id:12,name:'Pears',category:'fruits',weight:5},
    {id:13,name:'Mangos',category:'fruits',weight:5},
    {id:14,name:'Jalepeno Pepper',category:'fruits',weight:5},
    {id:15,name:'Green Pepper',category:'fruits',weight:5},

    ];

  public dairy:Array<Ingredient>=[
    //{id:1,name:'Beef',category:'turkey'}
    ];

  public spices:Array<Ingredient>=[
    //{id:1,name:'Beef',category:'turkey'}
    ];

    public grains:Array<Ingredient>=[
      //{id:1,name:'Beef',category:'turkey'}
      ];


      public getGrains() {
        return this.grains;
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
        return this.veggies;
      }

      public getRecipes(){
        return this.therecipes;
      }

  constructor() { }
}
