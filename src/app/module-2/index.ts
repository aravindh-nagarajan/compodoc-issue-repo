import { NgModule } from '@angular/core';

import { SecondComponent } from './second-component';

const components = [
  SecondComponent,
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

export class ModuleTwo { }
