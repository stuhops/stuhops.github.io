import { NgModule } from '@angular/core';
import { HomePageComponent } from './components/home-page/home-page.component';
import { BannerImageComponent } from './components/banner-image/banner-image.component';
import { HomePageRouterModule } from './home-page.router';
import { SharedModule } from '../shared/shared.module';
import { SingleImageStatementComponent } from './components/single-image-statement/single-image-statement.component';
import { SkillListComponent } from './components/skill-list/skill-list.component';

@NgModule({
  declarations: [
    HomePageComponent,
    BannerImageComponent,
    SingleImageStatementComponent,
    SkillListComponent,
  ],
  imports: [HomePageRouterModule, SharedModule],
})
export class HomePageModule {}
