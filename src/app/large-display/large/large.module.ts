import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { LargeRoutingModule } from './large-routing.module';
import { LargeComponent } from './large.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MatIconModule } from '@angular/material/icon';
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
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatButtonModule } from '@angular/material/button';
import { TopBarLargeComponent } from './landing-page/top-bar-large/top-bar-large.component';
import { ContentLargeComponent } from './landing-page/content-large/content-large.component';
import { TopSettingsLargeComponent } from './landing-page/top-bar-large/top-settings-large/top-settings-large.component';
import { PartALargeComponent } from './landing-page/content-large/part-a-large/part-a-large.component';
import { UpperContentLargeComponent } from './landing-page/content-large/part-a-large/upper-content-large/upper-content-large.component';
import { Image1AiLargeComponent } from './landing-page/content-large/part-a-large/image-1-ai-large/image-1-ai-large.component';
import { PartBLargeComponent } from './landing-page/content-large/part-b-large/part-b-large.component';
import { BContentLargeComponent } from './landing-page/content-large/part-b-large/b-content-large/b-content-large.component';
import { PartCLargeComponent } from './landing-page/content-large/part-c-large/part-c-large.component';
import { CImage1LargeComponent } from './landing-page/content-large/part-c-large/c-image1-large/c-image1-large.component';
import { Cimage2LargeComponent } from './landing-page/content-large/part-c-large/cimage-2-large/cimage-2-large.component';
import { UpperCLargeComponent } from './landing-page/content-large/part-c-large/upper-c-large/upper-c-large.component';
import { PartDLargeComponent } from './landing-page/content-large/part-d-large/part-d-large.component';
import { Side1LargeComponent } from './landing-page/content-large/part-d-large/side1-large/side1-large.component';
import { Side2LargeComponent } from './landing-page/content-large/part-d-large/side2-large/side2-large.component';
import { PartELargeComponent } from './landing-page/content-large/part-e-large/part-e-large.component';
import { EContentLargeComponent } from './landing-page/content-large/part-e-large/e-content-large/e-content-large.component';
import { EVideoLargeComponent } from './landing-page/content-large/part-e-large/e-video-large/e-video-large.component';
import { PartFLargeComponent } from './landing-page/content-large/part-f-large/part-f-large.component';
import { PartGLargeComponent } from './landing-page/content-large/part-g-large/part-g-large.component';
import { PartHLargeComponent } from './landing-page/content-large/part-h-large/part-h-large.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    LargeComponent,
    LandingPageComponent,
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
    TopBarLargeComponent,
    ContentLargeComponent,
    TopSettingsLargeComponent,
    PartALargeComponent,
    UpperContentLargeComponent,
    Image1AiLargeComponent,
    PartBLargeComponent,
    BContentLargeComponent,
    PartCLargeComponent,
    CImage1LargeComponent,
    Cimage2LargeComponent,
    UpperCLargeComponent,
    PartDLargeComponent,
    Side1LargeComponent,
    Side2LargeComponent,
    PartELargeComponent,
    EContentLargeComponent,
    EVideoLargeComponent,
    PartFLargeComponent,
    PartGLargeComponent,
    PartHLargeComponent,
  ],
  imports: [
    CommonModule,
    LargeRoutingModule,
    MatIconModule,
    CdkAccordionModule,
    MatButtonModule,
    NgOptimizedImage,
    MatListModule,
  ],
})
export class LargeModule {}
