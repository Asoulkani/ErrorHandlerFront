import { Component, Input, OnInit,EventEmitter,Output } from '@angular/core';
import { Error } from '../Models/Error.model';

@Component({
  selector: '[app-error-list-element]',
  templateUrl: './error-list-element.component.html',
  styleUrls: ['./error-list-element.component.css']
})
export class ErrorListElementComponent implements OnInit {

  spanLevelClass: string = "bg-danger";
  spanStatusClass: string = "bg-danger";

  @Output() elementChecked: EventEmitter<Error> = new EventEmitter<Error>();
  @Output() elementUnChecked: EventEmitter<Error> = new EventEmitter<Error>();
  @Input("appError") error: Error = new Error(0,"","","Urgent","Open");

  constructor() { 

  }

  ngOnInit(): void {
    this.defineSpanStatusClass();
    this.defineSpanLevelClass();
  }

  defineSpanLevelClass()
  {
    switch (this.error.level) {
      case "Urgent":
          this.spanLevelClass = "bg-danger";
        break;
      case "Normal":
          this.spanLevelClass = "bg-primary";
        break;
      case "Low":
          this.spanLevelClass = "bg-success";
        break;
    
      default:
        break;
    }
  }
  defineSpanStatusClass()
  {
    switch (this.error.status) {
      case "Open":
          this.spanStatusClass = "bg-danger";
        break;
      case "In progress":
          this.spanStatusClass = "bg-warning";
        break;
      case "Fixed":
          this.spanStatusClass = "bg-success";
        break;
    
      default:
        break;
    }
  }

  checked(event: Event){
    if((<HTMLInputElement>event.target).checked){
      this.elementChecked.emit(this.error);
    }
    else
    this.elementUnChecked.emit(this.error);
      
  }



}
