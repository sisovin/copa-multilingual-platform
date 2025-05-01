import React from 'react';

interface ScoreVisualizationProps {
  scores: { category: string; score: number }[];
}

const ScoreVisualization: React.FC<ScoreVisualizationProps> = ({ scores }) => {
  return (
    <div>
      <h2>Interview Scores</h2>
      <ul>
        {scores.map((score, index) => (
          <li key={index}>
            {score.category}: {score.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScoreVisualization;
