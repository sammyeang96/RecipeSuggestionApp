import { Component, OnInit } from '@angular/core';
import { HandleArraysService } from '../../services/handle-arrays.service';
import { RouterModule, Router } from '../../../../node_modules/@angular/router';
import { Ingredient } from '../../models/Ingredient.model';

@Component({
  selector: 'app-food-category',
  templateUrl: './food-category.component.html',
  styleUrls: ['./food-category.component.css']
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
  public ingredients: Ingredient[] = [];

  constructor(private router: Router, private foodService: HandleArraysService) { }

  ngOnInit() {
  }

  public setCategory = (category) => {
    if(this.currentCategory == category) return;
    this.currentCategory = category;
  }

  public showCarne(){
    this.ingredients = this.foodService.getMeats();
    this.currentCategory = "meats";
    console.log(this.ingredients);
  }
  
  public showDairy(){
    this.ingredients = this.foodService.getDairy();
    this.currentCategory = "dairy";
  }

  public showVeggie(){
    this.ingredients = this.foodService.getVeggies();
    this.currentCategory = "veggies";
  }

  public showFruit(){
    this.ingredients = this.foodService.getFruits();
    this.currentCategory = "fruits";
  }

  public showGrain(){
    this.ingredients = this.foodService.getStarches();
    this.currentCategory = "grains";
  }

  public showHerbSpice(){
    this.ingredients = this.foodService.getSpices();
    this.currentCategory = "herbs-spices";
  }
}
