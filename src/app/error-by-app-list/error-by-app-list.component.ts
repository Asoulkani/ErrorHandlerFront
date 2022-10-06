import { Component,Input, OnInit,EventEmitter, Output } from '@angular/core';
import { Application } from '../Models/application.model';
import { Error } from '../Models/Error.model';

@Component({
  selector: 'app-error-by-app-list',
  templateUrl: './error-by-app-list.component.html',
  styleUrls: ['./error-by-app-list.component.css']
})
export class ErrorByAppListComponent implements OnInit {

  @Output() elementChecked: EventEmitter<[Application,Error]> = new EventEmitter<[Application,Error]>();
  @Output() elementUnChecked: EventEmitter<[Application,Error]> = new EventEmitter<[Application,Error]>();
  @Input() applications: Application[] = [];

  constructor() {
    
  }

  ngOnInit(): void {
    
  }

  addElementChecked(error: [Application,Error]){
    this.elementChecked.emit(error);
  }

  removeElementChecked(error: [Application,Error]){
    this.elementUnChecked.emit(error);
  }

}
