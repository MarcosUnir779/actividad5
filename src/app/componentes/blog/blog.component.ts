import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

  arrNoticias: any[] = []

  newNoticia: any ={
    'titulo': "",
    'imagen': "",
    'texto': "",
    'fecha': ""
  }
  constructor(){

  }

  crearNoticia(ev: any): void{

  }

  imprime(){
    console.log(this.newNoticia)
  }
}
