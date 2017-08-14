import { NgModule, ModuleWithProviders } from '@angular/core';
import { PoweredByPipe } from './powered-by/powered-by';
@NgModule({
	declarations: [PoweredByPipe],
	imports: [],
	exports: [PoweredByPipe]
})
export class PipesModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: PipesModule
		};
	}
}
