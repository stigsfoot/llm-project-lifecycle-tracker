// src/lib/aiInsights.ts
type Stage = 'setup' | 'planning' | 'execution' | 'evaluation' | 'deployment';

const insights: Record<Stage, string[]> = {
    setup: [
      "Ensure your project motivation aligns with your organization's AI strategy.",
      "Consider ethical implications early in the project setup phase.",
      "Clearly articulate why an LLM is preferable to traditional ML for your use case.",
    ],
    planning: [
      "When defining LLM tasks, be as specific as possible about desired outputs.",
      "Pay special attention to potential biases in your input data.",
      "Plan for iterative development cycles, as LLM projects often require multiple rounds of fine-tuning.",
    ],
    execution: [
      "Implement robust logging for all experiments to ensure reproducibility.",
      "Consider using a pre-trained model as a starting point to reduce development time.",
      "Regularly review generated content for quality and alignment with project goals.",
    ],
    evaluation: [
      "Use a diverse set of evaluation metrics to get a comprehensive view of your model's performance.",
      "Don't neglect qualitative evaluation alongside quantitative metrics.",
      "Consider A/B testing different model versions with a subset of real users if possible.",
    ],
    deployment: [
      "Develop a rollback plan in case unexpected issues arise post-deployment.",
      "Implement gradual rollout strategies to minimize risk.",
      "Set up automated alerts for any anomalies in model performance or output.",
    ],
  };

function isValidStage(stage: string): stage is Stage {
  return ['setup', 'planning', 'execution', 'evaluation', 'deployment'].includes(stage);
}

export function getAIInsight(stage: string): string {
  if (isValidStage(stage)) {
    return insights[stage][Math.floor(Math.random() * insights[stage].length)];
  }
  return "Invalid stage. Please choose a valid project stage.";
}