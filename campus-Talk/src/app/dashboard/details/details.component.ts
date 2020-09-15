import { Component, OnInit } from '@angular/core';
import {CampusService} from '../../campus.service';
import { Userdetail} from '../../../user.model';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

interface dept {
  name: string;
  nameValue: string;
}
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  get aliases() {
    return this.userdetails.get('aliases') as FormArray;
  }
  constructor(private userService: CampusService, private fb: FormBuilder ) {
  }
  userdetails = this.fb.group({
    name: ['', Validators.required],
    userName: ['', Validators.required],
    department: ['', Validators.required],
    macAddress: ['', Validators.required]
  });
  user = [];
  formresult = '';
  depts: dept[] = [
    {name: 'Department of Computer Science', nameValue: 'Department of Computer Science'},
    {name: 'Department of Physcology', nameValue: 'Department of Physcology'},
    {name: 'Department of Sciences', nameValue: 'Department of Sciences'},
    {name: 'Department of Biology', nameValue: 'Department of Biology'},
    {name: 'Department of Zoology', nameValue: 'Department of Zoology'},
    {name: 'Department of Mathematics', nameValue: 'Department of Mathematics'},
    {name: 'Department of Arts', nameValue: 'Department of Arts'},
    {name: 'Department of Physical Education', nameValue: 'Department of Physical Education'},
    {name: 'Department of Management', nameValue: 'Department of Management'},

  ];
  addusertoggle = false;
  addusertext = 'Add User +';
  adduserfunction(){
    if ( this.addusertoggle === false){
      this.addusertext = 'Cancel Adding User';
      this.addusertoggle = true;
    }else{
      this.addusertext = 'Add User +';
      this.addusertoggle = false;
      this.formresult = '';
    }
  }
  updateProfile() {
    this.userdetails.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  onSubmit() {
    this.userService.addUser(this.userdetails.value).subscribe();
    console.warn(this.userdetails.value);
    this.formresult = 'Form Submitted Successfully !!';
  }
  ngOnInit() {
    this.userService.display().subscribe(
      (data) => {

        this.user = data;
        console.log(this.user);
      }
    );
  }


}
