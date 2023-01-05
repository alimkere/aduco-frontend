import { Component, OnInit } from '@angular/core';
import { Employe } from 'src/app/common/employe';
import { EmployeService } from 'src/app/services/employe.service';


@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployesComponent implements OnInit {
  employes: Employe[] = [];
  employe: Employe = new Employe();
  departmentId: number = 0;
  createdEmploye: Employe;

  constructor(private employeService: EmployeService) {this.createdEmploye=new Employe();}

  ngOnInit(): void {
    this.listEmployes();
  }

  listEmployes() {
    this.employeService.getAllEmployes().subscribe(
      (      data: Employe[]) => this.employes = data
    );
  }

  createEmploye() {
    if (this.departmentId) {  // check if departmentId is defined
      this.employeService.createEmploye(this.departmentId, this.employe).subscribe(
        data => {
          this.createdEmploye = data;
          this.employe = new Employe();
          this.listEmployes();
        }
      );
    }
  }
  

  updateEmploye() {
    if (this.departmentId) {  // check if departmentId is defined
      this.employeService.updateEmploye(this.departmentId, this.employe.id, this.employe).subscribe(
        data => {
          this.employe = new Employe();
          this.listEmployes();
        }
      );
    }
  }
  

  deleteEmploye(id: number) {
    this.employeService.deleteEmploye(id).subscribe(
      data => {
        this.listEmployes();
      }
    );
  }

  patchEmploye(id: number) {
    this.employeService.patchEmploye(id, this.employe).subscribe(
      data => {
        this.employe = new Employe();
        this.listEmployes();
      }
    );
  }
}
