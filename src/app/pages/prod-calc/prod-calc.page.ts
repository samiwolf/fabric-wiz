import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prod-calc',
  templateUrl: './prod-calc.page.html',
  styleUrls: ['./prod-calc.page.scss'],
})
export class ProdCalcPage implements OnInit {
  count = '5';
  fabric = '6';
  machine = '4978';
  prodResult = '';

  constructor() { }

  ngOnInit() {
  }

  calculate() {
    console.log('abcd');
    this.prodResult = 'abcd';
  }
}
