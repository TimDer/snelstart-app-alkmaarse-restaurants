import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular';

  public MainAreaWidth: number = 0;

  ngOnInit(): void {
    this.SetMainAreaWidth();
  }

  @HostListener("window:resize")
  private ResetMainAreaWidth() {
    this.SetMainAreaWidth();
  }

  private SetMainAreaWidth(): void {
    const windowWidth = window.innerWidth;
    
    this.MainAreaWidth = 1280;

    if (windowWidth <= 1310) {
      this.MainAreaWidth = windowWidth - 30;
    }
  }
}
