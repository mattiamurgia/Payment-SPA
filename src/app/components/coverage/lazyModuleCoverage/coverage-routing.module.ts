import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoverageComponent } from '../coverage.component';

const routes: Routes = [
  {
    path: '',
    component: CoverageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoverageRoutingModule {}
