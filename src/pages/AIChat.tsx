import { useState, useEffect, useRef } from "react";
import type { KeyboardEvent } from "react";
import { LuMessageSquareMore } from "react-icons/lu";

type Message = {
  from: "user" | "ai";
  text: string;
};

export default function AIChat() {
  const [open, setOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: "ai", text: "Hi 👋 I'm Dheeraj's AI assistant" }
  ]);
  const [input, setInput] = useState<string>("");
  const [typing, setTyping] = useState<boolean>(false);
  const [suggestionIndex, setSuggestionIndex] = useState<number>(0);
  const STORAGE_KEY = "dheeraj_ai_chat";

  const bottomRef = useRef<HTMLDivElement | null>(null);

  const msgSuggestions = [
    "Who is Dheeraj?",
    "What does he do?",
    "His education",
    "Where is he located?",
    "Skills & tech stack",
    "Show me his projects",
    "Tell me about Chat Vibe",
    "GitHub repos",
    "How can I contact him?",
    "Is he available for work?",
    "LinkedIn profile",
    "Download resume",
  ];



  const handleClick = () => {
      sendMessage(msgSuggestions[suggestionIndex]);


  };

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setMessages(JSON.parse(saved));
    }
  }, []);
  const saveChat = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  };
  const clearChat = () => {
    localStorage.removeItem(STORAGE_KEY);
    setMessages([{ from: "ai", text: "Hi 👋 I'm Dheeraj's AI assistant" }]);
  };

  useEffect(() => {
    if (open) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    };
  }, [open]);

  // const random = (arr: string[]): string => {
  //   return arr[Math.floor(Math.random() * arr.length)];
  // };

  // const includesAny = (msg: string, words: string[]) => {
  //   return words.some(word => msg.includes(word));
  // };

  //   const reply = (message: string): string => {
  //     const msg = message.toLowerCase().trim();

  //     // greetings
  //     if (includesAny(msg, ["hi", "hello", "hey", "hii"])) {
  //       return random([
  //         "Hey there 👋 How can I help you with Dheeraj?",
  //         "Hello! 😊 Want to know about Dheeraj skills or projects?",
  //         "Hi 👋 Ask me anything about Dheeraj!",
  //         "Hey! I'm here to help you explore Dheeraj's work 🚀",
  //         "Welcome 👋 Need info about Dheeraj?"
  //       ]);
  //     }

  //     // who are you
  //     if (includesAny(msg, ["who are you", "who", "yourself"])) {
  //       return random([
  //         "I'm Dheeraj's AI assistant 🤖",
  //         "I help you explore Dheeraj’s portfolio",
  //         "Your friendly portfolio guide 😄",
  //         "I'm built to showcase Dheeraj's work 🚀"
  //       ]);
  //     }

  //     if (includesAny(msg, ["skills?", "what are his skills", "technology"])) {
  //   return random([
  //     "He works with React, TypeScript, Tailwind CSS, Node.js and Express ⚛️🔥",
  //     "Frontend + Backend developer with modern MERN stack 🚀",
  //     "Skilled in building responsive UI and full-stack web apps 💻"
  //   ]);
  // }

  // if (includesAny(msg, ["projects", "show me projects", "work"])) {
  //   return random([
  //     "He has built a Portfolio Website, Chat App, Snake Game, and AI Chat Bot 🤖",
  //     "Projects include full-stack chat app and interactive UI apps 🚀",
  //     "He builds real-world React based applications 💻"
  //   ]);
  // }

  // if (includesAny(msg, ["contact", "how can i contact", "email"])) {
  //   return random([
  //     "You can contact him at: mehradheeraj314@gmail.com 📩",
  //     "Drop an email at mehradheeraj314@gmail.com for collaboration 💼",
  //     "Contact available in the portfolio contact section ✉️"
  //   ]);
  // }

  // if (includesAny(msg, ["available", "hire", "job", "freelance"])) {
  //   return random([
  //     "Yes, he is currently available for work 💼",
  //     "Open for frontend and full-stack opportunities 🚀",
  //     "Available for internships and freelance projects 💻"
  //   ]);
  // }

  // if (includesAny(msg, ["location", "where", "country"])) {
  //   return random([
  //     "He is based in India 🇮🇳",
  //     "Currently working from India 🌍",
  //     "Located in India, open for remote work 💻"
  //   ]);
  // }

  //     if (includesAny(msg, ["what does", "what do", "what is dheeraj do"])) {
  //   return random([
  //     "Dheeraj is a Frontend Developer who builds modern web apps using React ⚛️",
  //     "He creates interactive UI experiences with React + TypeScript 🚀",
  //     "He specializes in building fast and responsive web applications 💻"
  //   ]);
  // }

  //     // name
  //     if (includesAny(msg, ["name", "developer"])) {
  //       return random([
  //         "His name is Dheeraj — frontend developer 💻",
  //         "Dheeraj built this portfolio 😎",
  //         "You're exploring Dheeraj's work"
  //       ]);
  //     }

  //     // about
  //     if (includesAny(msg, ["about", "yourself", "bio"])) {
  //       return random([
  //         "Dheeraj is a React developer ⚛️",
  //         "He builds modern UI with Tailwind & TS",
  //         "Frontend is his playground 😄",
  //         "He loves creating interactive web apps"
  //       ]);
  //     }

  //     // education
  //     if (includesAny(msg, ["education", "study", "college", "bca"])) {
  //       return random([
  //         "He is currently pursuing BCA 🎓",
  //         "BCA student + full stack learner 🚀",
  //         "Studying BCA and building projects 💪"
  //       ]);
  //     }

  //     // location
  //     if (includesAny(msg, ["location", "where", "country"])) {
  //       return random([
  //         "He's based in India 🇮🇳",
  //         "Working from India 🌍",
  //         "Located in India"
  //       ]);
  //     }

  //     // skills
  //     if (includesAny(msg, ["skill", "technology", "stack"])) {
  //       return random([
  //         "React, TypeScript, Tailwind, Node, Express 🚀",
  //         "Frontend + Backend  🔥",
  //         "Modern stack: React + TS + Node"
  //       ]);
  //     }

  //     // frontend
  //     if (includesAny(msg, ["frontend", "ui"])) {
  //       return random([
  //         "React + Tailwind UI builder ⚛️",
  //         "He focuses on frontend development 🎨",
  //         "Modern UI using React"
  //       ]);
  //     }

  //     // backend
  //     if (includesAny(msg, ["backend", "server", "node"])) {
  //       return random([
  //         "Backend: Node.js & Express ⚙️",
  //         "Basic backend with REST APIs 🌐",
  //         "Server-side using Node"
  //       ]);
  //     }

  //     // database
  //     if (includesAny(msg, ["database", "mongo", "mongodb"])) {
  //       return random([
  //         "He uses MongoDB , SQL🍃",
  //         "Database: MongoDB , SQL",
  //         "MongoDB for storing chat data"
  //       ]);
  //     }

  //     // projects
  //     if (includesAny(msg, ["project", "work"])) {
  //       return random([
  //         "Portfolio, Chat App, Snake Game & AI Chat 🤖",
  //         "Multiple React based projects 🚀",
  //         "Full stack chat application 🔥"
  //       ]);
  //     }

  //     // chat
  //     if (includesAny(msg, ["chat", "ai chat", "bot"])) {
  //       return random([
  //         "Custom AI chat widget built by him 🤖",
  //         "This chat is built using React",
  //         "Includes animations + smart replies"
  //       ]);
  //     }

  //     // contact
  //     if (includesAny(msg, ["contact", "email", "mail"])) {
  //       return random([
  //         "You can reach him at: mehradheeraj314@gmail.com 📩",
  //         "Drop a mail here: mehradheeraj314@gmail.com",
  //         "Email available in contact section"
  //       ]);
  //     }

  //     // linkedin
  //     if (includesAny(msg, ["linkedin"])) {
  //       return random([
  //         "linkedin.com/in/dheeraj-mahara-1342b6363 💼",
  //         "Connect on LinkedIn 🔗",
  //         "LinkedIn profile available"
  //       ]);
  //     }

  //     // github
  //     if (includesAny(msg, ["github", "code"])) {
  //       return random([
  //         "github.com/dheeraj-mahara 💻",
  //         "Check his repositories 🚀",
  //         "All projects on GitHub"
  //       ]);
  //     }

  //     // resume
  //     if (includesAny(msg, ["resume", "cv"])) {
  //       return random([
  //         "Resume available on portfolio 📄",
  //         "Download CV from resume section",
  //         "Resume ready for download"
  //       ]);
  //     }

  //     // experience
  //     if (includesAny(msg, ["experience", "fresher"])) {
  //       return random([
  //         "Fresher with strong projects 💪",
  //         "Hands-on full stack projects",
  //         "Learning through real-world apps"
  //       ]);
  //     }

  //     // hire
  //     if (includesAny(msg, ["hire", "job", "freelance"])) {
  //       return random([
  //         "Open for work 💼",
  //         "Available for frontend roles",
  //         "You can hire him 🚀"
  //       ]);
  //     }

  //     // thanks
  //     if (includesAny(msg, ["thanks", "thank you"])) {
  //       return random([
  //         "You're welcome 😄",
  //         "Happy to help!",
  //         "Anytime 👍"
  //       ]);
  //     }

  //     // bye
  //     if (includesAny(msg, ["bye", "goodbye"])) {
  //       return random([
  //         "Bye 👋",
  //         "See you soon!",
  //         "Have a great day 😄"
  //       ]);
  //     }

  //     // fallback
  //     return random([
  //       "Try asking about skills, projects, or contact 😉",
  //       "I'm still learning 🤖",
  //       "Ask about Dheeraj's portfolio",
  //       "Didn't get that 😅",
  //       "Try 'skills' or 'projects'"
  //     ]);
  //   };


  // ─────────────────────────────────────────────
  //  Smart Reply Engine — Dheeraj's Portfolio Bot
  // ─────────────────────────────────────────────

  const random = (arr: string[]): string =>
    arr[Math.floor(Math.random() * arr.length)];

  const has = (msg: string, keywords: string[]): boolean =>
    keywords.some((k) => msg.includes(k));

  const fuzzy = (msg: string, phrase: string): boolean =>
    phrase.split(" ").every((w) => msg.includes(w));



  const reply = (message: string): string => {
    const msg = message.toLowerCase().trim().replace(/[?!,]/g, "");

    // ── GREETINGS ──
    if (has(msg, ["hi", "hello", "hey", "hii", "helo", "hye", "sup", "yo", "howdy", "namaste"])) {
      return random([
        "Hey there! 👋 I'm Dheeraj's portfolio assistant. Ask me about his skills, projects, or how to reach him!",
        "Hello! 😊 Welcome to Dheeraj's portfolio. What would you like to know?",
        "Hi there! 🚀 I can tell you about Dheeraj's work, tech stack, projects — just ask!",
        "Hey! 👋 Dheeraj built me to help you explore his portfolio. What are you curious about?",
        "Namaste! 🙏 Happy to walk you through Dheeraj's work. Skills, projects, or contact — what first?",
      ]);
    }

    // ── WHO ARE YOU (bot) ──
    if (
      fuzzy(msg, "who are you") ||
      has(msg, ["what are you", "are you ai", "are you bot", "are you human", "who made you", "who built you"])
    ) {
      return random([
        "I'm an AI assistant built specifically for Dheeraj's portfolio 🤖 Ask me anything about him!",
        "Think of me as Dheeraj's virtual spokesperson 😄 I know his skills, projects, and story!",
        "I'm a custom portfolio chatbot — built by Dheeraj himself using React ⚛️",
        "I'm Dheeraj's portfolio bot! I can answer questions about his tech stack, projects, and more 🚀",
      ]);
    }

    // ── WHO IS DHEERAJ ──
    if (
      fuzzy(msg, "who is dheeraj") ||
      has(msg, ["about dheeraj", "tell me about him", "about him", "dheeraj ka", "dheeraj kon"])
    ) {
      return random([
        "Dheeraj Mehra is a passionate Frontend Developer 💻 He's pursuing BCA and builds full-stack web apps using the MERN stack. He loves turning ideas into interactive experiences!",
        "Dheeraj is a React developer from India 🇮🇳 Currently studying BCA while building real-world full-stack projects. Open for work and always learning! 🚀",
        "He's a BCA student and self-driven developer who specializes in React, TypeScript, and Node.js. His projects range from chat apps to AI bots 🤖",
      ]);
    }

    // ── WHAT DOES DHEERAJ DO ──
    if (
      has(msg, ["what does he do", "what does dheeraj do", "what do you do", "kya karta hai", "kya karta"])
    ) {
      return random([
        "Dheeraj builds modern web applications 💻 He works on both frontend (React, Tailwind, TS) and backend (Node.js, Express, MongoDB).",
        "He designs and develops interactive UIs, full-stack web apps, and even AI-powered features like this chatbot 🤖",
        "Dheeraj specializes in frontend development and full-stack MERN apps — fast, responsive, and beautifully designed 🎨",
      ]);
    }

    // ── SKILLS ──
    if (has(msg, ["skill", "technology", "tech stack", "stack", "tools", "languages", "what can he do", "expertise"])) {
      return random([
        "Dheeraj's tech stack includes:\n⚛️ React & TypeScript (Frontend)\n🎨 Tailwind CSS (Styling)\n🟢 Node.js & Express (Backend)\n🍃 MongoDB & SQL (Database)\n🔧 Git, GitHub, REST APIs",
        "He works with the full MERN stack:\n• MongoDB, Express, React, Node.js\nPlus TypeScript, Tailwind CSS, and Firebase 🔥",
        "Frontend: React, TypeScript, Tailwind CSS 🎨\nBackend: Node.js, Express ⚙️\nDatabase: MongoDB, SQL 🍃\nTools: Git, GitHub, Vite, REST APIs 🚀",
        "Core skills: React ⚛️, TypeScript 🔷, Tailwind 🎨, Node.js 🟢, Express, MongoDB 🍃 — a solid full-stack developer!",
      ]);
    }

    // ── FRONTEND ──
    if (has(msg, ["frontend", "ui", "design", "interface", "react", "tailwind", "css", "html"])) {
      return random([
        "Frontend is where Dheeraj shines! ⚛️ He uses React + TypeScript for logic and Tailwind CSS for beautiful, responsive UIs.",
        "He builds pixel-perfect, responsive interfaces using React, TypeScript, and Tailwind CSS 🎨",
        "React + Tailwind is his go-to combo. He focuses on performance, responsiveness, and great user experience 🚀",
      ]);
    }

    // ── BACKEND ──
    if (has(msg, ["backend", "server", "node", "express", "api", "rest"])) {
      return random([
        "Backend: Node.js + Express ⚙️ He builds REST APIs and connects them with MongoDB for full-stack apps.",
        "He handles server-side logic using Node.js and Express, with MongoDB as the database 🌐",
        "Dheeraj writes clean REST APIs in Node.js + Express, powering his chat apps and other full-stack projects 🔥",
      ]);
    }

    // ── DATABASE ──
    if (has(msg, ["database", "mongo", "mongodb", "sql", "db", "data"])) {
      return random([
        "He uses MongoDB 🍃 for NoSQL and SQL for relational data needs.",
        "Database: MongoDB (primary) and SQL — he knows both relational and non-relational storage 💾",
        "MongoDB powers his chat app's data. He also works with SQL for structured data 🗃️",
      ]);
    }

    // ── PROJECTS ──
    if (has(msg, ["project", "work", "portfolio", "built", "made", "app", "application", "banaya"])) {
      return random([
        "Dheeraj's notable projects:\n💬 Chat Vibe — Real-time chat app (MERN + Socket.io)\n🤖 AI Portfolio Bot — This chatbot you're using!\n🐍 Snake Game — Classic game in React\n🌐 Portfolio Website — Built with React + TypeScript",
        "He has built:\n1. Chat Vibe — full-stack real-time messaging app\n2. This AI chatbot 🤖\n3. Snake Game in React 🐍\n4. Personal portfolio site 💼\n...and more on GitHub!",
        "Real-world projects include a real-time chat app with Socket.io, an AI chatbot, interactive React games, and his full portfolio website. Check GitHub for all of them! 🚀",
      ]);
    }

    // ── CHAT APP ──
    if (has(msg, ["chat app", "chat vibe", "messaging", "socket", "real time", "realtime"])) {
      return random([
        "Chat Vibe is Dheeraj's full-stack real-time messaging app 💬 Built with React, Node.js, Express, MongoDB, and Socket.io. Features include live messaging, notifications (Firebase), and group chats!",
        "His chat application supports real-time messaging via Socket.io, Firebase push notifications, group chats, and media sharing 🔥",
        "Chat Vibe = React frontend + Node.js backend + MongoDB + Socket.io for real-time. A fully featured messaging app built from scratch! 💪",
      ]);
    }

    // ── THIS CHATBOT ──
    if (has(msg, ["this bot", "this chat", "portfolio bot", "ai chat", "ai bot", "chatbot", "assistant"])) {
      return random([
        "This chatbot was built by Dheeraj himself using React + TypeScript 🤖 It uses smart keyword matching to answer questions about his portfolio!",
        "You're talking to a custom portfolio assistant — no external AI API, just smart logic built by Dheeraj in React ⚛️",
        "I'm a rule-based AI assistant with personality 😄 Built with React, TypeScript, and Dheeraj's own reply engine!",
      ]);
    }

    // ── EDUCATION ──
    if (has(msg, ["education", "study", "college", "university", "bca", "degree", "student", "padhai"])) {
      return random([
        "Dheeraj is currently pursuing BCA (Bachelor of Computer Applications) 🎓 He's combining his studies with real-world full-stack development!",
        "BCA student + self-taught full-stack developer 🚀 He learns by building actual projects, not just theory.",
        "He's a BCA student who believes in learning by doing — his projects speak louder than his grades 💪🎓",
      ]);
    }

    // ── EXPERIENCE ──
    if (has(msg, ["experience", "fresher", "work experience", "internship", "years"])) {
      return random([
        "Dheeraj is a fresher 🌱 but with strong hands-on experience through real-world projects like Chat Vibe, his AI chatbot, and more.",
        "No formal experience yet, but his projects demonstrate full-stack skills that go beyond most freshers 💪 Open for internships!",
        "He's a fresher actively building his portfolio. Real apps, real code, real skills — that's his experience 🚀",
      ]);
    }

    // ── LOCATION ──
    if (has(msg, ["location", "where", "country", "city", "kahan", "india", "remote"])) {
      return random([
        "Dheeraj is based in India 🇮🇳 and is open to remote work opportunities worldwide 🌍",
        "Located in India — available for remote jobs, freelance, or local opportunities 💻",
        "India 🇮🇳 — but with a global mindset and remote-ready setup 🌐",
      ]);
    }

    // ── AVAILABILITY / HIRE ──
    if (has(msg, ["available", "hire", "job", "freelance", "open to work", "recruit", "opportunity", "kaam", "kya mil sakta"])) {
      return random([
        "Yes! Dheeraj is currently open to work 💼 — frontend roles, full-stack, internships, or freelance projects. Drop him an email!",
        "Absolutely available for opportunities 🚀 Frontend developer, full-stack, or React specialist roles are his sweet spot.",
        "He's actively looking for internships and full-stack/frontend roles. You can reach him at mehradheeraj314@gmail.com 📩",
      ]);
    }

    // ── CONTACT ──
    if (has(msg, ["contact", "reach", "email", "mail", "connect", "baat karna", "message"])) {
      return random([
        "You can reach Dheeraj at:\n📧 mehradheeraj314@gmail.com\n💼 LinkedIn: linkedin.com/in/dheeraj-mahara-1342b6363\n🐙 GitHub: github.com/dheeraj-mahara",
        "Contact info:\n• Email: mehradheeraj314@gmail.com 📩\n• LinkedIn: linkedin.com/in/dheeraj-mahara-1342b6363 💼\n• GitHub: github.com/dheeraj-mahara 🐙",
        "Best ways to connect:\n📧 Email — mehradheeraj314@gmail.com\n💼 LinkedIn — dheeraj-mahara-1342b6363\n💻 GitHub — dheeraj-mahara",
      ]);
    }

    // ── LINKEDIN ──
    if (has(msg, ["linkedin", "linked in", "professional profile"])) {
      return random([
        "LinkedIn: linkedin.com/in/dheeraj-mahara-1342b6363 💼 Connect with him there!",
        "You can find him on LinkedIn at linkedin.com/in/dheeraj-mahara-1342b6363 🔗",
        "His LinkedIn profile: linkedin.com/in/dheeraj-mahara-1342b6363 — great for professional connections 💼",
      ]);
    }

    // ── GITHUB ──
    if (has(msg, ["github", "code", "repository", "repo", "source code"])) {
      return random([
        "GitHub: github.com/dheeraj-mahara 🐙 All his projects and source code are there!",
        "Check out his repositories at github.com/dheeraj-mahara — Chat Vibe, Snake Game, portfolio and more 🚀",
        "github.com/dheeraj-mahara 💻 — where he pushes his real-world projects. Worth checking out!",
      ]);
    }

    // ── RESUME ──
    if (has(msg, ["resume", "cv", "download", "curriculum"])) {
      return random([
        "His resume is available for download in the portfolio's Resume section 📄 Check the navigation above!",
        "You can download Dheeraj's CV directly from the portfolio website — look for the Resume tab 📥",
        "Resume is ready — head to the Resume section of this portfolio to grab it 📄💼",
      ]);
    }

    // ── FIREBASE ──
    if (has(msg, ["firebase", "notification", "push"])) {
      return random([
        "He uses Firebase for push notifications in Chat Vibe 🔔 Keeps users updated in real time!",
        "Firebase Cloud Messaging (FCM) powers the notifications in his chat app 🚀",
        "Firebase is part of his stack for real-time notifications and auth support 🔥",
      ]);
    }

    // ── SOCKET.IO ──
    if (has(msg, ["socket", "socket.io", "websocket", "live chat"])) {
      return random([
        "He uses Socket.io for real-time bidirectional communication in Chat Vibe 🔌⚡",
        "Socket.io powers the live messaging in his chat app — instant delivery, no polling needed 🚀",
        "WebSocket via Socket.io = instant real-time messages in Chat Vibe 💬",
      ]);
    }

    // ── TYPESCRIPT ──
    if (has(msg, ["typescript", "ts", "type safe"])) {
      return random([
        "Yes, Dheeraj uses TypeScript for type safety across his React projects 🔷",
        "TypeScript is part of his stack — he values clean, type-safe code 💪",
        "He writes TypeScript (not just JavaScript) to keep his code robust and maintainable 🔷",
      ]);
    }

    // ── THANKS ──
    if (has(msg, ["thanks", "thank you", "thankyou", "ty", "thx", "shukriya", "dhanyawad"])) {
      return random([
        "You're welcome! 😄 Anything else you'd like to know about Dheeraj?",
        "Happy to help! 👍 Feel free to ask more questions.",
        "Anytime! 🙌 Ask me anything else about his work.",
        "My pleasure! 😊 Is there something specific you'd like to explore?",
      ]);
    }

    // ── BYE ──
    if (has(msg, ["bye", "goodbye", "see you", "later", "alvida", "cya"])) {
      return random([
        "Goodbye! 👋 Feel free to come back anytime. Have a great day!",
        "See you around! 😄 Hope you enjoyed exploring Dheeraj's portfolio.",
        "Bye! 👋 Don't hesitate to reach out to Dheeraj — he'd love to connect!",
        "Take care! 🙌 And if you're hiring — you know where to find him 😄",
      ]);
    }

    // ── GOOD / NICE / COOL ──
    if (has(msg, ["good", "nice", "cool", "awesome", "great", "wow", "amazing", "impressive", "badiya"])) {
      return random([
        "Thank you! 😊 Dheeraj put a lot of effort into his work. Glad you like it!",
        "Appreciate that! 🙏 He's always pushing himself to build better things.",
        "He'd love to hear that! 🚀 Want to reach out or explore more?",
      ]);
    }

    // ── HELP ──
    if (has(msg, ["help", "what can you do", "options", "what can i ask", "guide"])) {
      return random([
        "You can ask me about:\n🧠 Skills & Tech Stack\n💼 Projects & Work\n🎓 Education\n📍 Location\n📧 Contact & Social\n💡 Availability for hire\n...and more! Just type naturally 😊",
        "I can answer questions about Dheeraj's:\n• Skills (React, Node, TS...)\n• Projects (Chat App, Bot, Game...)\n• Education (BCA)\n• Contact details\n• Job availability\nJust ask! 🤖",
      ]);
    }

    // ── FALLBACK (smart) ──
    const fallbacks = [
      "Hmm, I didn't quite get that 🤔 Try asking about Dheeraj's skills, projects, education, or how to contact him!",
      "I'm not sure about that one 😅 But I can answer questions about his tech stack, projects, or availability!",
      "Could you rephrase that? 🙏 I'm best at answering about Dheeraj's work, skills, and projects.",
      "That's outside what I know! 😄 Ask me about React, Node.js, his chat app, or how to hire him!",
      "Not sure I got that right 🤖 Try: 'What are his skills?' or 'Tell me about his projects'",
    ];
    return random(fallbacks);
  };

  const sendMessage = (message?: string) => {
      const finalMessage = message ?? input;

    if (!finalMessage.trim()) return;

    const userMsg: Message = { from: "user", text: finalMessage };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTyping(true);

    setTimeout(() => {
      const aiMsg: Message = { from: "ai", text: reply(finalMessage) };
      setMessages((prev) => [...prev, aiMsg]);
      setTyping(false);
      setSuggestionIndex((prev) => (prev + 1) % msgSuggestions.length);

    }, 900);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (!open) return;

    // Add a fake history entry when chat opens
    window.history.pushState({ chatOpen: true }, "");

    const onPopState = () => {
      // Instead of going back route, just close chat
      setOpen(false);
    };

    window.addEventListener("popstate", onPopState);

    return () => {
      window.removeEventListener("popstate", onPopState);
    };
  }, [open]);

  const toggleChat = () => {
    setOpen((prev) => {
      const newState = !prev;

      if (newState) {
        window.history.pushState({ chatOpen: true }, "");
      }

      return newState;
    });
  };

  return (
    <div className="fixed  bottom-18 md:bottom-6 right-6 z-50">

      {/* CHAT BOX */}
      {open && (
        <div
          className=" w-[90vw] mx-auto sm:w-80 h-[70vh] sm:h-[420px] mb-3 bg-black/95 border border-white/10 rounded-2xl shadow-xl flex flex-col "   >

          {/* HEADER */}
          <div className="p-3 text-white font-semibold border-b border-white/10
  bg-gradient-to-r from-purple-600/20 to-pink-500/20 backdrop-blur
  flex justify-between items-center"
          >
            <span>🤖 AI Assistant</span>

            {messages.length > 1 && (
              <div className="flex gap-3">
                <button
                  onClick={saveChat}
                  className="text-xs px-3 py-1.5 rounded-md   bg-blue-600 text-white   hover:bg-blue-700 hover:shadow-md   active:scale-95 active:bg-blue-800   focus:outline-none focus:ring-2 focus:ring-blue-400   transition-all duration-150 cursor-pointer"                           >
                  Save
                </button>

                <button
                  onClick={clearChat}
                  className="text-xs px-3 py-1.5 rounded-md    bg-red-600 text-white    hover:bg-red-700 hover:shadow-md    active:scale-95 active:bg-red-800    focus:outline-none focus:ring-2 focus:ring-red-400    transition-all duration-150 cursor-pointer"
                >
                  Clear
                </button>
              </div>
            )}

          </div>


          {/* MESSAGES */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2 ">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`text-sm py-1 px-3  rounded-lg w-fit max-w-[85%]
                ${msg.from === "user"
                    ? "bg-purple-600 text-white ml-auto"
                    : "bg-white/10 text-gray-300"
                  }`}
              >
                {msg.text}
              </div>
            ))}



            {typing && (
              <div className="bg-white/10 text-gray-300 text-sm p-2 rounded-lg w-fit animate-pulse">
                AI is typing...
              </div>
            )}

            <div ref={bottomRef}></div>
          </div>

          {suggestionIndex <= 12 && (
            <button
              className="bg-purple-600 text-white text-sm py-1 px-3 my-2 ml-3 rounded-lg w-fit max-w-[85%]
             cursor-pointer shadow-md
             animate-bounce
            "
              onClick={handleClick}
            >
              {msgSuggestions[suggestionIndex]}
            </button>
          )
          }


          {/* INPUT */}
          <div className="p-2 border-t border-white/10 flex gap-2">
            <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown} placeholder="Ask something..." className="flex-1 bg-white/20 text-white text-sm px-3 py-2 rounded-lg outline-none"
            />
            <button
              onClick={() => sendMessage()}
              className="px-3 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg"
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* FLOATING BUTTON */}
      <button
        onClick={toggleChat}
        className=" relative w-10 h-10 sm:w-[50px] sm:h-[50px] rounded-full flex items-center justify-center text-white text-3xl sm:text-[26px]
                bg-gradient-to-br from-pink-500 via-violet-500 to-indigo-500 bg-[length:200%_200%]

                     animate-gradientShift animate-float3D animate-glowPulse animate-ripple  backdrop-blur-xl  border border-white/20
                 transition-all duration-300  hover:scale-110 hover:rotate-6  active:scale-90  cursor-pointer "
      >
        <span className="pointer-events-none absolute inset-[-6px] rounded-full border-2 border-dashed border-white/60 animate-rotateBorder" />

        {/* glow */}
        <span className="pointer-events-none absolute inset-0 rounded-full bg-white/10 blur-xl opacity-70" />

        {/* icon */}
        <span className="relative z-10 animate-iconBounce">
          <LuMessageSquareMore />
        </span>
      </button>
    </div>
  );
}