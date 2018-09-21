import { Component } from '@angular/core';
import { Home } from './components/home/home';
//import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  readonly URL_API = 'https://notasfrafael.mybluemix.net'
  dados = {}

 // constructor(private http: HttpClient) {}

  trazDados() {
   // this.dados = this.http.get(this.URL_API + '/carrega-notas')
  }
}
