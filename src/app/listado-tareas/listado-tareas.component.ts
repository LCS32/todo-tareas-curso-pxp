import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { WebService } from '../web.service';


@Component({
  selector: 'app-listado-tareas',
  templateUrl: './listado-tareas.component.html',
  styleUrls: ['./listado-tareas.component.css']
})

export class ListadoTareasComponent implements OnInit {

  tareas: any;

  constructor(private webservice: WebService) { }



  async ngOnInit() {
    
    let respuesta = await firstValueFrom(this.webservice.getTask())
    this.tareas = respuesta;
  }
  

  
   


  


 

}
