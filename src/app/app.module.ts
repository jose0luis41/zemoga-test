import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CandidateComponent } from './candidates/candidate/candidate.component';
import { PercentageComponent } from './candidates/shared/percentage/percentage.component';
import { CandidatesComponent } from './candidates/candidates.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { CandidateDetailsComponent } from './candidates/shared/candidate-details/candidate-details.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './banner/header/header.component';
import { FooterComponent } from './banner/footer/footer.component';
import { AdvertasingComponent } from './candidates/advertasing/advertasing.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CandidateTabletComponent } from './candidates/candidate-tablet/candidate-tablet.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {OverlayContainer}  from '@angular/cdk/overlay';


@NgModule({
  declarations: [
    AppComponent,
    CandidateComponent,
    PercentageComponent,
    CandidatesComponent,
    CandidateDetailsComponent,
    BannerComponent,
    HeaderComponent,
    FooterComponent,
    AdvertasingComponent,
    CandidateTabletComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule
  ],
  exports: [
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
