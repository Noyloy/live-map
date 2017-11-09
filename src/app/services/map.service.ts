import { Injectable } from "@angular/core";
import { environment } from '../../environments/environment';
import { AngularFireDatabase , FirebaseListObservable } from "angularfire2/database-deprecated";
import * as mapboxgl from 'mapbox-gl';

@Injectable()
export class MapService {
    constructor(private db: AngularFireDatabase) {
        mapboxgl.accessToken = environment.mapbox.accessToken;
    }
    
    getMarkers(): FirebaseListObservable<any> {
        return this.db.list('/markers');
    }
}