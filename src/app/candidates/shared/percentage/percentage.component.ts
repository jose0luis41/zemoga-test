import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-percentage',
  templateUrl: './percentage.component.html',
  styleUrls: ['./percentage.component.scss']
})
export class PercentageComponent implements OnInit {

  @Input() percentageUp: object;
  @Input() percentageDown: object;
  @Input() height: number;
  @Input() fontSize: number;
  @Input() lineHeight: number;
  @Input() fontSizeThumb: number;
  @Input() lineHeightThumb: number;

  constructor() { }

  ngOnInit() {
  }

}
