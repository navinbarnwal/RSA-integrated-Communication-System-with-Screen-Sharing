import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-sub-dashboard',
  templateUrl: './sub-dashboard.component.html',
  styleUrls: ['./sub-dashboard.component.scss']
})
export class SubDashboardComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    this.route.parent.params.subscribe(params => console.log(params));
  }

  ngOnInit(): void {
  }

}
