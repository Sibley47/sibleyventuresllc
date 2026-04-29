"use client";

import { useState } from "react";
import Image from "next/image";

const serviceOptions = [
  "Remote Tech Support",
  "Microsoft 365 or Email Issue",
  "AI Assistant or AI Automation Build",
  "Website Build or Website Redesign",
  "Cybersecurity or Account Security Checkup",
  "Wi-Fi, Printer, or Device Troubleshooting",
  "Business Tech Consulting",
];

const services = [
  {
    title: "AI Customer Assistant",
    description:
      "A website AI assistant that can greet visitors, answer common questions, collect service details, and guide customers to request help.",
  },
  {
    title: "Website Build & Redesign",
    description:
      "Professional website setup, landing pages, redesigns, service pages, contact forms, and AI-ready customer intake flows for local customers and small businesses.",
  },
  {
    title: "Remote Tech Support",
    description:
      "Remote help for computers, phones, tablets, printers, Wi-Fi troubleshooting, software issues, account setup, and everyday technology problems.",
  },
  {
    title: "Remote Security Checkups",
    description:
      "Practical remote reviews of passwords, email security, devices, Wi-Fi settings, accounts, backups, and online safety.",
  },
  {
    title: "Microsoft 365 & Email Setup",
    description:
      "Professional email, cloud storage, account setup, Teams, permissions, and secure access for personal, home office, and business use.",
  },
  {
    title: "Automation Help",
    description:
      "Simple automation for reminders, forms, follow-ups, customer messages, scheduling, and repeat tasks that waste time.",
  },
  {
    title: "Business Tech Consulting",
    description:
      "Clear technology guidance for local customers and small businesses that need better systems, safer tools, and reliable support.",
  },
];

const foundations = [
  "Remote-first customer support",
  "Security-focused recommendations",
  "Clear communication without tech confusion",
  "AI, cloud, and automation made practical",
];

const aiAgentFeatures = [
  "Greets website visitors and explains services",
  "Answers common questions about tech support, cybersecurity, AI automation, and payments",
  "Collects name, email, phone number, device issue, remote access needs, and service details",
  "Helps customers choose the right service before contacting you",
  "Sends serious requests to Sibley Ventures LLC for follow-up",
];

