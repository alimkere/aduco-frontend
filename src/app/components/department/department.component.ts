import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';
import { catchError, tap } from 'rxjs/operators';
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
  editingDepartment: boolean = false;
  
  constructor(private departmentService: DepartmentService) { this.departments = []; this.department = new Department(); }

  ngOnInit() {
    // Call the listDepartments method to get the list of departments
    this.listDepartments();
  
    // Subscribe to the createDepartment method to create a new department
    this.departmentService.createDepartment(this.department).subscribe(
      data => {
        console.log(data);
        this.department = new Department();  // reset the department object
        this.listDepartments();
      }
    );
  
    // Subscribe to the deleteDepartment method to delete an existing department
    this.departmentService.deleteDepartment(this.department.id).subscribe(
      data => {
        console.log(data);
        this.listDepartments();
      }
    );
  }
  
  listDepartments() {
    this.departmentService.getDepartmentList().subscribe(
      data => {
        this.departments = data;
      }
    );
  }  

  createDepartment() {
    this.departmentService.createDepartment(this.department).subscribe(
      data => {
        console.log(data);
        this.department = new Department();  // reset the department object
        this.listDepartments();
      }
    );
  }
  
  editDepartment(department: Department) {
    // Set the editingDepartment flag to true and copy the department data to the department object
    this.editingDepartment = true;
    Object.assign(this.department, department);
  }

  updateDepartment(department: Department) {
    this.departmentService.updateDepartment(department.id, department).subscribe(
      data => {
        console.log(data);
        this.listDepartments();
        this.cancelEdit();  // reset the editingDepartment flag and the department object
      }
    );
  }
  
  
  deleteDepartment(department: Department) {
    this.departmentService.deleteDepartment(department.id).subscribe(
      data => {
        console.log(data);
        this.listDepartments();
      }
    );
  }

  cancelEdit() {
    // Set the editingDepartment flag to false and reset the department object
    this.editingDepartment = false;
    this.department = new Department();
  }
  
}
