import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EnrolleeFormComponent } from './enrollee-form/enrollee-form.component';
import { EnrolleeListItemComponent } from './enrollee-list-item/enrollee-list-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';
import { collectionReducer } from './state/collection.reducer';
import { enrolleesReducer } from './state/enrollee.reducer';
import { AppState } from './state/app.state';
import {
  requestEnrolleeList,
  retrievedEnrolleeList,
} from './state/enrollee.actions';
import { EnrolleeEffects } from './state/enrollee.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    EnrolleeFormComponent,
    EnrolleeListItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      enrollee: enrolleesReducer,
    }),
    EffectsModule.forRoot([EnrolleeEffects]),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (store: Store<AppState>) => {
        return () => {
          console.log('App init -> LoadEnrolleesRequested');
          store.dispatch(requestEnrolleeList());
        };
      },
      deps: [Store],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
