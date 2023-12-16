import OpenAI from "openai";
import { OpenAIKey } from "./constant";

export const openai = new OpenAI({
    apiKey:OpenAIKey,
    dangerouslyAllowBrowser: true
})
