import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TabletDisplayRoutingModule } from './tablet-display-routing.module';
import { TabletDisplayComponent } from './tablet-display.component';
import { LandingPageTabletComponent } from './landing-page-tablet/landing-page-tablet.component';
import { BgColorDirective } from './styles/bg-color.directive';
import { BtnDirective } from './styles/btn.directive';
import { CenterDirective } from './styles/center.directive';
import { ClearfixDirective } from './styles/clearfix.directive';
import { ColDirective } from './styles/col.directive';
import { HDirective } from './styles/h.directive';
import { MxDirective } from './styles/mx.directive';
import { MyDirective } from './styles/my.directive';
import { PxDirective } from './styles/px.directive';
import { PyDirective } from './styles/py.directive';
import { RowDirective } from './styles/row.directive';
import { ContentTabletComponent } from './landing-page-tablet/content-tablet/content-tablet.component';
import { TopBarTabletComponent } from './landing-page-tablet/top-bar-tablet/top-bar-tablet.component';
import { TopSettingsTabletComponent } from './landing-page-tablet/top-bar-tablet/top-settings-tablet/top-settings-tablet.component';
import { MatIconModule } from '@angular/material/icon';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { PartATabletComponent } from './landing-page-tablet/content-tablet/part-a-tablet/part-a-tablet.component';
import { PartBTabletComponent } from './landing-page-tablet/content-tablet/part-b-tablet/part-b-tablet.component';
import { PartCTabletComponent } from './landing-page-tablet/content-tablet/part-c-tablet/part-c-tablet.component';
import { PartDTabletComponent } from './landing-page-tablet/content-tablet/part-d-tablet/part-d-tablet.component';
import { PartETabletComponent } from './landing-page-tablet/content-tablet/part-e-tablet/part-e-tablet.component';
import { PartFTabletComponent } from './landing-page-tablet/content-tablet/part-f-tablet/part-f-tablet.component';
import { PartGTabletComponent } from './landing-page-tablet/content-tablet/part-g-tablet/part-g-tablet.component';
import { PartHTabletComponent } from './landing-page-tablet/content-tablet/part-h-tablet/part-h-tablet.component';
import { UpperContentTabletComponent } from './landing-page-tablet/content-tablet/part-a-tablet/upper-content-tablet/upper-content-tablet.component';
import { Image1AiTabletComponent } from './landing-page-tablet/content-tablet/part-a-tablet/image-1-ai-tablet/image-1-ai-tablet.component';
import { BContentTabletComponent } from './landing-page-tablet/content-tablet/part-b-tablet/b-content-tablet/b-content-tablet.component';
import { CImage1TabletComponent } from './landing-page-tablet/content-tablet/part-c-tablet/c-image1-tablet/c-image1-tablet.component';
import { Cimage2TabletComponent } from './landing-page-tablet/content-tablet/part-c-tablet/cimage-2-tablet/cimage-2-tablet.component';
import { UpperCTabletComponent } from './landing-page-tablet/content-tablet/part-c-tablet/upper-c-tablet/upper-c-tablet.component';
import { Side1TabletComponent } from './landing-page-tablet/content-tablet/part-d-tablet/side1-tablet/side1-tablet.component';
import { Side2TabletComponent } from './landing-page-tablet/content-tablet/part-d-tablet/side2-tablet/side2-tablet.component';
import { EContentTabletComponent } from './landing-page-tablet/content-tablet/part-e-tablet/e-content-tablet/e-content-tablet.component';
import { EVideoTabletComponent } from './landing-page-tablet/content-tablet/part-e-tablet/e-video-tablet/e-video-tablet.component';
import { TopBarContentComponent } from './landing-page-tablet/top-bar-tablet/top-settings-tablet/top-bar-content/top-bar-content.component';
import { HelpCenterContentComponent } from './landing-page-tablet/top-bar-tablet/top-settings-tablet/top-bar-content/help-center-content/help-center-content.component';
import { LibraryContentComponent } from './landing-page-tablet/top-bar-tablet/top-settings-tablet/top-bar-content/library-content/library-content.component';
import { LoginContentComponent } from './landing-page-tablet/top-bar-tablet/top-settings-tablet/top-bar-content/login-content/login-content.component';
import { OfficialWebsiteContentComponent } from './landing-page-tablet/top-bar-tablet/top-settings-tablet/top-bar-content/official-website-content/official-website-content.component';
import { SignUpContentComponent } from './landing-page-tablet/top-bar-tablet/top-settings-tablet/top-bar-content/sign-up-content/sign-up-content.component';
import { LoginFormComponent } from './landing-page-tablet/top-bar-tablet/top-settings-tablet/top-bar-content/login-content/login-form/login-form.component';
import { SignUpFormComponent } from './landing-page-tablet/top-bar-tablet/top-settings-tablet/top-bar-content/sign-up-content/sign-up-form/sign-up-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatWidgetComponent } from './landing-page-tablet/top-bar-tablet/top-settings-tablet/top-bar-content/official-website-content/chat-widget/chat-widget.component';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    TabletDisplayComponent,
    LandingPageTabletComponent,
    BgColorDirective,
    BtnDirective,
    CenterDirective,
    ClearfixDirective,
    ColDirective,
    HDirective,
    MxDirective,
    MyDirective,
    PxDirective,
    PyDirective,
    RowDirective,
    ContentTabletComponent,
    TopBarTabletComponent,
    TopSettingsTabletComponent,
    PartATabletComponent,
    PartBTabletComponent,
    PartCTabletComponent,
    PartDTabletComponent,
    PartETabletComponent,
    PartFTabletComponent,
    PartGTabletComponent,
    PartHTabletComponent,
    UpperContentTabletComponent,
    Image1AiTabletComponent,
    BContentTabletComponent,
    CImage1TabletComponent,
    Cimage2TabletComponent,
    UpperCTabletComponent,
    Side1TabletComponent,
    Side2TabletComponent,
    EContentTabletComponent,
    EVideoTabletComponent,
    TopBarContentComponent,
    HelpCenterContentComponent,
    LibraryContentComponent,
    LoginContentComponent,
    OfficialWebsiteContentComponent,
    SignUpContentComponent,
    LoginFormComponent,
    SignUpFormComponent,
    ChatWidgetComponent,
  ],
  imports: [
    CommonModule,
    TabletDisplayRoutingModule,
    MatIconModule,
    MatIconModule,
    CdkAccordionModule,
    MatButtonModule,
    NgOptimizedImage,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatExpansionModule,
    MatCardModule,
    MatPaginatorModule,
    MatSelectModule,
  ],
})
export class TabletDisplayModule {}
