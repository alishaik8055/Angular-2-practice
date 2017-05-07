import { Component} from '@angular/core';
import{EmployeeService} from"./services/employee.service";
import{RouterModule,Router} from "@angular/router";

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>

  <h5>Hi this is app component </h5>
  
  <nav>
 <a routerLink="/weather">weatherComponent</a>
 <a routerLink="/forms">formsComponent</a>
 <a routerLink="/user">userComponent</a>
 <a routerLink="/employee">employeeListComponent</a>
 <a routerLink="/employeeDetails">employee details</a>
 <a routerLink="/model forms">modelFormComponent</a>
 <a routerLink="/directives">directivesComponent</a>
 <a routerLink="/inputs outputs">InputsOutputsComponent</a>
 
 </nav>

 <router-outlet></router-outlet>
  <h2>example of data transfer between parent component and child component</h2>  
  <label>input parent data:</label>
  <input type="text" #ptext (keyup)="0">
  <p>this data is from child:----- {{childData}}</p>
  <InputsOutputs (childEvent)="childData=$event" [parentData]="ptext.value"></InputsOutputs>
  `
  ,
  providers:[EmployeeService]
  
})

export class AppComponent  { name = 'Angular'; 
        public childData: string;

}
