import { Component, DoCheck } from '@angular/core';
import { NavModalService } from 'src/app/services/nav-modal.service';
import { ThemeService } from 'src/app/services/theme/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements DoCheck{

  darkMode: boolean = this.themeService.isDarkTheme();
  currentRoute: string = this.toggle.currentRoute;
  modeImages= [
    {img: "../../../assets/website_images/sun.png", mode: 0}, 
    {img: "../../../assets/website_images/moon.png", mode: 1}
  ];
  navItems= [
    {name: "Home",  link: "/"},
    {name: "About Me",  link: "/about"},
    {name: "Portfolio",  link: "/portfolio"},
    {name: "Skills",  link: "/skills"},
    {name: "Contact", link: "/contact"},
  ];

  constructor( 
    private toggle: NavModalService,
    private themeService: ThemeService 
  ) {}

  ngDoCheck(){
    this.darkMode = this.themeService.isDarkTheme();
    this.currentRoute = this.toggle.currentRoute;
  }

  toggleModal(){
    this.toggle.toggleModal();
  }

  toggleTheme(){
    if(this.darkMode){
      this.themeService.setLightTheme();
    }else{
      this.themeService.setDarkTheme();
    }
  }

}
