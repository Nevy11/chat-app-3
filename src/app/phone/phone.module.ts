import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { PhoneRoutingModule } from './phone-routing.module';
import { PhoneComponent } from './phone.component';
import { BgColorDirective } from './styles/bg-color.directive';
import { PLandingPageComponent } from './p-landing-page/p-landing-page.component';
import { HDirective } from './styles/h.directive';
import { MxDirective } from './styles/mx.directive';
import { MyDirective } from './styles/my.directive';
import { PyDirective } from './styles/py.directive';
import { PxDirective } from './styles/px.directive';
import { RowDirective } from './styles/row.directive';
import { ColDirective } from './styles/col.directive';
import { BtnDirective } from './styles/btn.directive';
import { ContainerDirective } from './styles/container.directive';
import { CenterDirective } from './styles/center.directive';
import { ClearfixDirective } from './styles/clearfix.directive';
import { TopBarComponent } from './p-landing-page/top-bar/top-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TopSettingsComponent } from './p-landing-page/top-bar/top-settings/top-settings.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { ContentComponent } from './p-landing-page/content/content.component';
import { PartAComponent } from './p-landing-page/content/part-a/part-a.component';
import { Image1AIComponent } from './p-landing-page/content/part-a/image-1-ai/image-1-ai.component';
import { UpperContentComponent } from './p-landing-page/content/part-a/upper-content/upper-content.component';
import { PartBComponent } from './p-landing-page/content/part-b/part-b.component';
import { BContentComponent } from './p-landing-page/content/part-b/b-content/b-content.component';
import { PartCComponent } from './p-landing-page/content/part-c/part-c.component';
import { UpperCComponent } from './p-landing-page/content/part-c/upper-c/upper-c.component';
import { CImage1Component } from './p-landing-page/content/part-c/c-image1/c-image1.component';
import { Cimage2Component } from './p-landing-page/content/part-c/cimage-2/cimage-2.component';
import { PartDComponent } from './p-landing-page/content/part-d/part-d.component';
import { Side1Component } from './p-landing-page/content/part-d/side1/side1.component';
import { Side2Component } from './p-landing-page/content/part-d/side2/side2.component';
import { PartEComponent } from './p-landing-page/content/part-e/part-e.component';
import { EContentComponent } from './p-landing-page/content/part-e/e-content/e-content.component';
import { EVideoComponent } from './p-landing-page/content/part-e/e-video/e-video.component';
import { PartFComponent } from './p-landing-page/content/part-f/part-f.component';
import { PartGComponent } from './p-landing-page/content/part-g/part-g.component';
import { PartHComponent } from './p-landing-page/content/part-h/part-h.component';
import { MatListModule } from '@angular/material/list';
import { ToLoginComponent } from './to-login/to-login.component';

@NgModule({
  declarations: [
    PhoneComponent,
    BgColorDirective,
    PLandingPageComponent,
    HDirective,
    MxDirective,
    MyDirective,
    PyDirective,
    PxDirective,
    RowDirective,
    ColDirective,
    BtnDirective,
    ContainerDirective,
    CenterDirective,
    ClearfixDirective,
    TopBarComponent,
    TopSettingsComponent,
    ContentComponent,
    PartAComponent,
    Image1AIComponent,
    UpperContentComponent,
    PartBComponent,
    BContentComponent,
    PartCComponent,
    UpperCComponent,
    CImage1Component,
    Cimage2Component,
    PartDComponent,
    Side1Component,
    Side2Component,
    PartEComponent,
    EContentComponent,
    EVideoComponent,
    PartFComponent,
    PartGComponent,
    PartHComponent,
    ToLoginComponent,
  ],
  imports: [
    CommonModule,
    PhoneRoutingModule,
    MatIconModule,
    MatButtonModule,
    CdkAccordionModule,
    NgOptimizedImage,
    MatListModule,
  ],
})
export class PhoneModule {}
