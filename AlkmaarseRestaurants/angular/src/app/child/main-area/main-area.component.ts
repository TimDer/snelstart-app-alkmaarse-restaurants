import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-area',
  templateUrl: './main-area.component.html',
  styleUrls: ['./main-area.component.scss']
})
export class MainAreaComponent implements OnInit, AfterViewInit {

  public NgStyleParent: any;
  public NgStyleChild: any;

  @Input()
  public Height: string = "auto";

  public _width: string = "auto";
  @Input()
  public set width(data: string) {
    this._width = data;
    if (this.NgStyleParent !== undefined) {
      this.NgStyleParent.width = data; 
    }
  }
  public get width(): string {
    return this._width;
  }

  @Input()
  public VhFullHeight: boolean = false;

  @Input()
  public BackgroundColor: string = "gray";

  public _paddingBottomPx: number = 0;
  public _paddingArray: any = false;
  public _padding!: string;
  @Input()
  public set padding(data: string) {
    const dataArray = data.split(" ");

    if (dataArray.length === 1) {
      dataArray[1] = dataArray[0];
      dataArray[2] = `calc(${dataArray[0]} - 1px)`;
      dataArray[3] = dataArray[0];
      this._paddingBottomPx = parseInt(dataArray[0]) - 1;
    }
    else if (dataArray.length === 2) {
      dataArray[2] = `calc(${dataArray[0]} - 1px)`;
      dataArray[3] = dataArray[1]
      this._paddingBottomPx = parseInt(dataArray[0]) - 1;
    }
    else if (dataArray.length === 3) {
      const top = dataArray[0];
      const bottom = dataArray[2];
      const leftRight = dataArray[1];
      dataArray[0] = top;
      dataArray[1] = leftRight;
      dataArray[2] = `calc(${bottom} - 1px)`;
      dataArray[3] = leftRight;
      this._paddingBottomPx = parseInt(bottom) - 1;
    }
    else if (dataArray.length === 4) {
      this._paddingBottomPx = parseInt(dataArray[2]) - 1;
      dataArray[2] = `calc(${dataArray[2]} - 1px)`;
    }

    this._paddingArray = dataArray;

    const newData = dataArray.join(" ");

    this._padding = newData;

    if (this.NgStyleChild !== undefined) {
      this.NgStyleChild.padding = newData;
    }
  }
  public get padding(): string {
    return this._padding;
  }

  @Input()
  public margin: string = "0";

  constructor() { }

  ngOnInit(): void {
    this.NgStyleParent = {
      "margin": this.margin,
      "width": this.width
    }

    this.NgStyleChild = {
      "background-color": this.BackgroundColor,
      "padding": this.padding,
      "height": "auto"
    }
  }

  // ============================== CSS bug: https://bugs.webkit.org/show_bug.cgi?id=26559 ==============================
  @ViewChild("ContentElement")
  public ContentElement!: ElementRef;
  private GetParentHeightCssBugFix(): void {
    if (this.VhFullHeight) {
      const viewPointHeight = window.innerHeight;

      let minusPixelsMargin = this.setPaddingOrMargin(this.margin, "margin").toString();

      let contentHeight = this.getContentHeight();
  
      if (contentHeight <= viewPointHeight) {
        this.NgStyleParent.height = `calc( ${viewPointHeight.toString()}px - ( ${minusPixelsMargin}px ) )`;
      }
      else {
        this.NgStyleParent.height = `${(
          this.ContentElement.nativeElement.offsetHeight +
          this.setPaddingOrMargin(this.padding, "padding")
        ).toString()}px`;
      }
    }
    else {
      this.NgStyleParent.height = this.Height;
    }
  }
  private getContentHeight(): number {
    if (this.ContentElement !== undefined) {
      const contentHeight = this.ContentElement.nativeElement.offsetHeight;
      const paddingHeight = this.setPaddingOrMargin(this.padding, "padding");
      const marginHeight = this.setPaddingOrMargin(this.margin, "margin");

      return  contentHeight +
              paddingHeight + 
              marginHeight;
    }

    return 0;
  }
  private setPaddingOrMargin(css: string, type: "margin" | "padding"): number {
    let getArray = [];
    if (type === "padding") {
      getArray = this._paddingArray;
      getArray[2] = `${this._paddingBottomPx.toString()}px`;
    }
    else {
      getArray = css.split(" ")
    }
    
    if (!CSS.supports(type, css)) {
      throw new Error(`"Invalid css (Auto is not allowed on a ${type})`);
    }

    if (getArray.length === 1 || getArray.length === 2) {
      return ( parseInt(getArray[0]) * 2 ) + 1
    }
    else if (getArray.length === 3) {
      return ( parseInt(getArray[1]) * 2 ) + 1
    }
    else if (getArray.length === 4) {
      return (parseInt(getArray[0]) + parseInt(getArray[2])) + 1;
    }
    else {
      throw new Error(`Invalid css (${type})`);
    }
  }
  ngAfterViewInit(): void {
    this.GetParentHeightCssBugFix();
  }
  @HostListener('window:resize', ['$event'])
  private GetParentHeightCssBugFixResize(): void {
    this.GetParentHeightCssBugFix();
  }
  // ============================== /CSS bug: https://bugs.webkit.org/show_bug.cgi?id=26559 ==============================

}
