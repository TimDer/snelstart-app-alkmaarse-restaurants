import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurants-logo',
  templateUrl: './restaurants-logo.component.html',
  styleUrls: ['./restaurants-logo.component.scss']
})
export class RestaurantsLogoComponent implements OnInit {

  @Input()
  public src: string = "";

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
