import { Component, OnInit } from '@angular/core';
import { SearchAlgorithmService } from '../../services/search-algorithm.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  private joke: string;
  // public joke: String[] = [];

  constructor(private searchService: SearchAlgorithmService) { }

  ngOnInit() {
    this.getJoke();
  }

  getJoke(){
    this.searchService.searchJoke().subscribe(
      data => {
        this.joke = data.text;
      }
    );
  }
  

}
