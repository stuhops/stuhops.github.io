import { ValidatorFn, Validators } from '@angular/forms';

export const colorValidator: ValidatorFn = Validators.pattern(/#([0-9a-f]{3}){1,2}/);
