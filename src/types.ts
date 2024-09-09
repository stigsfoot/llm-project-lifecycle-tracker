import { stages } from './stages'

export type Stage = string;

export interface Task {
  id: number;
  name: string;
  completed: boolean;
}

export type StageKey = 'setup' | 'planning' | 'execution' | 'evaluation' | 'deployment';

export type TaskStage = 'setup' | 'design' | 'development' | 'testing' | 'deployment';