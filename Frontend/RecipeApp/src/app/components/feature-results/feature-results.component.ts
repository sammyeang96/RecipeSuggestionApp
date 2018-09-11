import { Component, OnInit } from '@angular/core';
import { SearchAlgorithmService } from '../../services/search-algorithm.service';
import { FeatureResults } from '../../models/feature-results';

@Component({
  selector: 'app-feature-results',
  templateUrl: './feature-results.component.html',
  styleUrls: ['./feature-results.component.css']
})
export class FeatureResultsComponent implements OnInit {
  results: FeatureResults[];
  constructor(private searchAlgorithmService: SearchAlgorithmService ) { }

  ngOnInit() {
    this.set();
  
  }

  set() {
    this.results = this.searchAlgorithmService.resultSet;
  }

}
