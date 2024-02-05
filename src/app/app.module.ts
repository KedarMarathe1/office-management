import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CustomersComponent } from './components/customers/customers.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { ItrComponent } from './components/itr/itr.component';
import { AuditComponent } from './components/audit/audit.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CustomersComponent,
    EmployeesComponent,
    ItrComponent,
    AuditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
