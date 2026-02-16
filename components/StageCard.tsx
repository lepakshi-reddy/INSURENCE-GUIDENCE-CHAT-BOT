
import React from 'react';
import { ClaimStageInfo } from '../types';

interface StageCardProps {
  stage: ClaimStageInfo;
  isActive: boolean;
  onClick: () => void;
}

export const StageCard: React.FC<StageCardProps> = ({ stage, isActive, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`p-4 rounded-xl border transition-all cursor-pointer ${
        isActive 
          ? 'bg-blue-50 border-blue-500 shadow-sm' 
          : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-xs'
      }`}
    >
      <div className="text-3xl mb-2">{stage.icon}</div>
      <h3 className={`font-semibold mb-1 ${isActive ? 'text-blue-700' : 'text-slate-800'}`}>
        {stage.title}
      </h3>
      <p className="text-xs text-slate-500 line-clamp-2">
        {stage.description}
      </p>
    </div>
  );
};
