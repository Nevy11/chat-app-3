import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LargeComponent } from './large.component';

const routes: Routes = [{ path: '', component: LargeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LargeRoutingModule { }
