import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeDetailsComponent } from "./employee-details/employee-details.component";
import { CommonModule } from '@angular/common';
 import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EmployeeFormComponent } from './employee-details/employee-form/employee-form.component';
// import { ToastrModule } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet, HttpClientModule, EmployeeFormComponent, CommonModule, EmployeeDetailsComponent],
  imports: [RouterOutlet, HttpClientModule, EmployeeFormComponent, CommonModule, EmployeeDetailsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Int';
}
