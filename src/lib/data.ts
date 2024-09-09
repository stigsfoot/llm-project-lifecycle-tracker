// src/lib/data.ts
import { Settings, ChevronRight, Users, BarChart, Rocket } from 'lucide-react';

export const stages = [
  { id: 'setup', title: 'Project Setup', icon: Settings, color: 'blue' },
  { id: 'planning', title: 'Planning & Definition', icon: ChevronRight, color: 'green' },
  { id: 'execution', title: 'Execution & Monitoring', icon: Users, color: 'yellow' },
  { id: 'evaluation', title: 'Evaluation & Refinement', icon: BarChart, color: 'orange' },
  { id: 'deployment', title: 'Deployment & Maintenance', icon: Rocket, color: 'purple' },
];

export const initialTasks = {
  setup: [
    { id: 1, name: 'Define project scope and motivation', completed: false },
    { id: 2, name: 'Identify key stakeholders', completed: false },
    { id: 3, name: 'Determine strategic alignment', completed: false },
    { id: 4, name: 'Justify LLM approach', completed: false },
  ],
  planning: [
    { id: 1, name: 'Specify LLM tasks and input data', completed: false },
    { id: 2, name: 'Define performance metrics', completed: false },
    { id: 3, name: 'Plan for ethical considerations', completed: false },
    { id: 4, name: 'Create project timeline', completed: false },
  ],
  execution: [
    { id: 1, name: 'Set up development environment', completed: false },
    { id: 2, name: 'Implement core LLM functionality', completed: false },
    { id: 3, name: 'Conduct initial testing and fine-tuning', completed: false },
  ],
  evaluation: [
    { id: 1, name: 'Apply LLM-specific evaluation metrics', completed: false },
    { id: 2, name: 'Conduct user testing', completed: false },
    { id: 3, name: 'Analyze results and plan refinements', completed: false },
  ],
  deployment: [
    { id: 1, name: 'Prepare deployment environment', completed: false },
    { id: 2, name: 'Implement monitoring systems', completed: false },
    { id: 3, name: 'Plan for continual improvement', completed: false },
  ],
};

export const stageQuestions = {
  setup: [
    "What is the primary problem you aim to solve with this LLM project?",
    "Which strategic goals does this project align with?",
    "Why is an LLM approach more suitable than traditional ML methods for this project?",
  ],
  planning: [
    "What specific tasks will the LLM perform (e.g., text generation, summarization)?",
    "Describe the input data you'll provide to the LLM, including volume and potential biases.",
    "How will you measure the accuracy and effectiveness of the LLM's outputs?",
  ],
  execution: [
    "How will you manage version control for both code and model versions?",
    "What system will you use for logging experiments and their results?",
    "How often will you conduct check-ins to monitor progress and address challenges?",
  ],
  evaluation: [
    "How will you ensure the LLM's output aligns with the provided context (faithfulness)?",
    "What methods will you use to evaluate answer relevancy and context utilization?",
    "How will you incorporate both automated metrics and human evaluation?",
  ],
  deployment: [
    "How will you deploy the LLM-based solution (e.g., API, embedded model)?",
    "What monitoring systems will you implement to track performance in production?",
    "How will you handle model updates and maintain consistency in outputs over time?",
  ],
};