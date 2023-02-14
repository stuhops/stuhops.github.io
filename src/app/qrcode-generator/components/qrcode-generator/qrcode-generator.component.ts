import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { colorValidator } from '../../validators/color.validator';

@Component({
  selector: 'app-qrcode-generator',
  templateUrl: './qrcode-generator.component.html',
  styleUrls: ['./qrcode-generator.component.scss'],
})
export class QrCodeGeneratorComponent {
  form: FormGroup = this._builder.group({
    url: ['', Validators.required],
    backgroundColor: ['#ffffff', [Validators.required, colorValidator]],
    codeColor: ['#000000', [Validators.required, colorValidator]],
  });

  constructor(private _builder: FormBuilder) {}

  getFormVal(name: string): string | undefined {
    const value: undefined | string = this.form.get(name)?.value;
    return value;
  }
}
