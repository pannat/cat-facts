import { Component, OnInit } from '@angular/core';
import { CatFactsService } from '../../../shared/services/cat-facts.service';
import { ActivatedRoute } from '@angular/router';
import {Fact} from '../../../shared/types/Fact';

@Component({
  selector: 'app-fact-detail',
  templateUrl: './fact-detail.component.html',
  styleUrls: ['./fact-detail.component.scss']
})
export class FactDetailComponent implements OnInit {
  public isLoading = false;
  public fact: Fact | undefined;
  private id: string | undefined;

  constructor(private catFactsService: CatFactsService, private route: ActivatedRoute) {
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    if (this.id) {
      this.isLoading = true;
      this.catFactsService.getFact(this.id)
        .subscribe((result: Fact) => {
          this.fact = result;
          this.isLoading = false;
          console.log(result);
        });
    } else {
      throw Error('Parameter ID is undefined');
    }
  }
}
