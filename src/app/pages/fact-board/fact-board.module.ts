import { NgModule } from '@angular/core';
import { FactDetailComponent } from './fact-detail/fact-detail.component';
import { FactBoardComponent } from './fact-board.component';
import { FactBoardRoutingModule } from './fact-board-routing.module';
import { CommonModule } from '@angular/common';
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
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

@NgModule({
  imports: [
    FactBoardRoutingModule,
    CommonModule,
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
    NzAvatarModule
  ],
  exports: [
    FactBoardComponent
  ],
  declarations: [
    FactBoardComponent,
    FactDetailComponent
  ]
})

export class FactBoardModule {
}
