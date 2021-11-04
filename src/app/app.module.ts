import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ScreenComponent } from './components/screen/screen.component';
import { ThemeService } from './services/theme/theme.service';
import { ButtonComponent } from './components/button/button.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { NavModalComponent } from './components/nav-modal/nav-modal.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutMeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    PortfolioComponent,
    SkillsComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    ScreenComponent,
    ButtonComponent,
    ContactFormComponent,
    NavModalComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
