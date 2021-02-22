import { Component, OnInit } from '@angular/core';
import { CatFactsService } from '../../../shared/services/cat-facts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Fact } from '../../../shared/types/Fact';
import { User } from '../../../shared/types/User';

@Component({
  selector: 'app-fact-detail',
  templateUrl: './fact-detail.component.html',
  styleUrls: ['./fact-detail.component.scss']
})
export class FactDetailComponent implements OnInit {
  public isLoading = false;
  private id: string | undefined;
  public fact: Fact<User> | undefined;
  public format = 'dd/MM/yyyy hh:mm';

  constructor(private catFactsService: CatFactsService, private route: ActivatedRoute, private router: Router) {
    this.route.params
      .subscribe((result) => {
        this.id = result.id;
      });
  }

  ngOnInit(): void {
    if (this.id) {
      this.isLoading = true;
      this.catFactsService.getFact(this.id)
        .subscribe((result: Fact<User>) => {
          this.fact = result;
          this.isLoading = false;
        });
    } else {
      throw Error('Parameter Id is undefined');
    }
  }

  public onBack(): void {
    this.router.navigate(['/pages/board']);
  }
}
