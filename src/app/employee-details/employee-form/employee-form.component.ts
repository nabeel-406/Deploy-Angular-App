import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { EmployeeService } from '../../shared/employee.service';
import { NgIf, NgFor, CommonModule } from '@angular/common';
import { Employee } from '../../shared/employee.model';
import { ToastrService } from 'ngx-toastr';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, CommonModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent implements OnInit {
  constructor(public empService: EmployeeService, private toast : ToastrService) { }
  @ViewChild('checkbox1') checkBox:ElementRef;
  isSlide:string='off';
  ngOnInit() {
    this.empService.getDesignation().subscribe(data => {
      this.empService.listDesignation = data;
    });
  }

  submit(form: NgForm) {
    this.empService.employeeData.isMarried = form.value.isMarried == true ? 1 : 0;
    this.empService.employeeData.isActive = form.value.isActive == true ? 1 : 0;
    if (this.empService.employeeData.id == 0) {
      this.insertEmployee(form);
    }
    else {
      this.updateEmployee(form);
    }

  }
  insertEmployee(myform: NgForm) {
    this.empService.saveEmployee().subscribe(d => {
      this.resetForm(myform);
      this.refreshData();
      this.toast.success('Success','Record Saved');
    });
  }
  
  updateEmployee(myform: NgForm) {
    this.empService.updateEmployee().subscribe(d => {
      this.resetForm(myform);
      this.refreshData();
      this.toast.warning('Success','Record Updated');
    });
  }

  resetForm(myform: NgForm) {
    myform.form.reset(myform.value);
    this.empService.employeeData = new Employee();
    this.hideShowSlide();
  }

  refreshData() {
    this.empService.getEmployee().subscribe(res => {
      this.empService.listEmployee = res;
    });
  }

  hideShowSlide() {
    if (this.checkBox.nativeElement.checked) {
      this.checkBox.nativeElement.checked=false;
      this.isSlide='off';
    }
    else
    {
      this.checkBox.nativeElement.checked=true;
      this.isSlide='on';
    }
  }
}
