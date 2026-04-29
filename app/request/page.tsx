"use client";

import { FormEvent, useEffect, useState } from "react";

export default function RequestPage() {
  const [selectedService, setSelectedService] = useState("General Service Request");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [bestTime, setBestTime] = useState("");
  const [details, setDetails] = useState("");
  const [serviceAnswers, setServiceAnswers] = useState<Record<string, string>>({});

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const service = params.get("service");

    if (service) {
      setSelectedService(service);
    }
  }, []);

  function getServiceQuestions(service: string) {
    const lowerService = service.toLowerCase();

    if (lowerService.includes("website") || lowerService.includes("redesign")) {
      return [
        "Do you need a brand-new website or a redesign of an existing website?",
        "What type of website do you need? Example: business site, landing page, portfolio, service booking, ecommerce, nonprofit, etc.",
        "Do you already own a domain name? If yes, what is it?",
        "Do you already have a logo, brand colors, photos, or written content?",
        "What pages do you need? Example: Home, Services, About, Contact, Booking, FAQ, Payments, etc.",
        "Do you want an AI chatbot, contact form, booking link, payment instructions, or customer intake form added?",
        "Do you have an example website style you like? Paste the link if you have one.",
        "What is your ideal launch timeline and budget range?",
      ];
    }

    if (lowerService.includes("ai") || lowerService.includes("automation") || lowerService.includes("assistant")) {
      return [
        "What do you want the AI assistant or automation to do?",
        "Who will use it? Example: customers, employees, yourself, students, clients, etc.",
        "What questions or tasks should it handle automatically?",
        "Where do you want it to work? Example: website, email, forms, documents, social media, internal workflow, etc.",
        "Do you already use any tools like Gmail, Microsoft 365, Google Forms, Calendly, Wix, Shopify, or a CRM?",
        "What information should the AI collect from users?",
        "What should happen after the AI collects the information? Example: email you, book a call, create a ticket, send a quote, etc.",
      ];
    }

    if (lowerService.includes("microsoft") || lowerService.includes("365") || lowerService.includes("email")) {
      return [
        "Is this for personal use, home office, or a business?",
        "What do you need help with? Example: email setup, password reset, Outlook, Teams, OneDrive, shared mailbox, domain email, etc.",
        "Do you already have a Microsoft 365 account or subscription?",
        "Are you having an error message? If yes, copy it here.",
        "How many users or email accounts need help?",
        "Do you need help setting up security like MFA, password recovery, or account permissions?",
      ];
    }

    if (lowerService.includes("security") || lowerService.includes("cyber")) {
      return [
        "What are you concerned about? Example: hacked account, suspicious email, malware, weak passwords, device security, Wi-Fi security, etc.",
        "Is this for a personal device, family, home office, or business?",
        "Which accounts or devices need to be checked?",
        "Have you noticed any warning signs? Example: password changed, unknown login, pop-ups, slow device, strange emails, etc.",
        "Do you currently use MFA, password manager, antivirus, or backups?",
        "How urgent is this issue?",
      ];
    }

    if (lowerService.includes("wi-fi") || lowerService.includes("printer") || lowerService.includes("device")) {
      return [
        "What device or equipment needs help? Example: laptop, phone, tablet, printer, router, smart TV, etc.",
        "What brand/model is it if you know?",
        "What exactly is not working?",
        "When did the issue start?",
        "Do you see any error message?",
        "Have you already tried restarting, updating, or reconnecting it?",
      ];
    }

    if (lowerService.includes("remote tech") || lowerService.includes("support")) {
      return [
        "What device needs remote support? Example: Windows PC, Mac, iPhone, Android, tablet, printer, etc.",
        "What problem are you experiencing?",
        "When did the issue start?",
        "Are you comfortable using remote support tools if needed?",
        "What operating system are you using? Example: Windows 11, macOS, iOS, Android, etc.",
        "How urgent is the issue?",
      ];
    }

    if (lowerService.includes("consulting") || lowerService.includes("consultation")) {
      return [
        "What goal are you trying to accomplish?",
        "Is this for personal use, a home office, or a business?",
        "What technology tools or systems are you currently using?",
        "What problem are you trying to solve or improve?",
        "Do you need a one-time consultation or ongoing support?",
      ];
    }

    return [
      "What do you need help with?",
      "Is this for personal use, home office, or a business?",
      "How urgent is your request?",
      "What is the best way to contact you?",
    ];
  }

  const serviceQuestions = getServiceQuestions(selectedService);

  function updateServiceAnswer(question: string, answer: string) {
    setServiceAnswers((currentAnswers) => ({
      ...currentAnswers,
      [question]: answer,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData();

    formData.append("name", name);
    formData.append("contact", contact);
    formData.append("bestTime", bestTime);
    formData.append("service", selectedService);

    const serviceQuestionDetails = serviceQuestions
      .map((question) => `${question}: ${serviceAnswers[question] || "No answer provided"}`)
      .join("\n");

    formData.append("serviceQuestions", serviceQuestionDetails);
    formData.append("details", details);

    await fetch("https://formspree.io/f/xdayqpwe", {
      method: "POST",
      body: formData,
    });

    window.location.href = "/thank-you";
  }

  return (
    <main className="min-h-screen bg-[#050503] px-4 py-6 text-white sm:px-6 sm:py-12">
      <section className="mx-auto max-w-3xl rounded-2xl border border-[#d4af37]/35 bg-[#f8f5ec] p-5 text-[#12110c] shadow-2xl shadow-black/30 sm:p-8">
        <a href="/" className="text-sm font-bold text-[#9b7a17] hover:underline">
          ← Back to Home
        </a>

        <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#9b7a17] sm:text-sm sm:tracking-[0.25em]">
          Service Request
        </p>

        <h1 className="mt-3 text-2xl font-black leading-tight sm:text-4xl">
          {selectedService}
        </h1>

        <p className="mt-4 text-gray-700">
          Answer the questions below so Sibley Ventures LLC can understand your request and follow up with the right next steps.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4 sm:mt-8">
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-full rounded-md border border-[#d4af37]/50 bg-white px-4 py-4 text-gray-900 outline-none focus:border-[#d4af37]"
            placeholder="Name"
            required
          />

          <input
            value={contact}
            onChange={(event) => setContact(event.target.value)}
            className="w-full rounded-md border border-[#d4af37]/50 bg-white px-4 py-4 text-gray-900 outline-none focus:border-[#d4af37]"
            placeholder="Email or phone number"
            required
          />

          <input
            value={bestTime}
            onChange={(event) => setBestTime(event.target.value)}
            className="w-full rounded-md border border-[#d4af37]/50 bg-white px-4 py-4 text-gray-900 outline-none focus:border-[#d4af37]"
            placeholder="Best time to contact you"
          />

          <div className="rounded-xl border border-[#d4af37]/25 bg-white p-4">
            <h2 className="text-lg font-black text-[#12110c]">
              Questions for {selectedService}
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              These questions help us understand exactly what you need before we contact you.
            </p>

            <div className="mt-5 space-y-4">
              {serviceQuestions.map((question) => (
                <label key={question} className="block">
                  <span className="block text-sm font-bold text-[#12110c]">
                    {question}
                  </span>
                  <textarea
                    value={serviceAnswers[question] || ""}
                    onChange={(event) => updateServiceAnswer(question, event.target.value)}
                    className="mt-2 min-h-24 w-full rounded-md border border-[#d4af37]/50 bg-white px-4 py-3 text-gray-900 outline-none focus:border-[#d4af37]"
                    placeholder="Type your answer here..."
                    required
                  />
                </label>
              ))}
            </div>
          </div>

          <textarea
            value={details}
            onChange={(event) => setDetails(event.target.value)}
            className="min-h-32 w-full rounded-md border border-[#d4af37]/50 bg-white px-4 py-4 text-gray-900 outline-none focus:border-[#d4af37]"
            placeholder="Anything else we should know?"
          />

          <button
            type="submit"
            className="block w-full rounded-md bg-[#d4af37] px-6 py-4 text-center text-base font-bold text-black hover:bg-[#f3d675] active:bg-[#f3d675] sm:text-lg"
          >
            Submit Request
          </button>
        </form>
      </section>
    </main>
  );
}