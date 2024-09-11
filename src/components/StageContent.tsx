// src/components/StageContent.tsx
'use client'

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Trash2, PlusCircle, MoreVertical } from 'lucide-react';
import { stageQuestions } from '@/lib/data';
import { Stage, Task, StageKey } from '../types';
import { DropdownMenuRoot, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const JiraLink = ({ jiraId }: { jiraId: string }) => (
  <a
    href={`https://your-jira-instance.atlassian.net/browse/${jiraId}`}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center space-x-1 text-xs text-blue-600 hover:text-blue-800 mr-2"
  >
    <svg className="w-4 h-4" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.9669 0.0306396C7.14866 0.0306396 0 7.17931 0 16.0001C0 24.8184 7.14866 31.9671 15.9669 31.9671C24.7877 31.9671 31.9363 24.8184 31.9363 16.0001C31.9363 7.17931 24.7877 0.0306396 15.9669 0.0306396ZM22.4847 22.7229L14.7488 22.7254L9.44912 17.4257L12.0183 14.8565L14.7463 17.5845L20.2459 9.27722L22.4847 22.7229Z" fill="#2684FF"/>
    </svg>
    <span>{jiraId}</span>
  </a>
);

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
      onAddTask(stage, { 
        id: Date.now(), 
        name: newTask.trim(), 
        completed: false, 
        jiraId: ''
      });
      setNewTask('');
    }
  };

  return (
    <div className="space-y-6">
      

      <Card className="mt-8 border border-gray-200 rounded-lg shadow-sm">
        <CardHeader className="pb-4 border-b px-6 pt-6">
          <CardTitle className="text-xl font-semibold text-primary">Stage Questions</CardTitle>
          <p className="text-sm text-muted-foreground mt-1">Key questions to guide you through this stage</p>
        </CardHeader>
        <CardContent className="p-6">
          <ul className="list-disc pl-5 space-y-3">
            {stageQuestions[stage].map((question, index) => (
              <li key={index}>{question}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="mt-6 border border-gray-200 rounded-lg shadow-sm">
        <CardHeader className="pb-4 border-b px-6 pt-6">
          <CardTitle className="text-xl font-semibold text-primary">Stage Notes</CardTitle>
          <p className="text-sm text-muted-foreground mt-1">Record your thoughts and answers to the stage questions</p>
        </CardHeader>
        <CardContent className="p-6">
          <Textarea 
            placeholder="Enter your notes and answers to the questions above..."
            value={stageNotes}
            onChange={(e) => setStageNotes(e.target.value)}
            rows={6}
          />
        </CardContent>
      </Card>

      <Card className="mt-6 border border-gray-200 rounded-lg shadow-sm">
        <CardHeader className="pb-4 border-b px-6 pt-6">
          <CardTitle className="text-xl font-semibold text-primary">Stage Tasks</CardTitle>
          <p className="text-sm text-muted-foreground mt-1">Manage and track tasks for this stage of the project</p>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-3 mb-4">
            {tasks.map(task => (
              <div key={task.id} className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-md shadow-sm transition-all hover:shadow-md">
                <div className="flex items-center space-x-3">
                  <Checkbox 
                    checked={task.completed} 
                    onCheckedChange={() => onToggleTask(stage, task.id)}
                    className="border-2 border-primary"
                  />
                  <span className={`${task.completed ? 'line-through text-gray-400' : 'text-gray-700'} font-medium ml-2`}>
                    {task.name}
                  </span>
                  {task.jiraId && <JiraLink jiraId={task.jiraId} />}
                </div>
                <div className="flex items-center space-x-2">
                  
                  <DropdownMenuRoot>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onSelect={() => onDeleteTask(stage, task.id)}>
                        Delete
                      </DropdownMenuItem>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenuRoot>
                </div>
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
            <Button onClick={handleAddTask} className="bg-primary text-white hover:bg-primary/90">
              <PlusCircle className="h-4 w-4 mr-2" /> Add
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}