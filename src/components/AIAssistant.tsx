// src/components/AIAssistant.tsx
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { WandSparkles  } from 'lucide-react';
import { getAIInsight } from '@/lib/aiInsights';

function useAIInsight(stage: string) {
  const [insight, setInsight] = useState<string>('');

  useEffect(() => {
    setInsight(getAIInsight(stage));
  }, [stage]);

  return insight;
}

export default function AIAssistant({ stage, progress }: { stage: string; progress: number }) {
  const insight = useAIInsight(stage);

  return (
    <Card className="bg-blue-50 border-blue-200 mt-6">
      <CardHeader>
        <CardTitle className="text-lg font-medium flex items-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 via-yellow-500">
          <WandSparkles className="w-5 h-5 mr-2 text-blue-500" /> 
          CAITI Assistant
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-4">{insight}</p>
        <Progress value={progress} className="h-2" />
        <p className="text-xs text-muted-foreground mt-2">Stage Progress: {progress}%</p>
      </CardContent>
    </Card>
  );
}