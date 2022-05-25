import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prod-calc',
  templateUrl: './prod-calc.page.html',
  styleUrls: ['./prod-calc.page.scss'],
})
export class ProdCalcPage implements OnInit {

  fabricValues = ['S/J','CTN FLEECE', 'POLY FLEECE', 'RIB'];
  currentFabricValue = 'S/J';
  constructor() { }

  ngOnInit() {
  }



  onFabricValueChange() {
    console.log(this.currentFabricValue);
  }
}
