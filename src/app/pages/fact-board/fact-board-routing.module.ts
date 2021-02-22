import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactBoardComponent } from './fact-board.component';
import {FactDetailComponent} from './fact-detail/fact-detail.component';

const routes: Routes = [
  {
    path: '',
    component: FactBoardComponent
  },
  {
    path: 'item/:id',
    component: FactDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FactBoardRoutingModule { }