const quickReplies = [
  "I need remote tech support",
  "My computer is slow",
  "I need help with email or Microsoft 365",
  "I want an AI assistant for my business",
  "I need a website built or redesigned",
];

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi, I’m the Sibley Ventures AI assistant. I can help with remote tech support, cybersecurity checkups, Microsoft 365, and AI automation. What do you need help with today?",
    },
  ]);
  const [chatInput, setChatInput] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [showServiceForm, setShowServiceForm] = useState(false);

  function openChat() {
    setChatOpen(true);
  }

  function closeChat() {
    setChatOpen(false);
  }

  function getAssistantReply(message: string) {
    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes("slow") || lowerMessage.includes("computer") || lowerMessage.includes("laptop")) {
      return "I can help with slow computer troubleshooting remotely. Common causes include startup apps, storage issues, malware, updates, or failing hardware. Please share your device type, operating system, and what changed recently.";
    }

    if (lowerMessage.includes("email") || lowerMessage.includes("365") || lowerMessage.includes("microsoft")) {
      return "Sibley Ventures can help with Microsoft 365, business email, account setup, shared storage, Teams, and secure access. Tell me if this is for personal use, home office, or a small business.";
    }

    if (lowerMessage.includes("wifi") || lowerMessage.includes("internet") || lowerMessage.includes("printer")) {
      return "Remote troubleshooting can help narrow down Wi-Fi, internet, and printer issues. Please tell me the device, router or printer model if you know it, and what error message you see.";
    }

    if (lowerMessage.includes("ai") || lowerMessage.includes("chatbot") || lowerMessage.includes("assistant") || lowerMessage.includes("automation")) {
      return "We can help plan and set up an AI customer assistant that answers questions, collects customer details, and routes serious requests to you. What type of business or workflow do you want the assistant to support?";
    }

    if (lowerMessage.includes("website") || lowerMessage.includes("web site") || lowerMessage.includes("landing page") || lowerMessage.includes("redesign")) {
      return "Sibley Ventures can help build or redesign a professional website with service pages, contact forms, customer intake, and AI-ready features. Tell me what type of website you need and whether you already own a domain.";
    }

    if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("payment")) {
      return "Payments are handled manually after service details are confirmed. Options may include PayPal, Zelle, Cash App, or invoice. For pricing, please share what service you need and how urgent it is.";
    }

    return "Thanks. I can help route this request. Please share your name, best contact method, device or service issue, and whether you prefer remote support. For urgent help, use the Request Service button to email Sibley Ventures directly.";
  }

  function sendChatMessage(messageText?: string) {
    const text = (messageText || chatInput).trim();

    if (!text) return;

    const assistantReply = getAssistantReply(text);

    setMessages((currentMessages) => [
      ...currentMessages,
      { role: "user", text },
      { role: "assistant", text: assistantReply },
    ]);
    setChatInput("");
  }

  return (
    <main className="min-h-screen bg-[#050503] text-white">
      {/* Top Bar */}
      <section className="border-b border-[#d4af37]/25 bg-[#080806] px-6 py-3 text-sm">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 md:flex-row">
          <p className="font-semibold tracking-wide text-[#d4af37]">CLIENT PORTAL COMING SOON</p>
          <div className="flex flex-wrap justify-center gap-4 text-white/85">
            <span>Remote Tech Help</span>
            <span>Sales Inquiries: support@sibleyventuresllc.com</span>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#d4af3738,transparent_32%),radial-gradient(circle_at_bottom_right,#ffffff18,transparent_28%),linear-gradient(135deg,#050503_0%,#12110c_48%,#000000_100%)]" />
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative mx-auto max-w-7xl px-6 py-8">
          {/* Header */}
          <header className="mb-16 flex items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-sm border border-[#d4af37]/25 bg-black p-2 shadow-lg shadow-black/40">
                <Image
                  src="/logo.png"
                  alt="Sibley Ventures LLC Logo"
                  width={72}
                  height={72}
                  priority
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-2xl font-black tracking-tight text-white">Sibley Ventures LLC</p>
                <p className="text-sm text-[#d4af37]">
                  Remote Tech Support • Cybersecurity • AI Agents
                </p>
              </div>
            </div>

            <a
              href="/request"
              className="hidden rounded-md bg-[#d4af37] px-5 py-3 font-bold text-black shadow-lg shadow-black/30 hover:bg-[#f3d675] md:inline-block"
            >
              Request Service
            </a>
          </header>

          <div className="grid items-center gap-10 pb-20 md:grid-cols-[1.15fr_0.85fr]">
            {/* Hero Text */}
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#d4af37]">
                Remote Support • Richmond & Central Virginia
              </p>

              <h1 className="max-w-3xl text-[2.15rem] font-black leading-[1.05] tracking-tight sm:text-4xl md:text-6xl">
                Remote Tech Support, Cybersecurity & AI Help for Homes and Small Businesses
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
                Sibley Ventures LLC provides remote-first technology support for customers who need help with devices, accounts, software, cloud tools, cybersecurity basics, and AI automation.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/request?service=Remote%20Tech%20Support"
                  className="rounded-md bg-[#d4af37] px-6 py-4 text-center font-bold text-black hover:bg-[#f3d675]"
                >
                  Request Remote Tech Help
                </a>

                <a
                  href="#services"
                  className="rounded-md border border-[#d4af37]/45 px-6 py-4 text-center font-bold text-white hover:bg-[#d4af37]/10"
                >
                  View Services
                </a>
              </div>
            </div>

            {/* AI Customer Agent Card */}
            <div className="rounded-xl border border-[#d4af37]/35 bg-[#f8f5ec] text-[#12110c] shadow-2xl shadow-black/40">
              <div className="rounded-t-xl bg-[#d4af37] px-6 py-5 text-center text-2xl font-black text-black">
                How Can We Help?
              </div>

              <div className="p-7 text-center">
                {!showServiceForm ? (
                  <>
                    <p className="text-lg text-gray-800">
                      Select what you need help with so we can route your request correctly.
                    </p>

                    <div className="mt-7 grid gap-3 text-left">
                      {serviceOptions.map((option) => (
                        <a
                          key={option}
                          href={`/request?service=${encodeURIComponent(option)}`}
                          className="relative z-10 block cursor-pointer touch-manipulation rounded-lg border border-[#d4af37]/40 bg-white px-4 py-4 text-left font-bold text-[#12110c] transition hover:border-[#d4af37] hover:bg-[#fff7db] active:bg-[#f3d675]"
                        >
                          {option}
                        </a>
                      ))}
                    </div>

                    <p className="mt-5 text-xs text-gray-600">
                      After selecting a service, you will be taken to a dedicated request form.
                    </p>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        setSelectedService("");
                        setShowServiceForm(false);
                      }}
                      className="mb-4 text-sm font-bold text-[#9b7a17] hover:underline"
                    >
                      ← Choose a different service
                    </button>

                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#9b7a17]">
                      Selected Service
                    </p>
                    <h2 className="mt-2 text-2xl font-black text-black">
                      {selectedService}
                    </h2>

                    <p className="mt-4 text-gray-700">
                      Fill out the form below and Sibley Ventures LLC will follow up with next steps.
                    </p>

                    <div className="mt-7 space-y-4 text-left">
                      <input
                        className="w-full rounded-md border border-[#d4af37]/50 bg-white px-4 py-4 text-gray-900 outline-none focus:border-[#d4af37]"
                        placeholder="Name"
                      />
                      <input
                        className="w-full rounded-md border border-[#d4af37]/50 bg-white px-4 py-4 text-gray-900 outline-none focus:border-[#d4af37]"
                        placeholder="Email or phone number"
                      />
                      <textarea
                        className="min-h-28 w-full rounded-md border border-[#d4af37]/50 bg-white px-4 py-4 text-gray-900 outline-none focus:border-[#d4af37]"
                        placeholder="Describe what you need help with. Include device type, software, error messages, urgency, or what you want built."
                      />

                      <a
                        href={`mailto:support@sibleyventuresllc.com?subject=${encodeURIComponent(
                          `New Sibley Ventures Request: ${selectedService}`
                        )}&body=${encodeURIComponent(
                          `Selected Service: ${selectedService}\n\nName:\nEmail or Phone:\nBest Time to Contact:\nIssue or Request Details:\nRemote Support Needed: Yes/No\n`
                        )}`}
                        className="block rounded-md bg-[#d4af37] px-6 py-4 text-center text-lg font-bold text-black hover:bg-[#f3d675]"
                      >
                        Submit Request
                      </a>
                    </div>

                    <p className="mt-5 text-xs text-gray-600">
                      Manual payments accepted through PayPal, Zelle, Cash App, or invoice after service confirmation.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 h-14 w-full rounded-t-[100%] bg-[#f8f5ec]" />
      </section>

      {/* Intro */}
      <section className="bg-[#f8f5ec] px-6 py-20 text-[#12110c]">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#9b7a17]">
            Remote Technology Partner
          </p>

          <h2 className="mt-4 text-4xl font-black">
            Practical Remote Tech Help for Everyday Customers
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-700">
            Technology should make life and business easier, not more stressful. Sibley Ventures LLC provides clear, security-focused remote support for customers, families, home offices, and small businesses that need reliable help without waiting for an on-site visit.
          </p>
        </div>
      </section>

      {/* Foundation */}
      <section className="bg-[#eee8d8] px-6 py-20 text-[#12110c]">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#9b7a17]">
                Our Foundation
              </p>
              <h2 className="mt-4 text-4xl font-black">
                Support, Security, Cloud, and AI Working Together
              </h2>
              <p className="mt-5 text-gray-700">
                We combine remote troubleshooting with cybersecurity awareness, cloud setup, and AI automation so customers can reduce frustration, protect their information, and use better tools from anywhere.
              </p>
            </div>

            <div className="grid gap-4">
              {foundations.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-[#d4af37]/30 bg-white p-5 shadow-sm"
                >
                  <p className="font-bold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-[#f8f5ec] px-6 py-20 text-[#12110c]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#9b7a17]">
              Services
            </p>
            <h2 className="mt-4 text-4xl font-black">
              How Sibley Ventures LLC Can Help
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-gray-700">
              Click a service tile to open a dedicated request form for that service.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:gap-6 md:mt-12 md:grid-cols-3">
            {services.map((service) => (
              <a
                key={service.title}
                href={`/request?service=${encodeURIComponent(service.title)}`}
                className="relative z-10 block cursor-pointer touch-manipulation rounded-xl border border-[#d4af37]/25 bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:border-[#d4af37] hover:bg-[#fff7db] hover:shadow-lg active:bg-[#f3d675] sm:p-7"
              >
                <div className="mb-5 h-2 w-16 rounded-full bg-[#d4af37]" />
                <h3 className="text-lg font-black sm:text-xl">{service.title}</h3>
                <p className="mt-4 text-gray-700">{service.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agent Model */}
      <section className="bg-[#050503] px-6 py-20 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#d4af37]">
              Complete AI Agent Model
            </p>
            <h2 className="mt-4 text-4xl font-black">
              An AI Assistant That Communicates With Customers
            </h2>
            <p className="mt-5 text-white/75">
              This site is designed to support a full AI customer assistant. The launch version uses a contact request flow, and the next upgrade can connect a real chatbot that answers questions, collects details, and routes leads to you.
            </p>
          </div>

          <div className="space-y-4">
            {aiAgentFeatures.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-[#d4af37]/25 bg-white/5 p-5"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f8f5ec] px-6 py-20 text-[#12110c]">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#9b7a17]">
              FAQ
            </p>
            <h2 className="mt-4 text-4xl font-black">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-10 space-y-5">
            <div className="rounded-xl border border-[#d4af37]/25 bg-white p-6">
              <h3 className="font-black">
                Do you only work with businesses?
              </h3>
              <p className="mt-2 text-gray-700">
                No. Sibley Ventures LLC supports everyday customers, families, home offices, and small businesses that need practical remote technology help.
              </p>
            </div>

            <div className="rounded-xl border border-[#d4af37]/25 bg-white p-6">
              <h3 className="font-black">
                Do you accept manual payments?
              </h3>
              <p className="mt-2 text-gray-700">
                Yes. Payments may be accepted through PayPal, Zelle, Cash App, or invoice after service details are confirmed.
              </p>
            </div>

            <div className="rounded-xl border border-[#d4af37]/25 bg-white p-6">
              <h3 className="font-black">
                Can you build an AI assistant for my website?
              </h3>
              <p className="mt-2 text-gray-700">
                Yes. We can help plan and set up an AI assistant that answers questions, collects customer information, and supports your service workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#080806] px-6 py-20 text-center text-white">
        <h2 className="text-4xl font-black">
          Need Remote Tech Help or an AI Customer Assistant?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-white/75">
          Contact Sibley Ventures LLC for remote tech support, cybersecurity guidance, cloud setup, or AI automation services.
        </p>

        <a
          href="/request"
          className="mt-8 inline-block rounded-md bg-[#d4af37] px-8 py-4 font-bold text-black hover:bg-[#f3d675]"
        >
          Request Service
        </a>


        <p className="mt-6 text-sm text-white/60">
          Sibley Ventures LLC • Richmond, Virginia • sibleyventuresllc.com
        </p>
      </section>

      {/* Floating AI Chatbot */}
      {chatOpen && (
        <div
          className="flex items-end bg-black/70 p-3 md:items-end md:justify-end md:bg-transparent md:p-5"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 2147483647,
            paddingBottom: "120px",
            pointerEvents: "auto",
          }}
        >
          <div className="max-h-[84vh] w-full overflow-hidden rounded-2xl border border-[#d4af37]/40 bg-[#f8f5ec] text-[#12110c] shadow-2xl shadow-black/70 md:max-w-sm">
            <div className="flex items-start justify-between gap-4 bg-[#080806] px-5 py-4 text-white">
              <div>
                <p className="font-black text-[#d4af37]">Sibley AI Assistant</p>
                <p className="text-xs text-white/70">Remote tech support intake assistant</p>
              </div>

              <button
                type="button"
                onClick={closeChat}
                onPointerUp={closeChat}
                onTouchEnd={(event) => {
                  event.preventDefault();
                  closeChat();
                }}
                className="touch-manipulation rounded-md border border-white/20 px-3 py-1 text-xs font-bold text-white hover:bg-white/10 active:bg-white/10"
              >
                Close
              </button>
            </div>

            <div className="max-h-[36vh] space-y-3 overflow-y-auto p-3 sm:p-4 md:max-h-80">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`rounded-xl px-4 py-3 text-sm ${
                    message.role === "assistant"
                      ? "bg-white text-gray-800"
                      : "ml-auto bg-[#d4af37] text-black"
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            <div className="space-y-2 border-t border-[#d4af37]/25 p-4">
              <div className="flex max-h-20 flex-wrap gap-2 overflow-y-auto md:max-h-24">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    type="button"
                    onClick={() => sendChatMessage(reply)}
                    className="touch-manipulation rounded-full border border-[#d4af37]/45 bg-white px-3 py-2 text-xs font-semibold hover:bg-[#fff7db] active:bg-[#f3d675]"
                  >
                    {reply}
                  </button>
                ))}
              </div>

              <div className="flex gap-2">
                <input
                  value={chatInput}
                  onChange={(event) => setChatInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") sendChatMessage();
                  }}
                  placeholder="Type your tech issue..."
                  className="min-w-0 flex-1 rounded-md border border-[#d4af37]/40 bg-white px-3 py-3 text-base outline-none focus:border-[#d4af37]"
                />
                <button
                  type="button"
                  onClick={() => sendChatMessage()}
                  className="shrink-0 touch-manipulation rounded-md bg-[#d4af37] px-4 py-3 text-sm font-bold text-black hover:bg-[#f3d675] active:bg-[#f3d675]"
                >
                  Send
                </button>
              </div>

              <a
                href="mailto:support@sibleyventuresllc.com?subject=New%20Remote%20Tech%20Support%20Request"
                className="block rounded-md bg-[#080806] px-4 py-3 text-center text-sm font-bold text-white hover:bg-black"
              >
                Email Sibley Ventures
              </a>
            </div>
          </div>
        </div>
      )}
      {!chatOpen && (
        <div
          role="button"
          tabIndex={0}
          aria-label="Open AI chat"
          onClick={openChat}
          onPointerUp={(event) => {
            event.stopPropagation();
            openChat();
          }}
          onTouchEnd={(event) => {
            event.preventDefault();
            event.stopPropagation();
            openChat();
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              openChat();
            }
          }}
          style={{
            position: "fixed",
            right: "16px",
            bottom: "120px",
            zIndex: 2147483647,
            display: "none",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "9999px",
            backgroundColor: "#d4af37",
            color: "#000000",
            padding: "16px 22px",
            fontWeight: 900,
            fontSize: "14px",
            boxShadow: "0 18px 40px rgba(0,0,0,0.55)",
            border: "2px solid rgba(0,0,0,0.25)",
            pointerEvents: "auto",
            cursor: "pointer",
            WebkitTapHighlightColor: "transparent",
            touchAction: "manipulation",
            userSelect: "none",
            WebkitUserSelect: "none",
          }}
          className="md:flex"
        >
          Chat with AI
        </div>
      )}
    </main>
  );
}