import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sj-calc',
  templateUrl: './sj-calc.component.html',
  styleUrls: ['./sj-calc.component.scss'],
})
export class SjCalcComponent implements OnInit {
  count: number;
  sl: number;
  rpm: number;
  dia: number;
  gauge: number;
  prodResult: number;
  constructor() { }

  ngOnInit() {}

  calculate() {
    if (this.count !== 0)
    {
    this.prodResult = (3.1416 * this.dia * this.gauge * 3 * this.dia * this.sl * this.rpm * 1224) / (1693344 * this.count);
    }
  }
}
