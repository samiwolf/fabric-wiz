import { Component, OnInit } from '@angular/core';
import {CountSLserviceService} from "../../services/count-slservice.service";
import {GsmValuesService} from "../../services/gsm-values.service";

@Component({
  selector: 'app-knit-param',
  templateUrl: './knit-param.page.html',
  styleUrls: ['./knit-param.page.scss'],
})
export class KnitParamPage implements OnInit {





  gsmValues = [];
  fabricValues = ['S/J', 'Ly s/j', '1x1 Rib', '1x1 H.F', '1x1 F.F', '2x1 Rib', '2x1 H.F', '2x1 F.F', 'CTN B/FLEECE', 'POLY B/FLEECE', '2T TERRY'];
  colorValues = ['White', 'Black'];
  // values
  currentGsmValue = '';
  currentFabricValue = 'S/J';
  currentColorValue = 'White';

  // results

  countResult = '';
  slResult = '';
  constructor(
    private countSLService: CountSLserviceService,
    private gsmService: GsmValuesService
  ) {
    this.gsmValues = this.gsmService.getGSMValue('S/J');
  }

  onGsmValueChange() {
    console.log(this.currentGsmValue);
  }
  onFabricValueChange() {
    console.log(this.currentFabricValue);
    this.currentGsmValue = '';
    this.gsmValues = this.gsmService.getGSMValue(this.currentFabricValue);
  }
  onColorValueChange() {
    console.log(this.currentColorValue);
  }

  calculate() {

    let result = this.countSLService.getCountSL(this.currentGsmValue, this.currentFabricValue, this.currentColorValue);
    if (result)
    {
      this.countResult = result.count;
      this.slResult = result.sl;
    }
    else {
      this.countResult = '';
      this.slResult = '';
    }

  }

  ngOnInit(): void {
  }

}
