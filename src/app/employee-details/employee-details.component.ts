import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { CommonModule } from '@angular/common';
import { Employee } from '../shared/employee.model';
import { EmployeeFormComponent } from "./employee-form/employee-form.component";
import { DatePipe } from '@angular/common'; 
import { ToastrService } from 'ngx-toastr';
// import { ToastrService} from 'ngx-toastr';

// { provide: BrowserAnimationsModule },
@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [CommonModule, EmployeeFormComponent],
  providers: [EmployeeService, DatePipe, EmployeeFormComponent
    ],
    templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  constructor(public empService: EmployeeService, public datepipe:DatePipe, private toast: ToastrService) {}
  @ViewChild(EmployeeFormComponent) emp:EmployeeFormComponent;

  ngOnInit(): void {
    this.empService.getEmployee().subscribe(data=>{
      this.empService.listEmployee=data;
    });
  }

  populateEmployee(selectedEmployee:Employee)
  {
    console.log(selectedEmployee.doj);
    let df=this.datepipe.transform(selectedEmployee.doj,'yyyy-MM-dd');
    selectedEmployee.doj=df;
    console.log("After Transform : ",selectedEmployee.doj);
    this.empService.employeeData=selectedEmployee;
    if (this.emp.isSlide==='off') {
      this.emp.hideShowSlide();
    }
  }
  delete(id:number)
  {
    if (confirm('Are you sure you want to delete employee?')) {
      this.empService.deleteEmployee(id).subscribe(data=>{
        this.empService.getEmployee().subscribe(data=>{
          this.empService.listEmployee=data;
          this.toast.error('Sucess','Record Deleted');
        });
      },
      err=>{
        console.log('Record not Deleted!');
      });
    }
  }
} 
