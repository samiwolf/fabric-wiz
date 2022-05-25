import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ctn-fleece-calc',
  templateUrl: './ctn-fleece-calc.component.html',
  styleUrls: ['./ctn-fleece-calc.component.scss'],
})
export class CtnFleeceCalcComponent implements OnInit {
  rpm : number;
  dia = 28;
  gauge = 16;
  prodResult = 0;
  diaValues = [28, 30, 32, 34, 36, 38];
  gaugeValues = [16, 18, 20];
  kcount : number;
  tcount : number;
  lcount : number;
  ksl : number;
  tsl : number;
  lsl : number;
  constructor() { }

  ngOnInit() {}

  calculate() {
    this.prodResult = (3.1416 * this.dia * this.gauge * 3 * this.dia * (this.tsl+ this.ksl + this.lsl)* this.rpm * 1224) / (1693344 * ((this.tcount+ this.kcount + this.lcount)));
  }

}
