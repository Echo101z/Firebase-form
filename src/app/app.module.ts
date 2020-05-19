import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ResComponent } from './test/res/res.component';
import { FormsModule } from '@angular/forms';
import { CousinComponent } from './cousin/cousin.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { Plugins, AppState } from '@capacitor/core';
const { App } = Plugins;
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ResComponent,
    CousinComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


Plugins.App.addListener('backButton', Plugins.App.exitApp);
