import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactBoardComponent } from './fact-board.component';

const routes: Routes = [
  {
    path: '',
    component: FactBoardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FactBoardRoutingModule { }
