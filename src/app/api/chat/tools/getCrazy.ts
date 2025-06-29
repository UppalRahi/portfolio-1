
import { tool } from "ai";
import { z } from "zod";


export const getCrazy = tool({
  description:
    "This tool will the craziest thing I've ever done. use it when the user ask someting like : 'What the craziest thing you've ever done?'",
  parameters: z.object({}),
  execute: async () => {
    return "Above is a photo of me on top of one of my entrepreneurial journey highlights! This represents my passion for reaching new heights in business and innovation. You can see my determination and drive for success in this moment! Check out my LinkedIn for more about my ventures: https://www.linkedin.com/in/rahiuppal";
  },
});