import {NgModule} from '@angular/core';
import { FactBoardComponent } from './fact-board/fact-board.component';
import { FactDetailComponent } from './fact-board/fact-detail/fact-detail.component';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    PagesRoutingModule,
    NzLayoutModule,
    NzTypographyModule,
    NzPageHeaderModule,
    NzMenuModule,
    NzCardModule,
    NzGridModule,
    NzDividerModule,
    NzPaginationModule,
    NzSpinModule,
    NzButtonModule,
    CommonModule
  ],
  declarations: [
    PagesComponent,
    FactBoardComponent,
    FactDetailComponent
  ]
})

export class PagesModule {
}
