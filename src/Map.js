import React, {Component} from "react";
import ReactDOM from "react-dom";
import * as ol from "openlayers";

export default class Map extends Component {
    componentDidMount () {

        let map = new ol.Map({
        layers: [
          new ol.layer.Tile({
            source: new ol.source.Stamen({
              layer: 'toner'
            })
          }),
          new ol.layer.Tile({
            source: new ol.source.Stamen({
              layer: 'terrain-labels'
            })
          })
        ],
        target: ReactDOM.findDOMNode(this),
        view: new ol.View({
          center: ol.proj.transform(
              [-122.416667, 37.783333], 'EPSG:4326', 'EPSG:3857'),
          zoom: 12
        })
      });

        // Example taken from http://stackoverflow.com/questions/26755251/good-way-to-combine-react-and-leaflet
        // var map = this.map = L.map(React.findDOMNode(this), {
        //     minZoom: 2,
        //     maxZoom: 20,
        //     layers: [
        //         L.tileLayer(
        //             'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        //             {attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})
        //     ],
        //     attributionControl: false,
        // });

        // map.on('click', this.onMapClick);
        // map.fitWorld();
    }

    componentWillUnmount () {
        //this.map.off('click', this.onMapClick);
        this.map = null;
    }

    onMapClick () {
        // Do some wonderful map things...
    }

    render () {
        return (
            <div className='map'></div>
        );
    }
}