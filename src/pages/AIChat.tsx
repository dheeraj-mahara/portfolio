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
    const STORAGE_KEY = "dheeraj_ai_chat";

    const bottomRef = useRef<HTMLDivElement | null>(null);

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

const random = (arr: string[]): string => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const includesAny = (msg: string, words: string[]) => {
  return words.some(word => msg.includes(word));
};

 const reply = (message: string): string => {
  const msg = message.toLowerCase().trim();

  // greetings
  if (includesAny(msg, ["hi", "hello", "hey", "hii"])) {
    return random([
      "Hey there 👋 How can I help you with Dheeraj?",
      "Hello! 😊 Want to know about Dheeraj skills or projects?",
      "Hi 👋 Ask me anything about Dheeraj!",
      "Hey! I'm here to help you explore Dheeraj's work 🚀",
      "Welcome 👋 Need info about Dheeraj?"
    ]);
  }

  // who are you
  if (includesAny(msg, ["who are you", "who", "yourself"])) {
    return random([
      "I'm Dheeraj's AI assistant 🤖",
      "I help you explore Dheeraj’s portfolio",
      "Your friendly portfolio guide 😄",
      "I'm built to showcase Dheeraj's work 🚀"
    ]);
  }

  // name
  if (includesAny(msg, ["name", "developer"])) {
    return random([
      "His name is Dheeraj — frontend developer 💻",
      "Dheeraj built this portfolio 😎",
      "You're exploring Dheeraj's work"
    ]);
  }

  // about
  if (includesAny(msg, ["about", "yourself", "bio"])) {
    return random([
      "Dheeraj is a React developer ⚛️",
      "He builds modern UI with Tailwind & TS",
      "Frontend is his playground 😄",
      "He loves creating interactive web apps"
    ]);
  }

  // education
  if (includesAny(msg, ["education", "study", "college", "bca"])) {
    return random([
      "He is currently pursuing BCA 🎓",
      "BCA student + full stack learner 🚀",
      "Studying BCA and building projects 💪"
    ]);
  }

  // location
  if (includesAny(msg, ["location", "where", "country"])) {
    return random([
      "He's based in India 🇮🇳",
      "Working from India 🌍",
      "Located in India"
    ]);
  }

  // skills
  if (includesAny(msg, ["skill", "technology", "stack"])) {
    return random([
      "React, TypeScript, Tailwind, Node, Express 🚀",
      "Frontend + Backend  🔥",
      "Modern stack: React + TS + Node"
    ]);
  }

  // frontend
  if (includesAny(msg, ["frontend", "ui"])) {
    return random([
      "React + Tailwind UI builder ⚛️",
      "He focuses on frontend development 🎨",
      "Modern UI using React"
    ]);
  }

  // backend
  if (includesAny(msg, ["backend", "server", "node"])) {
    return random([
      "Backend: Node.js & Express ⚙️",
      "Basic backend with REST APIs 🌐",
      "Server-side using Node"
    ]);
  }

  // database
  if (includesAny(msg, ["database", "mongo", "mongodb"])) {
    return random([
      "He uses MongoDB , SQL🍃",
      "Database: MongoDB , SQL",
      "MongoDB for storing chat data"
    ]);
  }

  // projects
  if (includesAny(msg, ["project", "work"])) {
    return random([
      "Portfolio, Chat App, Snake Game & AI Chat 🤖",
      "Multiple React based projects 🚀",
      "Full stack chat application 🔥"
    ]);
  }

  // chat
  if (includesAny(msg, ["chat", "ai chat", "bot"])) {
    return random([
      "Custom AI chat widget built by him 🤖",
      "This chat is built using React",
      "Includes animations + smart replies"
    ]);
  }

  // contact
  if (includesAny(msg, ["contact", "email", "mail"])) {
    return random([
      "You can reach him at: mehradheeraj314@gmail.com 📩",
      "Drop a mail here: mehradheeraj314@gmail.com",
      "Email available in contact section"
    ]);
  }

  // linkedin
  if (includesAny(msg, ["linkedin"])) {
    return random([
      "linkedin.com/in/dheeraj-mahara-1342b6363 💼",
      "Connect on LinkedIn 🔗",
      "LinkedIn profile available"
    ]);
  }

  // github
  if (includesAny(msg, ["github", "code"])) {
    return random([
      "github.com/dheeraj-mahara 💻",
      "Check his repositories 🚀",
      "All projects on GitHub"
    ]);
  }

  // resume
  if (includesAny(msg, ["resume", "cv"])) {
    return random([
      "Resume available on portfolio 📄",
      "Download CV from resume section",
      "Resume ready for download"
    ]);
  }

  // experience
  if (includesAny(msg, ["experience", "fresher"])) {
    return random([
      "Fresher with strong projects 💪",
      "Hands-on full stack projects",
      "Learning through real-world apps"
    ]);
  }

  // hire
  if (includesAny(msg, ["hire", "job", "freelance"])) {
    return random([
      "Open for work 💼",
      "Available for frontend roles",
      "You can hire him 🚀"
    ]);
  }

  // thanks
  if (includesAny(msg, ["thanks", "thank you"])) {
    return random([
      "You're welcome 😄",
      "Happy to help!",
      "Anytime 👍"
    ]);
  }

  // bye
  if (includesAny(msg, ["bye", "goodbye"])) {
    return random([
      "Bye 👋",
      "See you soon!",
      "Have a great day 😄"
    ]);
  }

  // fallback
  return random([
    "Try asking about skills, projects, or contact 😉",
    "I'm still learning 🤖",
    "Ask about Dheeraj's portfolio",
    "Didn't get that 😅",
    "Try 'skills' or 'projects'"
  ]);
};

    const sendMessage = () => {
        if (!input.trim()) return;

        const userMsg: Message = { from: "user", text: input };
        setMessages((prev) => [...prev, userMsg]);
        setInput("");

        setTyping(true);

        setTimeout(() => {
            const aiMsg: Message = { from: "ai", text: reply(input) };
            setMessages((prev) => [...prev, aiMsg]);
            setTyping(false);
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

                    {/* INPUT */}
                    <div className="p-2 border-t border-white/10 flex gap-2">
                        <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown} placeholder="Ask something..." className="flex-1 bg-white/20 text-white text-sm px-3 py-2 rounded-lg outline-none"
                        />
                        <button
                            onClick={sendMessage}
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