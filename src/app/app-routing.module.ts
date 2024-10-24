import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpContentComponent } from './tablet-display/landing-page-tablet/top-bar-tablet/top-settings-tablet/top-bar-content/sign-up-content/sign-up-content.component';
import { LoginContentComponent } from './tablet-display/landing-page-tablet/top-bar-tablet/top-settings-tablet/top-bar-content/login-content/login-content.component';
import { OfficialWebsiteContentComponent } from './tablet-display/landing-page-tablet/top-bar-tablet/top-settings-tablet/top-bar-content/official-website-content/official-website-content.component';
import { LibraryContentComponent } from './tablet-display/landing-page-tablet/top-bar-tablet/top-settings-tablet/top-bar-content/library-content/library-content.component';
import { HelpCenterContentComponent } from './tablet-display/landing-page-tablet/top-bar-tablet/top-settings-tablet/top-bar-content/help-center-content/help-center-content.component';

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
    path: 'large',
    loadChildren: () =>
      import('./large-display/large/large.module').then((m) => m.LargeModule),
  },
  {
    path: 'tablet',
    loadChildren: () =>
      import('./tablet-display/tablet-display.module').then(
        (m) => m.TabletDisplayModule
      ),
  },
  { path: 'sign up', component: SignUpContentComponent },
  { path: 'login', component: LoginContentComponent },
  { path: 'Official Website', component: OfficialWebsiteContentComponent },
  { path: 'Library', component: LibraryContentComponent },
  { path: 'Help Center', component: HelpCenterContentComponent },
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
