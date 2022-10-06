import { Component } from '@angular/core';
import { Application } from './Models/application.model';
import { Error } from './Models/Error.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  applications: Application[] = [];
  errorsToDelete: [Application,Error][] = [];
  lastErrorsDeleted: [Application,Error][] = [];

  constructor(){
    let app: Application = new Application(1,'First App');
    let app2: Application = new Application(2,'Second App');

    let error1: Error = new Error(1,'First Error','This the first Error In First app','Urgent','Open');
    let error2: Error = new Error(2,'Second Error','This the Second Error In First app','Normal','Fixed');
    let error3: Error = new Error(3,'Third Error','This the Third Error In First app','Low','In progress');
    let error4: Error = new Error(4,'First Error','This the first Error In Second app','Urgent','Open');
    let error5: Error = new Error(5,'Second Error','This the Second Error In Second app','Normal','Fixed');
    let error6: Error = new Error(6,'Third Error','This the Third Error In Second app','Low','In progress');

    app.error.push(error1);
    app.error.push(error2);
    app.error.push(error3);
    app2.error.push(error4);
    app2.error.push(error5);
    app2.error.push(error6);

    this.applications.push(app);
    this.applications.push(app2);
  }

  deleteAll(){
    while (this.applications.pop() != undefined) {
      console.log("deleted");
    }
  }

  addElementChecked(error: [Application,Error]){
    this.errorsToDelete.push(error);
  }

  removeElementChecked(error: [Application,Error]){
    this.errorsToDelete.forEach((value, index) => {
      if(value[0].id == error[0].id && value[1].id == error[1].id) this.errorsToDelete.splice(index,1);
    });
  }
  
  deleteSelected()
  {
    this.errorsToDelete.forEach(element => {
      let appOfErrorToBeDeleted = this.applications.find(app => app.id == element[0].id);
      if(appOfErrorToBeDeleted != undefined)
        appOfErrorToBeDeleted.error.forEach((value, index) => {
          if(value.id == element[1].id) appOfErrorToBeDeleted?.error.splice(index,1);
        })
    });
    this.lastErrorsDeleted = this.errorsToDelete;
    this.errorsToDelete = [];
  }

  restoreDeleted()
  {
    this.lastErrorsDeleted.forEach(element => {
      this.applications.forEach(app => {
        if(app.id == element[0].id)
          app.error.push(element[1]);
      });
    });
    this.sortLists();
  }

  sortLists()
  {
    this.applications.forEach(element => {
      element.error.sort((err1,err2) => (err1.id - err2.id))
    });
  }

}
