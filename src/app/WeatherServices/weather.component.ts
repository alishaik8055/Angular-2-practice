import{Component,OnInit} from "@angular/core";
import{WeatherService} from "./weather.service"
@Component({
    selector:"weather",
    template:`
    <div class="container">
    <form #weatherForm="ngForm" (ngSubmit)="onSubmit(weatherForm.value)" novalidate>
    
    <label>please enter your zip code to know the current weather</label>
    <input type="text" class="form-control"name="zip Code" pattern="^[1-9][0-9]{4}$" required #zipRef="ngModel" ngModel>
<div *ngIf="zipRef.errors && (zipRef.dirty ||zipRef.touched)" class="alert alert-danger">

<div [hidden]="!zipRef.errors.required">Please enter the zipCode</div>
<div [hidden]="!zipRef.errors.pattern">Please enter a 5 digit zip code</div>




</div>
    <button type=submit class="btn btn-primary"[disabled]="!weatherForm.form.valid">Submit</button>

    </form>
    </div>
    `,
     styles:[`
        input.ng-valid{border-left:5px solid green}
    input.ng-invalid{border-left:5px solid red}
     
     `],   
     providers:[WeatherService]
})
export class weatherComponent implements OnInit{
zipCode:string;
errorMsg:string;
private weather:any[]
    constructor(private _weatherService:WeatherService){}
ngOnInit(){

this._weatherService.getWeatherData().subscribe(resWeatherData=>this.weather=resWeatherData,(resError=>this.errorMsg=resError));

}
onSubmit(value:string){
    this.zipCode=value;
}
}