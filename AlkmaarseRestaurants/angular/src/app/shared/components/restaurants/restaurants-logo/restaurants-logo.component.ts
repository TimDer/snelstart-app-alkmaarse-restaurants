import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurants-logo',
  templateUrl: './restaurants-logo.component.html',
  styleUrls: ['./restaurants-logo.component.scss']
})
export class RestaurantsLogoComponent implements OnInit {

  public _src: string = "";
  @Input()
  public set src(data: string) {
    this._src = window.location.protocol + "//" + window.location.host + data;
  }
  public get src(): string {
    return this._src;
  }

  @Input()
  public width: string = "100%";

  @Input()
  public alt: string = "";

  @Input()
  public height: string = "0";

  public NgStyleImg: any = {};

  constructor() { }

  ngOnInit(): void {
    this.NgStyleImg = {
      "height": this.height,
      "width": this.width
    }
  }

}
