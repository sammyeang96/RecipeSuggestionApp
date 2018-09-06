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
//{id:1,name:'Beef',category:'turkey'}
];
public veggies:Array<Ingredient>=[
  //{id:1,name:'Beef',category:'turkey'}
  ];

  public fruits:Array<Ingredient>=[
    //{id:1,name:'Beef',category:'turkey'}
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
