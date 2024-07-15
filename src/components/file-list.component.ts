import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-file-list',
  standalone : true,
  templateUrl: '../file-list.component.html',
  imports: [CommonModule],
  schemas : [NO_ERRORS_SCHEMA]
})
export class FileListComponent implements OnInit {

  files: any[] = [];
  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  requestOptions : any = {                                                                                                                                                                                 
    headers: new Headers(this.headerDict), 
  };

  constructor(private http: HttpClient) { 
 
    
  }

  ngOnInit() {
    this.loadFiles();
  }

  loadFiles() {
    debugger;
    this.http.get<any[]>('https://localhost:7286/api/files/list')
      .subscribe(data => {
        debugger;
        this.files = data;
      });
  }

  updateFileName(fileId: string, newFileName: string) {
    debugger;
    this.http.put('https://localhost:7286/api/files/edit', {id : fileId, newName: newFileName })
      .subscribe(response => {
        debugger;
        console.log('Update success:', response);
        this.loadFiles();
      });
  }
}
