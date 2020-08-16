import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;

  constructor(private route: ActivatedRoute) {
    this.route.parent.params.subscribe(params => console.log(params));
  }

  ngOnInit(): void {
  }

}
