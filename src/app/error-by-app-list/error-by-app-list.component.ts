import { Component, OnInit } from '@angular/core';
import { Application } from '../Models/application.model';
import { Error } from '../Models/Error.model';

@Component({
  selector: 'app-error-by-app-list',
  templateUrl: './error-by-app-list.component.html',
  styleUrls: ['./error-by-app-list.component.css']
})
export class ErrorByAppListComponent implements OnInit {

  applications: Application[] = [];

  constructor() {
    
  }

  ngOnInit(): void {
    let app: Application = new Application(1,'First App');
    let app2: Application = new Application(2,'Second App');

    let error1: Error = new Error(1,'First Error','This the first Error In First app','Urgent','Open');
    let error2: Error = new Error(2,'Second Error','This the Second Error In First app','Urgent','Open');
    let error3: Error = new Error(3,'Third Error','This the first Error In Second app','Urgent','Open');
    let error4: Error = new Error(4,'Fourth Error','This the Second Error In Second app','Urgent','Open');

    app.error.push(error1);
    app.error.push(error2);
    app2.error.push(error3);
    app2.error.push(error4);

    this.applications.push(app);
    this.applications.push(app2);
  }

}
