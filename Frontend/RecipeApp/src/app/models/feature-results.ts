import { StepsData } from '../models/steps-data';
export class FeatureResults {
    id: number;
    title: string;
    image: string;
    likes: number;
    usedIngredientCount: number;
    missedIngredientCount: number;
    steps: StepsData;
}
