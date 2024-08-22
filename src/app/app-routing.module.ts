import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'testing',
    loadChildren: () =>
      import('./testing/testing.module').then((m) => m.TestingModule),
  },
  {
    path: 'phone',
    loadChildren: () =>
      import('./phone/phone.module').then((m) => m.PhoneModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'large',
    loadChildren: () =>
      import('./large-display/large/large.module').then((m) => m.LargeModule),
  },
  { path: 'tablet', loadChildren: () => import('./tablet-display/tablet-display.module').then(m => m.TabletDisplayModule) },
  {
    path: '**',
    loadChildren: () =>
      import('./not-found/not-found.module').then((m) => m.NotFoundModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
