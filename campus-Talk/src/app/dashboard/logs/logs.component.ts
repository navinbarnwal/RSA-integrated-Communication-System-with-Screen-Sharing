import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule, MatFormField, MatLabel, MatHint} from '@angular/material/form-field';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {
  hide = true;
  constructor(private route: ActivatedRoute) {
    this.route.parent.params.subscribe(params => console.log(params));
  }
  ngOnInit(): void {
  }

}
