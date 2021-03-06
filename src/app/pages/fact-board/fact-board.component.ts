import { Component, OnInit, OnDestroy } from '@angular/core';
import { CatFactsService } from '../../shared/services/cat-facts.service';
import { Fact } from '../../shared/types/Fact';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

const AMOUNT = '200';
const TYPE = 'cat';

@Component({
  selector: 'app-fact-board',
  templateUrl: './fact-board.component.html',
  styleUrls: ['./fact-board.component.scss']
})
export class FactBoardComponent implements OnInit, OnDestroy {
  public isLoading = false;
  public facts: Array<Fact<string>> = [];
  public factsForCurrentPage: Array<Fact<string>> = [];
  public format = 'dd/MM/yyyy hh:mm';
  public pagination = {
    currentPage: 1,
    pageSize: 10,
    pageSizeOptions: [10, 20, 40],
    max: AMOUNT
  };
  private subscriptions: Subscription = new Subscription;

  constructor(private catFactsService: CatFactsService, private router: Router) { }

  ngOnInit(): void {
    this.isLoading = true;

    const catFactsSubscription = this.catFactsService
      .getFacts({animal_type: TYPE, amount: AMOUNT})
      .subscribe((result: Array<Fact<string>>) => {
        this.facts = result.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
        this.factsForCurrentPage = this.getFactsForCurrentPage();
        this.isLoading = false;
      }, error => {
        throw new Error(error.message);
      });

    this.subscriptions.add(catFactsSubscription);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  public onFactClick(fact: Fact<string>): void {
    this.router.navigate([`/pages/board/item/${fact._id}`]);
  }

  public onPageIndexChange(index: number): void {
    this.pagination.currentPage = index;
    this.factsForCurrentPage = this.getFactsForCurrentPage();
  }

  public onPageSizeChange(pageSize: number): void {
    this.pagination.currentPage = 1;
    this.pagination.pageSize = pageSize;
    this.factsForCurrentPage = this.getFactsForCurrentPage();
  }

  private getFactsForCurrentPage(): Array<Fact<string>> {
    const startPosition = (this.pagination.currentPage - 1) * this.pagination.pageSize;
    const endPosition = this.pagination.currentPage * this.pagination.pageSize;
    return this.facts.slice(startPosition, endPosition);
  }
}
