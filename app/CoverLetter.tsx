"use client";

import data from "../data/data.js";

export default function CoverLetter() {
  const { coverLetter, name, contact } = data;

  return (
    <main className="mx-auto my-8 max-w-[794px] text-[15px] leading-relaxed text-gray-800 font-sans bg-white">
      {/* Header */}
      <header className="mb-4">
        <div className="flex flex-col text-sm leading-tight space-y-1">
          <p className="font-bold">{name}</p>
          <p>📞 {contact.phone}</p>
          <p>📧 {contact.email}</p>
          <p>📍 Calgary, AB</p>
          <div className="">
            🔗{" "}
            <a
              href={contact.linkedin}
              className="text-blue-600 underline"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>{" "}
            |{" "}
            <a
              href={contact.portfolio}
              className="text-blue-600 underline"
              target="_blank"
              rel="noreferrer"
            >
              Portfolio
            </a>{" "}
            |{" "}
            <a
              href={contact.github}
              className="text-blue-600 underline"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </header>

      {/* Date */}
      <p className="mt-6 mb-4">
        {new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      {/* Company Info */}
      <section className="mb-4">
        <p className="font-semibold">{coverLetter.hiringTeam},</p>
        <p className="font-semibold">{coverLetter.company}</p>
      </section>

      {/* Message */}
      <section className="whitespace-pre-line space-y-1">
        <p>{coverLetter.dearMessage}</p>
        <p>{coverLetter.body}</p>
        <p>Warm regards,</p>
        <p className="font-bold">{name}</p>
      </section>
    </main>
  );
}
