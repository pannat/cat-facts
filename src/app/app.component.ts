import { Component, OnInit } from '@angular/core';
import { CatFactsService } from './shared/services/cat-facts.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(private catFactsService: CatFactsService) {
  }

  ngOnInit(): void {

  }
}
