import { Component, OnInit } from '@angular/core';
import {CampusService} from '../../campus.service';
import { Userdetail} from '../../../user.model';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

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
  constructor(private userService: CampusService, fb: FormBuilder ) {
    this.data = fb.group({
      name: '',
      username: '',
      department: '',
      macAddress: ''
    });
  }
  user = [];
  data: FormGroup;
  userinfo = new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
    department: new FormControl(''),
    macAddress: new FormControl(''),
  });
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
  ngOnInit() {
    this.userService.display().subscribe(
      (data) => {

        this.user = data;
        console.log(this.user);
      }
    );
  }


}
