import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-scheckheft-buch',
  templateUrl: './scheckheft-buch.component.html',
  styleUrls: ['./scheckheft-buch.component.scss']
})
export class ScheckheftBuchComponent implements OnInit {
  id: string = 'Hier steht ihre id drin';

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
