import React from 'react';
import '../App.css';
import VectorMap, {
  Label,
  Layer,
  Legend,
  Source,
  Tooltip
} from 'devextreme-react/vector-map';

import * as mapsData from 'devextreme/dist/js/vectormap-data/world.js';
import { markers } from './map-values';

const sizeGroups = [1, 5, 10, 40];

const bounds = [-180, 85, 180, -60];

export default function MapChart() {
  return (
    <div class="map">
      <h3>Books from around the world</h3>
        
      <VectorMap id="vector-map" bounds={bounds}>
        <Layer
          dataSource={mapsData.world}
          hoverEnabled={false}>
        </Layer>
        <Layer
          dataSource={markers}
          name="bubbles"
          elementType="bubble"
          dataField="value"
          minSize={20}
          maxSize={40}
          sizeGroups={sizeGroups}
          opacity="0.7">
          <Label enabled={false}></Label>
        </Layer>
        <Tooltip 
          enabled={true}
          customizeTooltip={customizeTooltip}>
        </Tooltip>
        <Legend
          markerShape="circle"
          customizeItems={customizeItems}
          customizeText={customizeText}>
          <Source layer="bubbles" grouping="size"></Source>
        </Legend>
        <Tooltip 
          enabled={true}
          customizeTooltip={customizeTooltip} />
      </VectorMap>
    </div>
  );
}

function customizeTooltip(arg) {
  if (arg.layer.type === 'marker') {
    return { text: arg.attribute('tooltip') };
  }
}

function customizeText(arg) {
  return ['< 5', '5 to 10', '> 10'][arg.index];
}

function customizeItems(items) {
  return items.reverse();
}
