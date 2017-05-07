import{Injectable} from "@angular/core";
import{Http,Response} from "@angular/http";
import{Observable} from "rxjs/Observable";
import 'rxjs/add/Observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
@Injectable()

export class WeatherService{
    private _url:string="";
constructor(private _http:Http){}
 
 getWeatherData(){
return this._http.get(this._url).map((response:Response)=>response.json())
         .catch(this._ErrorHandler);
 }
_ErrorHandler(error:Response){

//console.error(error);
return Observable.throw(error ||"Server Error");
}

}