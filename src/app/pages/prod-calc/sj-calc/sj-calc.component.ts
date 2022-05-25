import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sj-calc',
  templateUrl: './sj-calc.component.html',
  styleUrls: ['./sj-calc.component.scss'],
})
export class SjCalcComponent implements OnInit {
  count = 0;
  sl = 0;
  rpm = 0;
  dia = 0;
  gauge = 0;
  prodResult = 0;
  constructor() { }

  ngOnInit() {}

  calculate() {
    if (this.count !== 0)
    {
    this.prodResult = (3.1416 * this.dia * this.gauge * 3 * this.dia * this.sl * this.rpm * 1224) / (1693344 * this.count);
    }
  }
}
