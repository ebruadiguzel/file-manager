import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { LoginComponent } from '../components/login.component';
import { FileListComponent } from '../components/file-list.component';
import { FileUploadComponent } from '../components/file-upload.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'files', component: FileListComponent },
  { path: 'upload', component: FileUploadComponent },
  { path: '', redirectTo: '/files', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
