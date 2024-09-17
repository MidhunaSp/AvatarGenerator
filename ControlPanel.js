import React from 'react';
import { PanelContainer, Select, Label, Button } from '../styles';

const ControlPanel = ({ config, onFeatureChange, onRandomize }) => {
  return (
    <PanelContainer>
      <Label>Face</Label>
      <Select value={config.face} onChange={(e) => onFeatureChange('face', e.target.value)}>
        <option value="round">Round</option>
        <option value="square">Square</option>
      </Select>

      <Label>Eyes</Label>
      <Select value={config.eyes} onChange={(e) => onFeatureChange('eyes', e.target.value)}>
        <option value="happy">Happy</option>
        <option value="sad">Sad</option>
      </Select>

      <Label>Hair</Label>
      <Select value={config.hair} onChange={(e) => onFeatureChange('hair', e.target.value)}>
        <option value="short">Short</option>
        <option value="long">Long</option>
      </Select>

      <Label>Clothes</Label>
      <Select value={config.clothes} onChange={(e) => onFeatureChange('clothes', e.target.value)}>
        <option value="tshirt">T-shirt</option>
        <option value="hoodie">Hoodie</option>
      </Select>

      <Label>Background</Label>
      <input
        type="color"
        value={config.background}
        onChange={(e) => onFeatureChange('background', e.target.value)}
      />

      <Button onClick={onRandomize}>Randomize</Button>
    </PanelContainer>
  );
};

export default ControlPanel;
