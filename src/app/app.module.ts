import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoTareasComponent } from './listado-tareas/listado-tareas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { WebService } from './web.service';

@NgModule({
  declarations: [
    AppComponent,
    ListadoTareasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
  
  ],
  providers: [
    WebService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
