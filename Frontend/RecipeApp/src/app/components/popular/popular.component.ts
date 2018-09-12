import { Component, OnInit } from '@angular/core';
import { SearchAlgorithmService } from '../../services/search-algorithm.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  constructor(private searchService: SearchAlgorithmService) { }

  ngOnInit() {
  }

  

}
