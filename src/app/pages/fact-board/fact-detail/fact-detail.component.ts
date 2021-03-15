import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CatFactsService} from '../../../shared/services/cat-facts.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Fact} from '../../../shared/types/Fact';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {User} from '../../../shared/types/User';

@Component({
  selector: 'app-fact-detail',
  templateUrl: './fact-detail.component.html',
  styleUrls: ['./fact-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FactDetailComponent {
  public format = 'dd/MM/yyyy hh:mm';
  readonly fact$: Observable<Fact<User>> = this.route.params.pipe(
      switchMap((params) => this.catFactsService.getFact(params['id']))
  );

  constructor(
    private readonly catFactsService: CatFactsService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  public onBack(): void {
    this.router.navigate(['/pages/board']);
  }
}
