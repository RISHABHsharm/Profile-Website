import { Component, DoCheck } from '@angular/core';
import { Theme } from './services/theme/theme';
import { ThemeService } from './services/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
  
  activeTheme: Theme = this.themeService.getActiveTheme();
  
  constructor(private themeService: ThemeService) {
    let styles = [
      {
        name: "--toggle-background-primary",
        value: this.activeTheme.properties["--toggle-background-primary"]
      },
      {
        name: "--toggle-background-secondary",
        value: this.activeTheme.properties["--toggle-background-secondary"]
      },
      {
        name: "--toggle-background-tertiary",
        value: this.activeTheme.properties["--toggle-background-tertiary"]
      },
      {
        name: "--toggle-background",
        value: this.activeTheme.properties["--toggle-background"]
      },
      {
        name: "--button",
        value: this.activeTheme.properties["--button"]
      },
      {
        name: "--button-border",
        value: this.activeTheme.properties["--button-border"]
      },
      {
        name: "--text-default",
        value: this.activeTheme.properties["--text-default"]
      },
      {
        name: "--text-primary",
        value: this.activeTheme.properties["--text-primary"]
      },
      {
        name: "--logo-background",
        value: this.activeTheme.properties["--logo-background"]
      },
      {
        name: "--navbar-footer-area",
        value: this.activeTheme.properties["--navbar-footer-area"]
      },
      {
        name: "--glass",
        value: this.activeTheme.properties["--glass"]
      },
      {
        name: "--glass-border",
        value: this.activeTheme.properties["--glass-border"]
      },
      {
        name: "--background-shadow",
        value: this.activeTheme.properties["--background-shadow"]
      },
      {
        name: "--router-arrow",
        value: this.activeTheme.properties["--router-arrow"]
      },
      {
        name: "--form-error",
        value: this.activeTheme.properties["--form-error"]
      }
    ];

    styles.forEach(data => {
      document.documentElement.style.setProperty(`${data.name}`, data.value);
    });
  }

  ngDoCheck(){
    this.activeTheme = this.themeService.getActiveTheme();
  }

}
