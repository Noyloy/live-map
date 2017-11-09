import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import {MapService} from '../services/map.service';

@Component({
  selector: 'app-map-box',
  templateUrl: './map-box.component.html',
  styleUrls: ['./map-box.component.css']
})
export class MapBoxComponent implements OnInit {

  // default settings
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/satellite-streets-v10';
  lat = 32.055498
  lon = 34.8957511
  message = 'Hello World!';

  // data
  source: any;
  markers: any;
  
  constructor() { }

  ngOnInit() {
  }

}
