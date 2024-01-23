import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProjectsRouterModule } from './projects.router';
import { ProjectsComponent } from './components/projects/projects.component';

@NgModule({
  imports: [ProjectsRouterModule, SharedModule],
  declarations: [ProjectsComponent],
})
export class ProjectsModule {}
