import {Component} from "@angular/core"
import {FormGroup, FormControl} from "@angular/forms"

@Component({
selector:'model-form',
templateUrl:'./modelForm.html'

})

export class modelFormComponent{
customerForm= new FormGroup({
    name:new FormControl(),
    email:new FormControl(),
    address:new FormGroup({
        street: new FormControl(),
        city:new FormControl(),
        zipCode:new FormControl(),
    }),
});

}