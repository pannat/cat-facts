import { Component, OnInit } from '@angular/core';
import { CatFactsService } from './shared/cat-facts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-cat-facts';

  constructor(private catFactsService: CatFactsService) {
  }

  ngOnInit(): void {
    this.catFactsService
      .getFacts({animal_type: 'cat', amount: '30'})
      .subscribe((result) => {
        console.log(result);
      }, error => {
        throw new Error(error.message);
      });

    this.catFactsService
      .getUser()
      .subscribe((result) => {
        console.log(result);
      }, error => {
        throw new Error(error.message);
      });
  }

}
