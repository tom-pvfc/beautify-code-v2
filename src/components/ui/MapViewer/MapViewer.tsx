import * as React from 'react';
import { useState } from 'react';
import Toggle from '../Toggle/Toggle';
import { RES_URL } from '../../../config';

const MapViewer = () => {

    let ukItem = TOGGLE_ITEMS[0];
    let londonItem = TOGGLE_ITEMS[1];

    const [mapKey, setToggleActive] = useState(ukItem.key);

    return (
        <div className="map-viewer">

            <h2 className='map-viewer__title' >This is the map viewer</h2>
            <div className="map-viewer__toggle">
                <Toggle
                    item1={ukItem}
                    item2={londonItem}
                    change={setToggleActive}
                    active={mapKey}
                />
            </div>
            <div className="map-viewer__map">
                {
                    mapKey == ukItem.key ?
                        <div key={`map-viewer-${ukItem.key}`} className="map-viewer__map--uk animated fadeIn delay-2">
                            <img src={RES_URL + `img/maps/${ukItem.imgSrc}`} />
                        </div>
                        :
                        <div key={`map-viewer-${londonItem.key}`} className="map-viewer__map--london animated fadeIn delay-2">
                            <img src={RES_URL + `img/maps/${londonItem.imgSrc}`} />
                        </div>
                }
            </div>
        </div>
    )
}

const TOGGLE_ITEMS = [
    {
        key: "uk",
        title: "Map of UK",
        description: "This is the map of the UK",
        imgSrc: "uk-map.png"
    },
    {
        key: "london",
        title: "Map of London Borough",
        description: "This is the map of London",
        imgSrc: "london-map.jpg"
    }
]

export default MapViewer;
