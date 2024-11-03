const { GoogleGenerativeAI } = require("@google/generative-ai");

async function getOpenAIResponse(text, heading) {
  const additionalPrompt = `Extract the following structured data from the provided text input, and format it as a JSON object:
    - timestamp: the date and time of the activity (in ISO format).
    - activityType: the type of activity (e.g., machine_maintenance, quality_check, production_report, safety_incident).
    - user: an object containing:
      - userId: the unique identifier for the user (e.g., u12345).
      - username: the name of the person who performed the activity (e.g., JohnDoe).
    - machineId: the identifier of the machine involved (if applicable).
    - location: the location where the activity took place.
    - activityDetails: a nested object that contains details specific to the activity type, including:
      - action: the specific action taken (e.g., repair, inspection, report).
      - description: a brief summary or explanation of the activity.
      - durationMinutes: the time spent on the activity (in minutes).
      - additional fields depending on the activity type (e.g., partReplaced, itemsChecked, incidentType, status, etc.).
    - metadata: additional information, including:
      - priority: the priority of the log (e.g., high, medium, low).
      - tags: a list of keywords related to the activity.
    
    Here is an example text input:
    "On November 2, 2024, JaneDoe performed a repair on MACHINE_23 at Factory 1 - Assembly Line 3. The motor bearings were replaced, and the work took 2 hours. The machine is now operational."
    
    Convert this into the following JSON format:
    {
      "timestamp": "2024-11-02T00:00:00Z",
      "activityType": "machine_maintenance",
      "user": {
        "userId": "u12345",
        "username": "JaneDoe"
      },
      "machineId": "MACHINE_23",
      "location": "Factory 1 - Assembly Line 3",
      "activityDetails": {
        "action": "repair",
        "description": "Replaced motor bearings",
        "durationMinutes": 120,
        "partReplaced": "Bearing Model-A",
        "status": "completed",
        "comments": "Machine is now operational"
      },
      "metadata": {
        "priority": "high",
        "tags": ["maintenance", "repair", "machine_23"]
      }
    }
    
    Now, apply this format to the following text input:
    `;

  const prompt = additionalPrompt + `${heading}\n\n${text}`;
  // Make sure to include these imports:
// import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


const result = await model.generateContent(prompt);
return JSON.parse(result.response.text());

  // const groq = new Groq();

  // const chatCompletion = await groq.chat.completions.create({
  //   messages: [
  //     {
  //       role: "system",
  //       content:
  //         "You extract structured data from the provided text input, and format it as a JSON object",
  //     },
  //     {
  //       role: "user",
  //       content: prompt,
  //     },
  //   ],
  //   model: "llama3-groq-70b-8192-tool-use-preview",
  //   temperature: 0.5,
  //   max_tokens: 1024,
  //   top_p: 0.65,
  //   stream: true,
  //   stop: null,
  // });

  // for await (const chunk of chatCompletion) {
  //   process.stdout.write(chunk.choices[0]?.delta?.content || "");
  // }

  // return response.data.choices[0].text.trim();
}

module.exports = getOpenAIResponse;
