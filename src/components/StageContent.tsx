// src/components/StageContent.tsx
'use client'

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Trash2, PlusCircle } from 'lucide-react';
import { stageQuestions } from '@/lib/data';
import { Stage, Task, StageKey } from '../types';

export default function StageContent({ 
  stage, 
  tasks, 
  onToggleTask, 
  onDeleteTask, 
  onAddTask 
}: {
  stage: StageKey;
  tasks: Task[];
  onToggleTask: (stage: StageKey, taskId: number) => void;
  onDeleteTask: (stage: StageKey, taskId: number) => void;
  onAddTask: (stage: StageKey, task: Task) => void;
}) {
  const [newTask, setNewTask] = useState('');
  const [stageNotes, setStageNotes] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      onAddTask(stage, { id: Date.now(), name: newTask.trim(), completed: false });
      setNewTask('');
    }
  };

  return (
    <div className="space-y-6">
      

      <Card className="mt-8 border-primary/20">
        <CardHeader className="pb-2">
          <CardTitle>Stage Questions</CardTitle>
        </CardHeader>
        <CardContent className="pt-2">
          <ul className="list-disc pl-5 space-y-3">
            {stageQuestions[stage].map((question, index) => (
              <li key={index}>{question}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Stage Notes</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea 
            placeholder="Enter your notes and answers to the questions above..."
            value={stageNotes}
            onChange={(e) => setStageNotes(e.target.value)}
            rows={6}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Stage Tasks</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 mb-4">
            {tasks.map(task => (
              <div key={task.id} className="flex items-center space-x-2">
                <Checkbox 
                  checked={task.completed} 
                  onCheckedChange={() => onToggleTask(stage, task.id)}
                />
                <span className={task.completed ? 'line-through text-gray-500' : ''}>{task.name}</span>
                <Button variant="ghost" size="sm" onClick={() => onDeleteTask(stage, task.id)}>
                  <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
              </div>
            ))}
          </div>
          <Separator className="my-4" />
          <div className="flex space-x-2">
            <Input
              placeholder="Add new task"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="flex-grow"
            />
            <Button onClick={handleAddTask}>
              <PlusCircle className="h-4 w-4 mr-2" /> Add
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}