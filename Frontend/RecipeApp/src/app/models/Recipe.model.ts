
export class Recipe{
//cook time in minutes,
    id:number;
    label:string;
    cooktime:number;
    servings:number;
    healthLabels: string[];
    ingredientLines: string[];
    calories:number;

 
    }

    class Ingredient{

        id:number;
        name:string;
        category:string;
        weight:number;
        
        }