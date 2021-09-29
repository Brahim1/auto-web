import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scheckheft-list',
  templateUrl: './scheckheft-list.component.html',
  styleUrls: ['./scheckheft-list.component.scss']
})
export class ScheckheftListComponent implements OnInit {
  public people: any[] = [
    {
      "hersteller": "Audi",
      "vim": "m9c8725n4326c50324cn53246785"
    },
    {
      "hersteller": "Mercedes",
      "vim": "n98372dn9nx5798n5789n7849xn98"
    },
    {
      "hersteller": "Peugeot",
      "vim": "4389dj9472j597845798dj4j98d4"
    },
    {
      "hersteller": "Porsche",
      "vim": "A98234759832475873426543875"
    },
    {
      "hersteller": "Tesla",
      "vim": "h4t82f8743hf7834hf2348hf84"
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
