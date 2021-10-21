import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { url } from 'inspector';

@Component({
  selector: 'app-restaurant-logo',
  templateUrl: './restaurant-logo.component.html',
  styleUrls: ['./restaurant-logo.component.scss']
})
export class RestaurantLogoComponent implements AfterViewInit {

  @Input()
  public set src(v : string) {
    this._src = v;
    this.setImage();
  }
  public get src() : string {
    return this._src;
  }
  public _src: string = "";

  public containerStyle: any = {};
  public imageStyle: any = {};

  @ViewChild("containerElement")
  public containerElement!: ElementRef;

  constructor() { }
  ngAfterViewInit(): void {
    this.setContainerHeight();
    this.setImage();
  }

  @HostListener("window:resize")
  private windowResizeEvent() {
    this.setContainerHeight();
  }

  private setImage() {
    this.imageStyle = {
      "background-image": 'url("' + this.src + '")'
    }
  }

  private setContainerHeight() {
    let containerHeight = 0;
    if (this.containerElement !== undefined) {
      const containerWidth: number = this.containerElement.nativeElement.offsetWidth;
      containerHeight = (containerWidth / 100) * 57.252;
    }

    this.containerStyle = {
      "height": `${containerHeight.toString()}px`
    };
  }

}
