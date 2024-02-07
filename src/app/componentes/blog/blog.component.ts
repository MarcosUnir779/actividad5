import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { INoticia } from '../../interfaces/inoticia.interface';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

  arrNoticias: INoticia[] = [ 
  {
    titulo: "Las marchas agrarias llegan al centro de Barcelona",
    imagenUrl: "https://www.rtve.es/noticias/20240207/agricultores-vuelven-provocar-cortes-carreteras-varias-provincias-espana/15959323.shtml",
    cuerpoTexto: "Las marchas agrarias han llegado este miércoles a las calles de Barcelona en la segunda jornada de protestas en todo el país. Las tractoradas han causado durante toda la jornada cortes de carreteras en 17 provincias para pedir precios justos por sus productos, rechazar la complejidad de la normativa de la Unión Europea y reclamar el mantenimiento de la rebaja fiscal al gasóleo agrícola. ",
    fecha: "2024-02-07"
  },
  {
    titulo: "Juanma Castaño y el derbi asturiano, en COPE Asturias: 'El Oviedo es favorito'",
    imagenUrl: "https://www.cope.es/emisoras/asturias/asturias-provincia/deportes-cope-asturias/noticias/juanma-castano-derbi-asturiano-cope-asturias-oviedo-favorito-20240207_3133968",
    cuerpoTexto: "Juanma Castaño ya siente el derbi asturiano. El director del Partidazo de COPE, que se encuentra en Asturias estos días, ha hablado sobre el duelo entre Real Sporting y Real Oviedo de este sábado (18:30 horas) en El Molinón, en Deportes COPE Asturias.",
    fecha: "2024-02-07"
  }
];

  newNoticia: INoticia ={
    titulo: "",
    imagenUrl: "",
    cuerpoTexto: "",
    fecha: ""
  }

  inputsRellenos(): boolean {
    return this.newNoticia.titulo.trim() !== '' && this.newNoticia.imagenUrl.trim() !== '' && this.newNoticia.cuerpoTexto.trim() !== '' && this.newNoticia.fecha.trim() !== '';
  }

  crearNoticia(): void{
    this.arrNoticias.push(this.newNoticia);
    this.newNoticia = {
      titulo: "",
      imagenUrl: "",
      cuerpoTexto: "",
      fecha: ""
    }
  }

  cargarDatos(): string{
    let html = ""
    this.arrNoticias.forEach( element =>{
      html+= `<p><strong>Título: </strong>${element.titulo} <br><strong>Imagen: </strong> <a href="${element.imagenUrl} target="_blank">${element.imagenUrl}</a><br>${element.cuerpoTexto}<br><strong>Fecha: </strong>${element.fecha}</p>`
    })
    return html;
  }

}
