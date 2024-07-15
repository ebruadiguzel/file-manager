import { BrowserModule } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../app/app.component';
import { LoginComponent } from '../components/login.component';
import { FileListComponent } from '../components/file-list.component';
import { FileUploadComponent } from '../components/file-upload.component';
import { AuthService } from '../services/auth/auth.service';
import { AuthGuard } from '../auth.guard';
import { JwtInterceptor } from '../jwt.interceptor';
import { RouterModule,Routes } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';


@NgModule({
  declarations: [
    LoginComponent,
    FileListComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    NgFor
],
  providers: [
    AuthService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  schemas : [NO_ERRORS_SCHEMA]
  
})
export class AppModule { }
