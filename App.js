import React, { useState } from 'react';
import AvatarCanvas from './components/AvatarCanvas';
import ControlPanel from './components/ControlPanel';
import { AppContainer } from './styles';

const defaultAvatar = {
  face: 'round',
  eyes: 'happy',
  hair: 'short',
  clothes: 'tshirt',
  background: '#f0f0f0'
};

function App() {
  const [avatarConfig, setAvatarConfig] = useState(defaultAvatar);

  const handleFeatureChange = (feature, value) => {
    setAvatarConfig((prev) => ({
      ...prev,
      [feature]: value
    }));
  };

  const handleRandomize = () => {
    const randomAvatar = {
      face: Math.random() > 0.5 ? 'round' : 'square',
      eyes: Math.random() > 0.5 ? 'happy' : 'sad',
      hair: Math.random() > 0.5 ? 'short' : 'long',
      clothes: Math.random() > 0.5 ? 'tshirt' : 'hoodie',
      background: '#' + Math.floor(Math.random()*16777215).toString(16)
    };
    setAvatarConfig(randomAvatar);
  };

  return (
    <AppContainer>
      <AvatarCanvas config={avatarConfig} />
      <ControlPanel config={avatarConfig} onFeatureChange={handleFeatureChange} onRandomize={handleRandomize} />
    </AppContainer>
  );
}

export default App;
