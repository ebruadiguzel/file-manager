import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-file-upload',
  templateUrl: '../file-upload.component.html'
})
export class FileUploadComponent {

  selectedFile: File | null = null;

  constructor(private http: HttpClient) { }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile, this.selectedFile.name);

      this.http.post('https://localhost:7286/api/files/upload', formData)
        .subscribe(response => {
            debugger;
          console.log('Upload success:', response);
        });
    }
  }
}
