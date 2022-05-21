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
      console.log(this.gsmJSON[index]);
      this.gsmDict.set(
        JSON.stringify(
        {
          gsm: this.gsmJSON[index].gsm.toString().toLowerCase(),
          fabric: this.gsmJSON[index].fabric.toLowerCase(),
          color: this.gsmJSON[index].color.toLowerCase()
        }),
        {
          count: this.gsmJSON[index].count,
          sl: this.gsmJSON[index].sl.toString().toLowerCase()
        }
      )
    }
  }

  public getCountSL(gsm, fabric, color)
  {
    console.log(JSON.stringify(
      {
        gsm: gsm.toLowerCase(),
        fabric: fabric.toLowerCase(),
        color: color.toLowerCase()
      }));
    return this.gsmDict.get(JSON.stringify(
      {
        gsm: gsm.toLowerCase(),
        fabric: fabric.toLowerCase(),
        color: color.toLowerCase()
      })

      );
  }
}
