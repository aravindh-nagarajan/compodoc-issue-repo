import { NgModule } from '@angular/core';

import { FirstComponent } from './first-component';

const components = [
  FirstComponent,
];

@NgModule({
    declarations: [
        ...components,
    ],
    entryComponents: [
        ...components,
    ],
    exports: [
        ...components,
    ],
})

export class ModuleOne { }
