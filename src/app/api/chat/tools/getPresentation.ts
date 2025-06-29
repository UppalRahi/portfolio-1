import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Rahi Uppal. It is used to answer the question "Who are you?" or "Tell me about yourself"',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        "I'm Rahi Uppal, a Venture Architect passionate about building data-driven solutions and innovative products. Currently studying BTech in Mechanical Engineering at NIT Srinagar while working at GrowthJockey. I have experience across startups, consulting, and engineering, combining technical skills and business insight to solve complex problems.",
    };
  },
});
