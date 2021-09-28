import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scheckheft',
  templateUrl: './scheckheft.component.html',
  styleUrls: ['./scheckheft.component.sass']
})
export class ScheckheftComponent implements OnInit {
  username: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
