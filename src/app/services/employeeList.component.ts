import { Component,OnInit} from '@angular/core';
import{EmployeeService} from"./employee.service"

@Component({
selector:'employee-list',
template:`<h1>this is employee list Component.</h1>
 <ul *ngFor="let employee of employees">
 <li >{{employee.id}} {{employee.name}}</li>
 </ul>

`,
styles:[`li{list-style-type:none}`]
})

export class employeeListComponent implements OnInit{
   employees:any[];
constructor(private _employeeService:EmployeeService){}
        ngOnInit(){
this.employees=this._employeeService.getEmployee();
        }



}