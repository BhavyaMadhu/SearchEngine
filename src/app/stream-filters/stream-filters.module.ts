import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { streamFilterReducer } from './stream-filters.reducer';
import { PageFiltersComponent } from './page-filters/page-filters.component';

@NgModule({
  imports: [
      CommonModule,
      StoreModule.forFeature('streamFilters', streamFilterReducer)
  ],
  declarations: [PageFiltersComponent],
    exports: [ PageFiltersComponent ]
})
export class StreamFiltersModule { }
