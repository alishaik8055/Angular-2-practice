import{Injectable} from"@angular/core"
@Injectable()
export class EmployeeService{
    getEmployee(){
        return [
            {"id":"1","name":"Ali Shaik","gender":"male"},
            {"id":"2","name":"sophie","gender":"female"},
            {"id":"3","name":"john","gender":"male"},
            {"id":"4","name":"selena","gender":"female"},
        ];
    }
}