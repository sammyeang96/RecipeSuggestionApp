import { Component, OnInit } from '@angular/core';
import { HandleArraysService } from '../../services/handle-arrays.service';
import { RouterModule, Router } from '../../../../node_modules/@angular/router';
import { Ingredient } from '../../models/Ingredient.model';

@Component({
  selector: 'app-food-category',
  templateUrl: './food-category.component.html',
  // styleUrls: ['./food-category.component.css']
})
export class FoodCategoryComponent implements OnInit {

  images: any[] = [
    {
      name: "meat",
      url:'../../../assets/images/meat.png'
    },
    {
      name: "dairy",
      url: '../../../assets/images/dairy.png'
    },
    {
      name: "veggie",
      url: '../../../assets/images/veggie.png'
    },
    {
      name: "fruit",
      url: '../../../assets/images/fruit.png'
    },
    {
      name: "grain",
      url: '../../../assets/images/wheat.png'
    },
    {
      name: "spice",
      url: '../../../assets/images/spice.png'
    }
  ]
  public currentCategory;
  public showIngredients: boolean;
  public ingredients: Ingredient[] = [];

  constructor(private router: Router, private foodService: HandleArraysService) { }

  ngOnInit() {
    this.showIngredients = false;
  }

  public setCategory = (category) => {
    if(this.currentCategory == category) return;
    this.currentCategory = category;
  }

  public showCarne(){
    this.ingredients = this.foodService.getMeats();
    this.currentCategory = "meats";
    this.showIngredients = true;
    console.log(this.ingredients);
  }
  
  public showDairy(){
    this.ingredients = this.foodService.getDairy();
    this.currentCategory = "dairy";
    this.showIngredients = true;
  }

  public showVeggie(){
    this.ingredients = this.foodService.getVeggies();
    this.currentCategory = "veggies";
    this.showIngredients = true;
  }

  public showFruit(){
    this.ingredients = this.foodService.getFruits();
    this.currentCategory = "fruits";
    this.showIngredients = true;
  }

  public showGrain(){
    this.ingredients = this.foodService.getStarches();
    this.currentCategory = "grains";
    this.showIngredients = true;
  }

  public showHerbSpice(){
    this.ingredients = this.foodService.getSpices();
    this.currentCategory = "herbs-spices";
    this.showIngredients = true;
  }
}
