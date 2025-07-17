# LoggedIt

## 📈 Problem Statement

---

In many industries, making quick and informed decisions is key to staying productive, controlling costs, and being profitable. If we take 100 new tasks in an industry, most probably the 99 tasks might already have a solution. Time wasted for repeating the solution process is very excessive due to this. Having disorganized or incomplete logs also leads to delays in addressing operational issues and inefficiencies in responding to critical situations. This leads to longer downtime and expensive mistakes in daily operations.

Without a structured and accessible historical record, teams often waste time searching for solutions, unaware of previously implemented fixes or workarounds. Additionally, **lacking insights from historical data** makes it difficult for them to identify recurring issues, patterns, or bottlenecks.  This problem is not limited to manufacturing or software sectors but also affects various other industries—such as healthcare, logistics, finance, and retail.

## 💡 Detailed Solution

---

To tackle the problems of slow decision-making, repeating the same problem-solving efforts, and messy records, we’ve developed a solution called “LoggedIT: Automated Logs for Decision-Making and Classification”. This AI-driven tool helps organize, analyze, and use operational data more effectively. By turning scattered and unstructured logs into clear insights, it allows organizations to make quicker, better decisions based on previous solutions, spot recurring problems, and stay proactive in improving operations.

Our solution combines easy access to past information, simple keyword tagging, and sentiment analysis to create an easy-to-use platform. This not only helps with immediate decision-making but also builds a valuable archive of insights for ongoing improvement.

Key Features:

Historical Insight Retrieval
Quickly surfaces relevant past solutions for similar issues, saving time on troubleshooting and improving operational efficiency.

Keyword-Based Classification
Analyzes log entries for critical keywords to classify issues, making it easy to identify and prioritize common or impactful problems.

Decision-Making Support
Provides real-time recommendations based on historical data, helping teams address recurring issues without redundancy.

AI-Driven Documentation
Automatically structures and organizes log entries, transforming unstructured data into accessible and actionable documentation.

Pattern Recognition
Identifies recurring issues or patterns within the logs, enabling proactive resolutions based on past experiences.

Sentiment Analysis Module
Evaluates the tone and sentiment of logs or employee feedback to identify trends in morale, stress, or dissatisfaction.

Sentiment Timeline and Alerts
Tracks sentiment over time and generates alerts when negative trends emerge, allowing managers to address potential concerns early.

User-Friendly Interface
Provides an intuitive interface for easy access to insights, ensuring that employees and managers can retrieve information effortlessly.

## 📖 Description

---

Our Automated Logs for Decision-Making and Classification platform addresses core inefficiencies by leveraging AI to bring structured insights and efficiency to operations. The solution prioritizes historical insight retrieval, enabling users to quickly access relevant past solutions and avoid redundant problem-solving. Keyword-based classification organizes logs by issue type, urgency, or impact, allowing teams to focus on high-priority matters. AI-driven decision-making support offers data-backed recommendations to accelerate informed choices without the need for extensive manual searches. Additionally, automated documentation converts unstructured logs into well-organized records, streamlining knowledge management and reference. Pattern recognition identifies recurring issues, enabling proactive problem resolution, while sentiment analysis monitors employee feedback and logs to assess morale. Sentiment timelines and alert systems provide managers with real-time awareness of negative trends, allowing for timely interventions. Lastly, the user-friendly interface ensures ease of access and usability for both employees and managers, making data retrieval and insight generation seamless.

1. Technical Implementation
The solution integrates advanced AI and web technologies to deliver seamless performance and functionality. Here’s an overview of the technical stack and tools used:

Google AI Studio
Google AI Studio is used as the core AI engine for implementing NLP, pattern recognition, and sentiment analysis. Its robust machine-learning capabilities power historical insight retrieval, keyword classification, and sentiment analysis.

WebKit Speech Recognition
This feature enables voice-based input within the platform, allowing users to add logs, notes, or feedback via speech. WebKit's speech recognition API simplifies data entry and improves accessibility for non-technical users.

MERN Stack (MongoDB, Express, React, Node.js)
The platform is built on the MERN stack to ensure a scalable, efficient, and responsive user experience. MongoDB stores structured log data, React provides an interactive front end, Node.js powers the server, and Express handles the API requests between components.

1. User Flow
The user flow is designed to make it simple for employees and managers to log issues, access past data, and gain insights quickly. Here’s a breakdown of the steps:

Logging an Entry

Users can log entries either by typing or through voice input, thanks to WebKit Speech Recognition.
Entries can include details such as issue type, urgency, and any initial insights, which help the system in keyword classification and sentiment analysis.
Automatic Classification and Sentiment Analysis

Once the entry is logged, the AI engine classifies the log based on keywords, and sentiment analysis is applied.
The system categorizes the log entry and associates relevant tags, which can later be used for retrieval and pattern analysis.
Retrieving Historical Insights

When a user faces a recurring or similar issue, they can retrieve relevant past resolutions through historical insight retrieval.
The system surfaces past actions or documented solutions for similar issues, allowing the user to make informed decisions quickly.
Decision-Making Support

The platform provides recommendations based on historical data to guide the user in their decision-making process.
This feature is particularly valuable for complex or multi-faceted issues, where previous solutions can serve as a reference point.
Sentiment Monitoring and Alerts

Sentiment data is monitored over time, with trends visualized in a sentiment timeline.
If negative sentiments or trends are detected, managers receive alerts to review the issues and take proactive measures.
Pattern Recognition and Reporting

The system continuously analyzes logs to identify patterns, common issues, or recurrent problems.
Regular reports or alerts on identified patterns are sent to the management team, allowing them to address systemic issues proactively.

## 📹Prototype Demo
https://drive.google.com/drive/folders/1xyEQZyARpB5IllfdETlLaGh3dneFVPXb?usp=drive_link

### How To Run

1. Clone the repository.
2. Install the required packages by running `npm i` in both backend and frontend directories.
3. Add your google ai studio api key and mongo db connection string into .env file in backend directory
   MONGO_URI=<connection_string>
   PORT=5000
   API_KEY=<Your_API_KEY>
4. Start the backend server by going to backend directory
   `cd ./backend`
   run server using command `node server.js` in the backend directory.
5. Start the frontend server by going to frontend directory
   `cd ./frontend`
   run server using command `npm run dev` in the frontend directory.
