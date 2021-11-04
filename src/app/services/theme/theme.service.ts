import { Injectable } from '@angular/core';
import { Theme, light, dark } from "./theme";

@Injectable()
export class ThemeService {
  currentTime: Date;
  private active: Theme;
  private availableThemes: Theme[] = [light, dark];

  constructor(){
    this.currentTime = new Date();
    if(this.currentTime.getHours() > 5 && this.currentTime.getHours() < 18){
      this.active = light;
    }else{
      this.active = dark;
    }
  }

  getAvailableThemes(): Theme[] {
    return this.availableThemes;
  }

  getActiveTheme(): Theme {
    return this.active;
  }

  isDarkTheme(): boolean {
    return this.active.name === dark.name;
  }

  setDarkTheme(): void {
    this.setActiveTheme(dark);
  }

  setLightTheme(): void {
    this.setActiveTheme(light);
  }

  setActiveTheme(theme: Theme): void {
    this.active = theme;

    Object.keys(this.active.properties).forEach(property => {
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });
  }
}
