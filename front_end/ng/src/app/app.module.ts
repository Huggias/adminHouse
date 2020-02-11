import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http"
/* Routing */
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

/* Angular Material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

/* FormsModule */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Angular Flex Layout */
import { FlexLayoutModule } from "@angular/flex-layout";

/* Components */
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { InterfazComponent } from './components/interfaz/interfaz.component';
import { from } from 'rxjs';
import { LoginDialogErrorComponent } from './components/login-dialog-error/login-dialog-error.component';
import { ComprasComponent } from './components/compras/compras.component';
import { CardcoComponent } from './components/cardco/cardco.component';

/* guars */
import { AuthGuard } from "./guards/auth.guard";

/* interceptors */

import { TokenInterceptorService } from "./services/token-interceptor.service";
import { TablaComponent } from './components/tabla/tabla.component';
import { InfoComprasComponent } from './components/info-compras/info-compras.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    SidenavComponent,
    ToolbarComponent,
    EstadisticasComponent,
    InterfazComponent,
    LoginDialogErrorComponent,
    ComprasComponent,
    CardcoComponent,
    TablaComponent,
    InfoComprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  entryComponents: [
    LoginDialogErrorComponent
 ],
  providers: [
    AuthGuard,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : TokenInterceptorService,
      multi : true
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
