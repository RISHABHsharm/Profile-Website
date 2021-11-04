import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent{

  skillLogo = {
    frontEnd: [
      "../../assets/website_images/javascript.png",
      "../../assets/website_images/react.png",
      "../../assets/website_images/angular.png",
      "../../assets/website_images/react-native.png",
      "../../assets/website_images/flutter.png"
    ],
    backEnd: [
      "../../assets/website_images/nodeJs.png",
      "../../assets/website_images/django.png",
      "../../assets/website_images/mongoDB.png",
      "../../assets/website_images/mysql.png",
      "../../assets/website_images/firebase.png"
    ],
    machineLearning: [
      "../../assets/website_images/python.jpg",
      "../../assets/website_images/tensorflow.png",
      "../../assets/website_images/pytorch.png",
      "../../assets/website_images/scikit-learn.png",
      "../../assets/website_images/keras.jpeg"
    ]
  }
}
