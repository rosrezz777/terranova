import React from "react"
import { YMaps, Map } from "@pbe/react-yandex-maps"
import './map_yandex.css'

const MapYandex = () => {
    return (
        <div className="map_container">
            <YMaps>
                <Map className="yandex_map" defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
            </YMaps>
        </div> 
     );
}
 
export default MapYandex;