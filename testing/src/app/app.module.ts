import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';

import { NgxUtilsModule } from '@ngx-utils';

import { AppComponent } from './app.component';

import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { BoxComponent } from './box/box.component';
import { DialogComponent } from './dialog/dialog.component';
import { PipeComponent } from './pipe/pipe.component';

@NgModule({
    declarations: [AppComponent, BottomSheetComponent, BoxComponent, DialogComponent, PipeComponent],
    imports: [CommonModule, BrowserModule, BrowserAnimationsModule, MatButtonModule, NgxUtilsModule.forRoot()],
    providers: [],

    bootstrap: [AppComponent],
})
export class AppModule {}
