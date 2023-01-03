import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/common/department';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  department: Department;
  departments: Department[] = [];
  
  constructor(private departmentService: DepartmentService) { this.departments = []; this.department = new Department(); }

  ngOnInit() {
    this.listDepartments();
  }

  listDepartments() {
    this.departmentService.getDepartmentList().subscribe(
      data => {
        this.departments = data;
      }
    )
  }

}
