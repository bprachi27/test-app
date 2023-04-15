import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  public name = "Codevolution";
  public message = "welcom to Codevolution";
  public person = {
    "firstName": "prachi",
    "lastName": "badami"
  }
  public date = new Date()

  // public siteUrl = window.location.href
  // public greeting = "";
  @Input() public parentData: string | undefined;
  @Output() public childEvent = new EventEmitter();

  onclick(){
    this.childEvent.emit('hello i am prachi.')
  }

  // onclick(event: any){
  //   console.log(event)
  //   this.greeting = event.type
  // }
  // logmessage(event: any){
  //   console.log(event)
    
  // }
}
