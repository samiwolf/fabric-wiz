import { Component } from '@angular/core';
import {CountSLserviceService} from "../services/count-slservice.service";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  gsmValues = ['100', '110', '120', '130', '140', '150', '160'];
  fabricValues = ['S/J', 'type 2', 'type 3', 'type 4', 'type 5', 'type 6'];
  colorValues = ['White', 'Black'];
  // values
  currentGsmValue = '100';
  currentFabricValue = 'S/J';
  currentColorValue = 'White';

  // results

  countResult = '';
  slResult = '';
  constructor(
    private countSLService: CountSLserviceService
  ) {}

  onGsmValueChange() {
    console.log(this.currentGsmValue);
  }
  onFabricValueChange() {
    console.log(this.currentFabricValue);
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
}
