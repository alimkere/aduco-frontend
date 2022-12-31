import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

    cours = [
      {'id':1,'name':'Analyse Economique','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../assets/AEC.jpg'},
      {'id':2,'name':'Java','description':'La technologie Java définit à la fois un langage de programmation orienté objet et une plateforme informatique.','image':'../../assets/java-oracle.png'},
      {'id':3,'name':'AWS','description':'Amazon Web Services (AWS) est la plateforme cloud la plus complète et la plus largement adoptée au monde.','image':'../../assets/aws.png'},
      {'id':4,'name':'IA','description':'L’intelligence artificielle (IA) est une branche de l’informatique dédiée à la conception de machines capables d’imiter le cerveau humain.','image':'../../assets/ia.jpg'},
      {'id':5,'name':'Python','description':'Le langage Python est un langage de programmation open source multi-plateformes et orienté objet. ','image':'../../assets/python.png'},
      {'id':6,'name':'C','description':'C est un langage de programmation impératif conçu pour la programmation système.','image':'../../assets/c.png'},
      {'id':7,'name':'C++','description':'Le C++ est un langage de programmation aux nombreux paradigmes : orienté objet, procédural ou générique.','image':'../../assets/cpp.png'},
      {'id':8,'name':'PHP','description':'Le PHP, pour Hypertext Preprocessor, est un langage de script, utilisé principalement pour la conception de sites web dynamiques.','image':'../../assets/php.jpeg'},
    ]
}
