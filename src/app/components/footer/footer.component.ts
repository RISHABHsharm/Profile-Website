import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent{
  socialMedia = [
    {
      img: "../../assets/website_images/linkedIn.jpeg", 
      alt: "linkedIn", 
      link: "https://www.linkedin.com/in/rishabh-sharma-31081997/"
    },
    {
      img: "../../assets/website_images/github.png", 
      alt: "github", 
      link: "https://github.com/RISHABHsharm/"
    },
    {
      img: "../../assets/website_images/facebook.png", 
      alt: "facebook", 
      link: "https://www.facebook.com/RishabhSharma310897/"
    },
    {
      img: "../../assets/website_images/twitter.png", 
      alt: "twitter", 
      link: "https://twitter.com/rishabhsharmaaa#"
    },
    {
      img: "../../assets/website_images/instagram.png", 
      alt: "instagram", 
      link: "https://www.instagram.com/rishabhsharma3108/"
    },
  ]
}
