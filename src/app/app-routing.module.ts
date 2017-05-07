import {NgModule} from "@angular/core";
import {RouterModule,Routes} from "@angular/router";
import{weatherComponent} from "./WeatherServices/weather.component";
import{formsComponent} from "./forms.component";
import{userComponent} from "./user.component";
import{employeeListComponent} from "./services/employeeList.component";
import{employeeDetailsComponent} from "./services/employeeDetails.component";
import{modelFormComponent} from "./modelForm.component";
import{directivesComponent} from "./directives.component";
import{InputsOutputsComponent} from "./InputsOutpts.component";
import{homeComponent} from "./home.component";
//import{animationsComponent} from "./animations.component";
import { ModuleWithProviders } from '@angular/core';

const routes:Routes=[ 
      
    {path:"weather",component:weatherComponent},
    {path:"forms",component:formsComponent},
    {path:"user",component:userComponent},
    {path:"employee",component:employeeListComponent},
    {path:"employeeDetails",component:employeeDetailsComponent},
    {path:"model forms",component:modelFormComponent},
    {path:"directives",component:directivesComponent},
    {path:"inputs outputs",component:InputsOutputsComponent},
    {path:"home",component:homeComponent},
    {path:"",component:homeComponent}

];
@NgModule({
    imports :[RouterModule.forRoot(routes)],
    exports :[RouterModule]


})
export class AppRoutingModule{}
export const routingComponents=[weatherComponent,formsComponent,userComponent,employeeListComponent,
                                employeeDetailsComponent,modelFormComponent,directivesComponent,
                                InputsOutputsComponent,homeComponent
                                
                                ];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
                                