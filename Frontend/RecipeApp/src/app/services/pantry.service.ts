import { Injectable } from '@angular/core';
import { Ingredient } from '../models/Ingredient.model';


@Injectable({
  providedIn: 'root'
})
export class PantryService {
  
ingredient: Ingredient[];
  constructor() { }



}
