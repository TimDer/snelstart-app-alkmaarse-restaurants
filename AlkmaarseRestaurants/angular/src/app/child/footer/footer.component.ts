import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public CopyrightDate: Date;

  constructor() {
    this.CopyrightDate = new Date();
  }

  ngOnInit(): void {
  }

}
