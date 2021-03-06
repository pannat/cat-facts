import { Component, OnInit, OnDestroy } from '@angular/core';
import { CatFactsService } from '../../../shared/services/cat-facts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Fact } from '../../../shared/types/Fact';
import { User } from '../../../shared/types/User';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-fact-detail',
  templateUrl: './fact-detail.component.html',
  styleUrls: ['./fact-detail.component.scss']
})
export class FactDetailComponent implements OnInit, OnDestroy {
  public isLoading = false;
  private id: string | undefined;
  public fact: Fact<User> | undefined;
  public format = 'dd/MM/yyyy hh:mm';
  private subscriptions: Subscription = new Subscription;

  constructor(private catFactsService: CatFactsService, private route: ActivatedRoute, private router: Router) {
    const routeStream = this.route.params
      .subscribe((result) => {
        this.id = result.id;
      })
    this.subscriptions.add(routeStream);
  }

  ngOnInit(): void {
    if (this.id) {
      this.isLoading = true;

      const factRequest = this.catFactsService.getFact(this.id)
        .subscribe((result: Fact<User>) => {
          this.fact = result;
          this.isLoading = false;
          console.log(result);
        });
      this.subscriptions.add(factRequest);
    } else {
      throw Error('Parameter Id is undefined');
    }
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  public onBack(): void {
    this.router.navigate(['/pages/board']);
  }
}
