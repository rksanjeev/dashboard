import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatDividerModule} from "@angular/material/divider";
import {ArticlesComponent} from "../../modules/articles/articles.component";
import {MatCardModule} from "@angular/material/card";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    ArticlesComponent,

  ],
  imports: [
      CommonModule,
      RouterModule,
      SharedModule,
      MatSidenavModule,
      MatDividerModule,
    MatCardModule,
    FlexLayoutModule,

  ],
  providers: [],
  bootstrap: []
})
export class DefaultModule { }
