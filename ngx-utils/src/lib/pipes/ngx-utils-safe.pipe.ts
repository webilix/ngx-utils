import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl, SafeScript, SafeStyle, SafeUrl } from '@angular/platform-browser';

import { Validator } from '@webilix/validator-library';

@Pipe({ name: 'ngxUtilsSafe' })
export class NgxUtilsSafePipe implements PipeTransform {
    constructor(private readonly sanitizer: DomSanitizer) {}

    transform(
        value: string,
        type: 'HTML' | 'STYLE' | 'SCRIPT' | 'URL' | 'RESOURCE_URL' = 'HTML',
    ): string | SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
        if (!Validator.VALUE.isString(value) || value === '') return '';

        switch (type) {
            case 'STYLE':
                return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'SCRIPT':
                return this.sanitizer.bypassSecurityTrustScript(value);
            case 'URL':
                return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'RESOURCE_URL':
                return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            case 'HTML':
            default:
                return this.sanitizer.bypassSecurityTrustHtml(value);
        }
    }
}
