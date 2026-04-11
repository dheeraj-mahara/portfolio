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

  const random = (arr: string[]) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

 const reply = (msg: string): string => {
  msg = msg.toLowerCase();

  // greetings
  if (msg.includes("hi") || msg.includes("hello")) {
    return random([
      "Hey there 👋 How can I help you with Dheeraj?",
      "Hello! 😊 Want to know about Dheeraj skills or projects?",
      "Hi 👋 Ask me anything about Dheeraj!",
      "Hey! I'm here to help you explore Dheeraj's work 🚀"
    ]);
  }

  // intro
  if (msg.includes("who") || msg.includes("you")) {
    return random([
      "I'm Dheeraj's AI assistant 🤖 I can guide you through his portfolio.",
      "You can think of me as Dheeraj's digital assistant 😄",
      "I help you explore Dheeraj’s skills, projects & contact info!"
    ]);
  }

  if (msg.includes("name")) {
    return random([
      "His name is Dheeraj — a frontend developer 💻",
      "You're looking at Dheeraj's portfolio 😎",
      "Dheeraj is the developer behind this site!"
    ]);
  }

  if (msg.includes("about")) {
    return random([
      "Dheeraj is a React developer who loves building modern UIs ✨",
      "He enjoys creating clean and interactive web apps using React ⚛️",
      "Frontend is his playground 😄 especially with React & Tailwind!"
    ]);
  }

  if (msg.includes("education") || msg.includes("study")) {
    return random([
      "He is currently pursuing BCA 🎓",
      "Dheeraj is studying BCA and learning full stack development 🚀",
      "Along with BCA, he's sharpening his dev skills daily 💪"
    ]);
  }

  if (msg.includes("location") || msg.includes("where")) {
    return random([
      "He's based in India 🇮🇳",
      "Dheeraj works from India 🌍",
      "Currently located in India."
    ]);
  }

  // skills
  if (msg.includes("skill") || msg.includes("technology")) {
    return random([
      "React, TypeScript, Tailwind, JavaScript, Git, Node, Express 🚀",
      "His stack includes React , TS, Tailwind ,Express & Node.js",
      "Frontend + Backend basics: React, TS, Tailwind, Node 🔥"
    ]);
  }

  if (msg.includes("frontend")) {
    return random([
      "Frontend: React, Tailwind CSS, TypeScript ⚛️",
      "He builds UI using React + Tailwind 🎨",
      "Frontend is powered by React & modern tools 🚀"
    ]);
  }

  if (msg.includes("backend")) {
    return random([
      "Backend: Node.js 🌐",
      "He uses Node.js for backend basics ⚙️",
      "Server-side? Node.js is his go-to 🔧"
    ]);
  }

  // projects
  if (msg.includes("project")) {
    return random([
      "He built a Portfolio, Chat App, Snake Game & AI Chat UI 🧠",
      "Projects include chat apps, games & modern UI builds 🎮",
      "Some cool stuff: AI Chat UI, Portfolio & more 🚀"
    ]);
  }

  if (msg.includes("chat")) {
    return random([
      "He created a custom AI chat widget with animations 🤖",
      "That chat UI you're seeing? He built it himself 😎",
      "It includes animations + local storage support 🔥"
    ]);
  }

  // contact
  if (msg.includes("contact") || msg.includes("email")) {
    return random([
      "You can reach him at: dheeraj@email.com 📩",
      "Drop a mail here: dheeraj@email.com",
      "Email: dheeraj@email.com ✉️"
    ]);
  }

  if (msg.includes("linkedin")) {
    return random([
      "Here's his LinkedIn: linkedin.com/in/dheeraj-mahara-1342b6363 🔗",
      "Connect with him on LinkedIn 💼 linkedin.com/in/dheeraj-mahara-1342b6363",
      "LinkedIn profile 👉 linkedin.com/in/dheeraj-mahara-1342b6363"
    ]);
  }

  if (msg.includes("github")) {
    return random([
      "Check his GitHub: github.com/dheeraj-mahara 💻",
      "His code lives here 👉 github.com/dheeraj-mahara",
      "GitHub: github.com/dheeraj-mahara 🚀"
    ]);
  }

  if (msg.includes("resume") || msg.includes("cv")) {
    return random([
      "You can download his resume from the Resume section 📄",
      "Resume is available on the site 👍",
      "Check the Resume section to download it!"
    ]);
  }

  if (msg.includes("experience")) {
    return random([
      "He's a fresher but has strong hands-on projects 💪",
      "Currently building experience through real-world projects 🚀",
      "Fresher with solid project experience 🔥"
    ]);
  }

  if (msg.includes("hire") || msg.includes("work")) {
    return random([
      "Yes! He's open for freelance & junior roles 💼",
      "Available for work 🚀 Let's connect!",
      "You can hire him for frontend projects 😄"
    ]);
  }

  // fallback
  return random([
    "Hmm 🤔 try asking about Dheeraj's skills, projects, or contact!",
    "I didn’t get that 😅 maybe ask about his work or skills?",
    "Try something like 'projects' or 'skills' 😉",
    "I'm still learning 😄 ask me about Dheeraj's portfolio!"
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