import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent {

  @Input() arrow = "visible" 
  @Input() next = "/about"
  @Input() previous = "/contact"

}
