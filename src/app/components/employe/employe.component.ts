import { Component, OnInit } from '@angular/core';
import { Employe } from 'src/app/common/employe';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  employe: Employe;
  employes: Employe[] = [];
  
  constructor(private employeService: EmployeService) { this.employes = []; this.employe = new Employe(); }

  ngOnInit() {
    this.listEmployes();
  }

  listEmployes() {
    this.employeService.getEmployeList().subscribe(
      data => {
        this.employes = data;
      }
    )
  }

}
