import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample.component';
import { SampleDirective } from './sample.directive';
import { SamplePipe } from './sample.pipe';
import { SampleService } from './sample.service';

import { PipesModule } from './pipes/pipes.module';

export * from './sample.component';
export * from './sample.directive';
export * from './sample.pipe';
export * from './sample.service';

@NgModule({
  imports: [
    CommonModule,
    PipesModule
  ],
  declarations: [
    SampleComponent,
    SampleDirective,
    SamplePipe,
    PipesModule
  ],
  exports: [
    SampleComponent,
    SampleDirective,
    SamplePipe,
    PipesModule
  ]
})
export class SampleModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SampleModule,
      providers: [SampleService]
    };
  }
}
