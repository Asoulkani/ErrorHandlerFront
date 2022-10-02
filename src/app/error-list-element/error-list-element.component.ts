import { Component, Input, OnInit } from '@angular/core';
import { Error } from '../Models/Error.model';

@Component({
  selector: '[app-error-list-element]',
  templateUrl: './error-list-element.component.html',
  styleUrls: ['./error-list-element.component.css']
})
export class ErrorListElementComponent implements OnInit {

  spanLevelClass: string = "bg-danger";
  spanStatusClass: string = "bg-danger";
  @Input() error: Error = new Error(0,"","","Urgent","Open");

  constructor() { }

  ngOnInit(): void {
  }

}
