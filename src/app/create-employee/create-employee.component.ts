import { Router } from '@angular/router';
import { EmployeeService } from './../employee.service';
import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  isSubmitted = false;
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  newEmployee(): void {
    this.isSubmitted = false;
    this.employee = new Employee();
  }

  save = () => {
    this.employeeService.createEmployee(this.employee).subscribe(
      (data) => {
        console.log(data);
        this.employee = new Employee();
        this.gotoList();
      },
      (error) => console.log(error)
    );
  };

  onSubmit = () => {
    this.isSubmitted = true;
    this.save();
  };

  gotoList = () => {
    this.router.navigate(['/employees']);
  };
}
