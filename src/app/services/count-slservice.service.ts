import { Injectable } from '@angular/core';
import {gsmJSON} from "../data/gsmdata";

@Injectable({
  providedIn: 'root'
})
export class CountSLserviceService {
  gsmJSON = gsmJSON;

  gsmDict = new Map();
  constructor() {
    this.initGsmDict();
  }

  initGsmDict()
  {
    for (let index in this.gsmJSON)
    {
      // console.log(this.gsmJSON[index]);
      this.gsmDict.set(
        JSON.stringify(
        {
          gsm: this.gsmJSON[index].gsm.toString(),
          fabric: this.gsmJSON[index].fabric,
          color: this.gsmJSON[index].color
        }),
        {
          count: this.gsmJSON[index].count,
          sl: this.gsmJSON[index].sl.toString()
        }
      )
    }
  }

  public getCountSL(gsm, fabric, color)
  {
    return this.gsmDict.get(JSON.stringify(
      {
        gsm: gsm.toLowerCase(),
        fabric: fabric.toLowerCase(),
        color: color.toLowerCase()
      })

      );
  }
}
