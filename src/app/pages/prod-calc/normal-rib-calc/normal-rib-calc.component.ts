import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-normal-rib-calc',
  templateUrl: './normal-rib-calc.component.html',
  styleUrls: ['./normal-rib-calc.component.scss'],
})
export class NormalRibCalcComponent implements OnInit {

  count: number;
  sl: number;
  rpm: number;
  dia: number;
  gauge: number;
  prodResult: number;
  axbValues = ['1x1', '2x1', '3x2', '3x3', '4x2', '4x3', '5x2', '5x3', '8x2', '8x3', '8x5'];
  axb = '1x1';
  k = 1;
  constructor() {
  }

  ngOnInit() {
  }

  calculate() {
    if (this.count !== 0) {
      this.prodResult = (this.k * 2 * 3.1416 * this.dia * this.gauge * 2 * this.dia * this.sl * this.rpm * 1224) / (1693344 * this.count);
    }
  }

  axbChange() {
    if (this.axb === '1x1')
    {
      this.k = 1;
    }
    else if (this.axb === '2x1')
    {
      this.k = 0.67;
    }
    else if (this.axb === '3x2')
    {
      this.k = 0.63;
    }
    else if (this.axb === '3x3')
    {
      this.k = 0.6;
    }
    else if (this.axb === '4x2')
    {
      this.k = 0.6;
    }
    else if (this.axb === '4x3')
    {
      this.k = 0.58;
    }
    else if (this.axb === '5x2')
    {
      this.k = 0.58;
    }
    else if (this.axb === '5x3')
    {
      this.k = 0.57;
    }
    else if (this.axb === '8x2')
    {
      this.k = 0.55;
    }
    else if (this.axb === '8x3')
    {
      this.k = 0.55;
    }
    else if (this.axb === '8x5')
    {
      this.k = 0.54;
    }
  }
}
