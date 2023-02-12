import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-image',
  templateUrl: './banner-image.component.html',
  styleUrls: ['./banner-image.component.scss'],
})
export class BannerImageComponent implements OnInit {
  @Input() imageSource!: string;

  ngOnInit(): void {
    this._validateInputs();
  }

  _validateInputs(): void {
    let problem: string | null = null;
    if (!this.imageSource) problem = 'imageSource';
    if (problem)
      throw Error(`Cannot access banner-image component without a valid ${problem} input`);
  }
}
