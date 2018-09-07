
export class Recipe{
//cook time in minutes,
    id:number;
    label:string;
    cooktime:number;
    servings:number;
    ingredientLines: string[];
    calories:number;

 
    }

    class Ingredient{

        id:number;
        name:string;
        category:string;
        weight:number;
        
        }