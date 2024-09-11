// src/components/ProjectDashboard.tsx
'use client'

import React, { useState, useEffect } from 'react';
import { stages, initialTasks } from '@/lib/data';
import { Task, TaskStage, StageKey } from '@/types';  // Update this import
import StageContent from '@/components/StageContent';
// Remove the following line:
import AIAssistant from '@/components/AIAssistant';
import StageNavigation from '@/components/StageNavigation';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

type StageId = StageKey;

export default function ProjectDashboard() {
  const [activeStage, setActiveStage] = useState<StageKey>('setup');
  const [tasks, setTasks] = useState<Record<StageKey, Task[]>>(initialTasks);
  const [progress, setProgress] = useState<Record<string, number>>({});

  useEffect(() => {
    const newProgress = (Object.keys(tasks) as Array<keyof typeof tasks>).reduce((acc, stage) => {
      const stageTasks = tasks[stage] || [];
      acc[stage] = stageTasks.length > 0 
        ? Math.round((stageTasks.filter(t => t.completed).length / stageTasks.length) * 100)
        : 0;
      return acc;
    }, {} as Record<keyof typeof tasks, number>);
    setProgress(newProgress);
  }, [tasks]);

  const handleToggleTask = (stage: StageId, id: number) => {
    setTasks(prevTasks => ({
      ...prevTasks,
      [stage]: (prevTasks[stage] || []).map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    }));
  };

  const handleDeleteTask = (stage: StageId, id: number) => {
    setTasks(prevTasks => ({
      ...prevTasks,
      [stage]: prevTasks[stage].filter(task => task.id !== id)
    }));
  };

  const handleAddTask = (stage: StageId, newTask: Task) => {
    setTasks(prevTasks => ({
      ...prevTasks,
      [stage]: [...(prevTasks[stage] || []), newTask]
    }));
  };

  return (
    <TooltipProvider>
      <div className="p-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">AI Lifecycle Auditor</h1>
        
        <Tabs value={activeStage} onValueChange={(value) => setActiveStage(value as StageKey)} className="mb-8">
          <TabsList className="grid grid-cols-5 gap-4">
            {stages.map((stage) => (
              <TabsTrigger 
                key={stage.id} 
                value={stage.id}
                className={`flex flex-col items-center p-2 ${
                  activeStage === stage.id ? `bg-${stage.color}-100 border-${stage.color}-500` : ''
                }`}
              >
                <stage.icon className={`w-6 h-6 mb-1 text-${stage.color}-500`} />
                <span className="text-xs">{stage.title}</span>
                <Badge variant="secondary" className="mt-1">
                  {progress[stage.id] || 0}%
                </Badge>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="flex gap-6">
          <div className="flex-grow">
            <StageContent 
              stage={activeStage}
              tasks={tasks[activeStage]}
              onToggleTask={handleToggleTask}
              onDeleteTask={handleDeleteTask}
              onAddTask={handleAddTask}
            />
          </div>
          <div className="w-1/3">
            <AIAssistant stage={activeStage} progress={progress[activeStage] || 0} />
          </div>
        </div>

        <StageNavigation 
          activeStage={activeStage} 
          setActiveStage={(stageId: StageKey) => setActiveStage(stageId)}
          onReviewLifecycle={() => {/* Add your review lifecycle logic here */}}
        />
      </div>

      
    </TooltipProvider>
  );
}