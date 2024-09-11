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
    <Card className="mt-6 border border-gray-200 rounded-lg shadow-sm">
      <CardHeader className="pb-4 border-b px-6 pt-6">
        <CardTitle className="text-xl font-semibold flex items-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 via-yellow-500">
          <WandSparkles className="w-5 h-5 mr-2 text-blue-500" /> 
          CAITI Assistant
        </CardTitle>
        <p className="text-sm text-muted-foreground mt-1">AI-powered insights and progress tracking</p>
      </CardHeader>
      <CardContent className="p-6">
        <p className="text-sm mb-4">{insight}</p>
        <Progress value={progress} className="h-2" />
        <p className="text-xs text-muted-foreground mt-2">Stage Progress: {progress}%</p>
      </CardContent>
    </Card>
  );
}