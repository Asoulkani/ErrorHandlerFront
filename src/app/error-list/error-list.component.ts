import { Component, Input, OnInit } from '@angular/core';
import { Application } from '../Models/application.model';
import { Error } from '../Models/Error.model';

@Component({
  selector: '[app-error-list]',
  templateUrl: './error-list.component.html',
  styleUrls: ['./error-list.component.css']
})
export class ErrorListComponent implements OnInit {

  @Input() app: Application = new Application(0,"");

  constructor() { }

  ngOnInit(): void {
  }

}
