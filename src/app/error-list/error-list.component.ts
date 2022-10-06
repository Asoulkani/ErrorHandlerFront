import { Component, Input, OnInit,EventEmitter,Output } from '@angular/core';
import { Application } from '../Models/application.model';
import { Error } from '../Models/Error.model';

@Component({
  selector: '[app-error-list]',
  templateUrl: './error-list.component.html',
  styleUrls: ['./error-list.component.css']
})
export class ErrorListComponent implements OnInit {

  @Output() elementChecked: EventEmitter<[Application,Error]> = new EventEmitter<[Application,Error]>();
  @Output() elementUnChecked: EventEmitter<[Application,Error]> = new EventEmitter<[Application,Error]>();
  @Input() app: Application = new Application(0,"");

  constructor() { }

  ngOnInit(): void {
  }

  addElementChecked(error: Error){
    this.elementChecked.emit([this.app,error]);
  }
  removeElementChecked(error: Error){
    this.elementUnChecked.emit([this.app,error]);
  }

}
