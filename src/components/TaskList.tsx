import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';

interface Task {
  id: string;
  name: string;
  completed: boolean;
}

export default function TaskList({ tasks, onTaskToggle }: { tasks: Task[], onTaskToggle: (id: string) => void }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {tasks.map((task) => (
            <li key={task.id} className="flex items-center">
              <Checkbox
                id={task.id}
                checked={task.completed}
                onCheckedChange={() => onTaskToggle(task.id)}
              />
              <label
                htmlFor={task.id}
                className={`ml-2 ${task.completed ? 'line-through text-gray-500' : ''}`}
              >
                {task.name}
              </label>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}