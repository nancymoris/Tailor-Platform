import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditTailorProfileComponent } from './components/Tailor/edit-tailor-profile/edit-tailor-profile.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TailorInformationComponent } from './components/Tailor/tailor-information/tailor-information.component';
import { TailorAboutComponent } from './components/Tailor/tailor-about/tailor-about.component';
import { TailorGallaryComponent } from './components/Tailor/tailor-gallary/tailor-gallary.component';
import { TailorRateComponent } from './components/Tailor/tailor-rate/tailor-rate.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/home/header/header.component';
import { AboutTailorComponent } from './components/home/about-tailor/about-tailor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './components/landing/landing.component';
import { TailorRequestsComponent } from './components/Tailor/tailor-requests/tailor-requests.component';
import { TailorSingleRequestComponent } from './components/Tailor/tailor-single-request/tailor-single-request.component';
import { UcWidgetModule } from 'ngx-uploadcare-widget';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EditTailorProfileComponent,
    NavBarComponent,
    FooterComponent,
    TailorInformationComponent,
    TailorAboutComponent,
    TailorGallaryComponent,
    TailorRateComponent,
    HomeComponent,
    HeaderComponent,
    AboutTailorComponent,
    RegistrationComponent,
    LoginComponent,
    LandingComponent,
    TailorRequestsComponent,
    TailorSingleRequestComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    UcWidgetModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
