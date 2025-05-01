import React from 'react';
import LanguageToggle from '../components/LanguageToggle';
import ScoreVisualization from '../components/ScoreVisualization';
import VideoChat from '../components/VideoChat';
import VoiceAssistant from '../components/VoiceAssistant';

const IndexPage = () => {
  const scores = [
    { category: 'Technical', score: 85 },
    { category: 'Behavioral', score: 90 },
  ];

  return (
    <div>
      <h1>Welcome to Copa Multilingual Platform</h1>
      <LanguageToggle />
      <ScoreVisualization scores={scores} />
      <VideoChat />
      <VoiceAssistant />
    </div>
  );
};

export default IndexPage;
