import { Component,OnInit} from '@angular/core';
import{EmployeeService} from"./employee.service"

@Component({
selector:'employee-details',
template:`<h1>this is employee Details Component.</h1>
 <ul *ngFor="let employee of employees">
 <li >{{employee.id}} {{employee.name}} is {{employee.gender}}</li>
 </ul>

`,
styles:[`li{list-style-type:none}`]
})

export class employeeDetailsComponent implements OnInit{
   employees:any[];
constructor(private _employeeService:EmployeeService){}
        ngOnInit(){
this.employees=this._employeeService.getEmployee();
        }



}