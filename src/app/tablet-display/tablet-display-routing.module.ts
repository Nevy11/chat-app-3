import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabletDisplayComponent } from './tablet-display.component';

const routes: Routes = [{ path: '', component: TabletDisplayComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabletDisplayRoutingModule { }
