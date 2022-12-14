import { Component } from '@angular/core';

import { INgxUtilsValues } from '@ngx-utils';

@Component({
    selector: 'app-values',
    templateUrl: './values.component.html',
    styleUrls: ['./values.component.scss'],
})
export class ValuesComponent {
    public values: INgxUtilsValues[] = [
        { title: 'عبارت متنی فارسی', value: 'مقدار عبارت متنی فارسی', copy: true },
        { title: 'عبارت متنی انگلیسی', value: 'english text', copy: true },
        { title: 'کارت بانکی', value: { type: 'BANK-CARD', value: '1234123412341238', en: true }, copy: true },
        { title: 'تاریخ', value: { type: 'DATE', value: new Date() }, copy: true },
        {
            title: 'مدت زمان',
            value: { type: 'DURATION', value: new Date(new Date().getTime() - 123456789) },
            copy: true,
        },
        { title: 'ایمیل', value: { type: 'EN', value: 'email@domain.com' }, copy: true },
        { title: 'موبایل', value: { type: 'MOBILE', value: '09122545391', en: true }, copy: true },
        {
            title: 'متن چند خطی فارسی',
            value: { type: 'MULTILINE', value: 'متن\nچند\nخطی\nفارسی' },
            block: true,
            copy: true,
        },
        {
            title: 'متن چند خطی انگلیسی',
            value: { type: 'MULTILINE', value: 'english\nmultiline\ntext' },
            block: true,
            copy: true,
        },
        { title: 'مقدار عددی', value: { type: 'NUMBER', value: 123456789 }, copy: true },
        { title: 'قیمت', value: { type: 'PRICE', value: 12300000 }, copy: true },
    ];
}
