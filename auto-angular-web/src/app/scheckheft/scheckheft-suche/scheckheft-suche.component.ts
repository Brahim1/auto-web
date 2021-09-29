import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scheckheft-suche',
  templateUrl: './scheckheft-suche.component.html',
  styleUrls: ['./scheckheft-suche.component.scss']
})
export class ScheckheftSucheComponent implements OnInit {
  username: string = '  Gib hier deine VIM ein';

  constructor() { }

  ngOnInit(): void {
  }

}
