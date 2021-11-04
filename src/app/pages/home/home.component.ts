import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  displayTitle: string;
  number: number = 0;
  letterIndex: number = 0;
  lastIndex: boolean = false;
  title= ["SOFTWARE DEVELOPER", "WEB DEVELOPER", "DATA SCIENTIST", "FREELANCER"];

  constructor(){
    this.displayTitle = "|";
  }

  ngOnInit(){
    setInterval(() => {
      if(this.lastIndex){
        this.displayTitle = this.title[this.number].substr(0, this.letterIndex) + "|";
        this.letterIndex -= 1;
        if (this.letterIndex === -1){
          this.lastIndex = false;
          this.number = (this.number + 1) % 4;
        }
      }
      else{
        this.letterIndex += 1;
        this.displayTitle = this.title[this.number].substr(0, this.letterIndex) + "|";
        if(this.letterIndex === this.title[this.number].length){
          this.lastIndex = true;
        }
      }
    }, 500);
  };

}
