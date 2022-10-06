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
    let error2: Error = new Error(2,'Second Error','This the Second Error In First app','Normal','Fixed');
    let error3: Error = new Error(2,'Second Error','This the Third Error In First app','Low','In progress');
    let error4: Error = new Error(3,'Third Error','This the first Error In Second app','Urgent','Open');
    let error5: Error = new Error(2,'Second Error','This the Second Error In Second app','Normal','Fixed');
    let error6: Error = new Error(4,'Fourth Error','This the Third Error In Second app','Low','In progress');

    app.error.push(error1);
    app.error.push(error2);
    app.error.push(error3);
    app2.error.push(error4);
    app2.error.push(error5);
    app2.error.push(error6);

    this.applications.push(app);
    this.applications.push(app2);
  }

}
