import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { JalaliDateTime, JalaliDateTimePeriod } from '@webilix/jalali-date-time';
import { Validator } from '@webilix/validator-library';

import { INgxUtilsCalendarConfig } from '../../../interfaces/ngx-utils-calendar';

@Component({
    templateUrl: './ngx-utils-calendar-month.component.html',
    styleUrls: ['./ngx-utils-calendar-month.component.scss'],
})
export class NgxUtilsCalendarMonthComponent implements OnInit {
    private jalali = JalaliDateTime({ timezone: this.timezone });

    public title: string = this.data.title || 'انتخاب ماه';
    public today: string = '';
    public minDate: string = '';
    public maxDate: string = '';

    public current: string = '';
    public year: number = 0;

    public seasons: { title: string; month: string }[][] = [
        [
            { title: 'فروردین', month: '' },
            { title: 'اردیبهشت', month: '' },
            { title: 'خرداد', month: '' },
        ],
        [
            { title: 'تیر', month: '' },
            { title: 'مرداد', month: '' },
            { title: 'شهریور', month: '' },
        ],
        [
            { title: 'مهر', month: '' },
            { title: 'آبان', month: '' },
            { title: 'آذر', month: '' },
        ],
        [
            { title: 'دی', month: '' },
            { title: 'بهمن', month: '' },
            { title: 'اسفند', month: '' },
        ],
    ];

    constructor(
        @Inject('NGX_UTILS_TIMEZONE') public readonly timezone: string,
        @Inject(MAT_DIALOG_DATA) private readonly data: INgxUtilsCalendarConfig,
        private readonly dialogRef: MatDialogRef<NgxUtilsCalendarMonthComponent>,
    ) {}

    ngOnInit(): void {
        this.today = this.jalali.toString(new Date(), { format: 'Y-M' });
        this.minDate = this.data.minDate ? this.jalali.toString(this.data.minDate, { format: 'Y-M' }) : '0000-00';
        this.maxDate = this.data.maxDate ? this.jalali.toString(this.data.maxDate, { format: 'Y-M' }) : '9999-99';

        const value: Date | null =
            this.data.value === undefined ? null : Validator.VALUE.isDate(this.data.value) ? this.data.value : null;

        this.current = value ? this.jalali.toString(value, { format: 'Y-M' }) : '';
        this.changeYear(+(this.current ? this.current.substring(0, 4) : this.today.substring(0, 4)));
    }

    changeYear(year?: number): void {
        this.year = year ? year : +this.today.substring(0, 4);
        this.seasons.forEach((season, s: number) => {
            season.forEach((month, m: number) => {
                month.month = `${this.year.toString()}-${(s * 3 + m + 1).toString().padStart(2, '0')}`;
            });
        });
    }

    setMonth(month: string): void {
        if ((this.minDate && month < this.minDate) || (this.maxDate && month > this.maxDate)) return;

        const date: Date = new Date(this.jalali.gregorian(`${month}-01`).date);
        const period: JalaliDateTimePeriod = this.jalali.periodMonth(1, date);
        this.dialogRef.close({ from: period.from, to: period.to });
    }
}
