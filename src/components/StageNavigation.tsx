// src/components/StageNavigation.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { stages } from '@/lib/data';
import { StageKey } from '@/types';  // Import StageKey

interface StageNavigationProps {
  activeStage: StageKey;
  setActiveStage: (stageId: StageKey) => void;
  onReviewLifecycle: () => void;  // Add this prop
}

export default React.memo(function StageNavigation({ 
  activeStage, 
  setActiveStage, 
  onReviewLifecycle 
}: StageNavigationProps) {
  const handleNextStage = () => {
    const currentIndex = stages.findIndex(stage => stage.id === activeStage);
    if (currentIndex < stages.length - 1) {
      setActiveStage(stages[currentIndex + 1].id as StageKey);
    }
  };

  const handlePreviousStage = () => {
    const currentIndex = stages.findIndex(stage => stage.id === activeStage);
    if (currentIndex > 0) {
      setActiveStage(stages[currentIndex - 1].id as StageKey);
    }
  };

  const isLastStage = activeStage === stages[stages.length - 1].id;

  return (
    <div className="flex justify-between items-center mt-8">
      <Button variant="outline" onClick={handlePreviousStage} disabled={activeStage === 'setup'}>
        Previous Stage
      </Button>
      {isLastStage ? (
        <Button 
          onClick={onReviewLifecycle}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Review Lifecycle <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      ) : (
        <Button 
          onClick={handleNextStage} 
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Next Stage <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      )}
    </div>
  );
});