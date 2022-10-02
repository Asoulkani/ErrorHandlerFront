import { Component, Input, OnInit } from '@angular/core';
import { Error } from '../Models/Error.model';

@Component({
  selector: '[app-error-list]',
  templateUrl: './error-list.component.html',
  styleUrls: ['./error-list.component.css']
})
export class ErrorListComponent implements OnInit {

  @Input() errors: Error[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
