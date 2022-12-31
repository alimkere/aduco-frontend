import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  courses = [
    {'id':1,'name':'Analyse Economique','description':'It is an approach that uses models and theories to understand and explain economic phenomena.','image':'../../assets/AEC.jpg','link':'https://wwww.google.com'},
    {'id':2,'name':'Java','description':'Java technology defines both an object-oriented programming language and a computing platform.','image':'../../assets/java-oracle.png','link':''},
    {'id':3,'name':'AWS','description':'Amazon Web Services (AWS) is the world most comprehensive and widely adopted cloud platform.','image':'../../assets/aws.png','link':''},
    {'id':4,'name':'IA','description':'Artificial intelligence (AI) is a branch of computing dedicated to designing machines that can mimic the human brain.','image':'../../assets/ia.jpg','link':''},
    {'id':5,'name':'Python','description':'Python is an open-source, cross-platform, object-oriented programming language. ','image':'../../assets/python.png','link':''},
    {'id':6,'name':'C','description':'C is an imperative programming language designed for system programming.','image':'../../assets/c.png','link':''},
    {'id':7,'name':'C++','description':'C++ is a programming language with many paradigms: object-oriented, procedural or generic.','image':'../../assets/cpp.png','link':''},
    {'id':8,'name':'PHP','description':'PHP, for Hypertext Preprocessor, is a scripting language, used mainly for the design of dynamic websites.','image':'../../assets/php.jpeg','link':''},
  ]


}
