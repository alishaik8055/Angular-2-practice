import {Component} from "@angular/core"

@Component({
selector:`forms-component`,
templateUrl:`./userform.html`,

styles:[`
input.ng-valid{border-left:5px solid green}
input.ng-invalid{border-left:5px solid red}


`],
})

export class formsComponent{
onsubmit(value:any){
        console.log(value);
}

}