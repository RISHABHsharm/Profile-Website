import { Component, DoCheck } from '@angular/core';
import { NavModalService } from 'src/app/services/nav-modal.service';
import { ThemeService } from 'src/app/services/theme/theme.service';

@Component({
  selector: 'app-nav-modal',
  templateUrl: './nav-modal.component.html',
  styleUrls: ['./nav-modal.component.css']
})
export class NavModalComponent implements DoCheck{

  show: boolean = false;
  firstRender: boolean = true;
  darkMode: boolean = this.themeService.isDarkTheme();
  currentRoute: string = this.toggle.currentRoute;

  constructor(
    private themeService: ThemeService,
    private toggle: NavModalService
  ){
    setTimeout(() => this.firstRender = false, 2000);
  }

  ngDoCheck(){
    this.show = this.toggle.showModal;
    this.darkMode = this.themeService.isDarkTheme();
    this.currentRoute = this.toggle.currentRoute;
  }

  navItems= [
    {name: "Home", link: "/"},
    {name: "About Me",  link: "/about"},
    {name: "Portfolio",  link: "/portfolio"},
    {name: "Skills",  link: "/skills"},
    {name: "Contact", link: "/contact"},
  ];

  toggleModal(){
    this.toggle.toggleModal();
  }

  toggleTheme(mode: number){
    if(mode === 0){
      this.themeService.setLightTheme();
    }else{
      this.themeService.setDarkTheme();
    }
    this.toggleModal();
  }

}
