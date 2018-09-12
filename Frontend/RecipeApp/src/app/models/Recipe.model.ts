import { StepsData } from "./steps-data";

export class Recipe{
//cook time in minutes,
    id:number;
    url:string;
    label:string;
    cooktime:number;
    servings:number;
    healthLabels: string[];
    ingredientLines: string[];
    image: string;
    calories:number;
   

 
    }

    class Ingredient{

        id:number;
        name:string;
        category:string;
        weight:number;
        
        }