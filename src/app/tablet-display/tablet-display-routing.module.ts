import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabletDisplayComponent } from './tablet-display.component';
import { SignUpContentComponent } from './landing-page-tablet/top-bar-tablet/top-settings-tablet/top-bar-content/sign-up-content/sign-up-content.component';
import { OfficialWebsiteContentComponent } from './landing-page-tablet/top-bar-tablet/top-settings-tablet/top-bar-content/official-website-content/official-website-content.component';
import { LibraryContentComponent } from './landing-page-tablet/top-bar-tablet/top-settings-tablet/top-bar-content/library-content/library-content.component';
import { HelpCenterContentComponent } from './landing-page-tablet/top-bar-tablet/top-settings-tablet/top-bar-content/help-center-content/help-center-content.component';
import { LoginContentComponent } from './landing-page-tablet/top-bar-tablet/top-settings-tablet/top-bar-content/login-content/login-content.component';

const routes: Routes = [
  { path: '', component: TabletDisplayComponent },
  { path: 'sign up', component: SignUpContentComponent },
  { path: 'login', component: LoginContentComponent },
  { path: 'Official Website', component: OfficialWebsiteContentComponent },
  { path: 'Library', component: LibraryContentComponent },
  { path: 'Help Center', component: HelpCenterContentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabletDisplayRoutingModule {}
