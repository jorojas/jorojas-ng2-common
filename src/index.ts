import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample.component';
import { SampleDirective } from './sample.directive';
import { SamplePipe } from './sample.pipe';
import { SampleService } from './sample.service';

import { CopyrightPipe } from './copyright.pipe';

export * from './sample.component';
export * from './sample.directive';
export * from './sample.pipe';
export * from './sample.service';

export * from './copyright.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SampleComponent,
    SampleDirective,
    SamplePipe,
    CopyrightPipe
  ],
  exports: [
    SampleComponent,
    SampleDirective,
    SamplePipe,
    CopyrightPipe
  ]
})
export class NovoCommonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NovoCommonModule,
      providers: [SampleService]
    };
  }
}
