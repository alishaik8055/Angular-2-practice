import {Component} from '@angular/core'

@Component ({
    selector:'directives',
    template: `<h1>this is from diectives</h1>
        <p *ngIf="ShowOrHideIf">show or hide using ngIf</p>
        <div [ngSwitch]="ShowOrHideSwitch">
        <p *ngSwitchCase = "'yes'" >show or hide using switch case matched with yes</p>
        <p *ngSwitchCase = "'no'" >show or hide using switch case mactched with no </p>
        <p *ngSwitchDefault>show or hide using switch case default value REMEMBER TYPE SHOULD ALSO MATCH IF STRING INCLUDE QUOTES</p>
        </div>
        <ul><li *ngFor = "let color of colors">{{color}}</li></ul>
        <p [ngClass]="{Classone:cone,Classtwo:ctwo}">ngClass to dyanmically apply multiple classes to an html element</p>
        <button (click)="OnClick()">toggle</button>
        <p [ngStyle]="{'font-style':fontStyle,'font-size':size}">to apply multiple inline styles use ngStyle attribute directive</p>
    `,
    styles:[`
    li{color:blue;
    list-style-type:none;}
    .Classone{color:red}
    .Classtwo{background-color:blue}
    `]
})

export class directivesComponent{
public ShowOrHideIf=true;
public ShowOrHideSwitch='no';
public colors=['red','green','orange','yellow','blue'];
public cone=true;
public ctwo=true;
public fontStyle="italic";
public size="20px";

OnClick(){
    this.cone=!this.cone;
    this.ctwo=!this.ctwo;
}
}