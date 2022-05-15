import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountSLserviceService {
  gsmJSON = [
    {
      "gsm": 100,
      "fabric": "s/j",
      "color": "white",
      "count": "44/1",
      "sl": 2.4
    },
    {
      "gsm": 110,
      "fabric": "s/j",
      "color": "white",
      "count": "40/1",
      "sl": 2.55
    },
    {
      "gsm": 120,
      "fabric": "s/j",
      "color": "black",
      "count": "40/1",
      "sl": 2.45
    }
  ];

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
