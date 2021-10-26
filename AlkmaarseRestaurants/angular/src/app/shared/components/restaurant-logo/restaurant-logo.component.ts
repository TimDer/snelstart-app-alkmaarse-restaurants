import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';

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
    this.checkIfImageExists();
  }
  public get src() : string {
    return this._src;
  }
  public _src: string = "";

  public srcError: boolean = false;

  @Input()
  public alt: string = "";

  public containerStyle: any = {};
  public imageStyle: any = {};
  public altStyle: any = {};

  @ViewChild("containerElement")
  public containerElement!: ElementRef<HTMLElement>;

  constructor() { }

  public checkIfImageExists(): void {
    const img = new Image();

    img.src = this.src;
    img.onerror = () => {
      this.srcError = true;
    }
    img.onload = () => {
      this.srcError = false;
    }
  }

  ngAfterViewInit(): void {
    this.setContainerHeight();
    this.setImage();
    this.checkIfImageExists();
    this.setAltTextHeightToCenter();
  }

  @HostListener("window:resize")
  private windowResizeEvent() {
    this.setContainerHeight();
    this.setAltTextHeightToCenter();
  }

  public shortName(name: string) {
    if (name.length > 10) {
      let shortName = [...name.slice(0, 10)];

      // remove the ending space
      if (shortName[ shortName.length - 1 ] === " ") {
        shortName[ shortName.length - 1 ] = "";
      }

      return shortName.join("") + "...";
    }

    return name;
  }

  private setImage() {
    this.imageStyle = {
      "background-image": 'url("' + this.src + '")'
    }
  }

  private lastReportedContainerHeight: number = 0;
  private setContainerHeight() {
    let containerHeight = 0;
    if (this.containerElement !== undefined) {
      const containerWidth: number = this.containerElement.nativeElement.offsetWidth;
      containerHeight = (containerWidth / 100) * 57.252;
      this.lastReportedContainerHeight = containerHeight;
    }

    this.containerStyle = {
      "height": `${containerHeight.toString()}px`
    };
  }

  private setAltTextHeightToCenter() {
    const ninetyFivePrecentOfTheContainerHeight = (this.lastReportedContainerHeight / 100) * 88;
    this.altStyle = {
      "line-height": ninetyFivePrecentOfTheContainerHeight + "px"
    }
  }

}
