import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  portfolio = [
    {
      title: "Online Book Store Using MERN Stack",
      content: "I have created a book store website using React for the front-end and node.js and mongoDB for the backend. It also has a payment and recommendation system.",
      buttonContent: "View Code",
      link: "/portfolio",
      hover: false
    },
    {
      title: "Cooking App using React Native",
      content: "I have created a cooking app  which is a cross platform app using React Native. It also has fiter system which filters meals according to people’s food   choices and needs.",
      buttonContent: "View Code",
      link: "/portfolio",
      hover: false
    },
    {
      title: "Great Places App Using Flutter",
      content: "I have created a great places app which is a cross platform app using flutter. It uses mobile device features to capture and store beautiful places in your surrounding.",
      buttonContent: "View Code",
      link: "/portfolio",
      hover: false
    },
    {
      title: "Social Media Website Using MEAN Stack",
      content: "I have created a clone of  social media website using Angular for the front-end and node.js and mongoDB for the backend.",
      buttonContent: "View Code",
      link: "/portfolio",
      hover: false
    },
    {
      title: "Shopping App Using React Native",
      content: "I have created a cross platform shopping app  using React Native for the front-end and firebase for the backend.",
      buttonContent: "View Code",
      link: "/portfolio",
      hover: false
    },
  ]

}
