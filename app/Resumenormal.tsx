// app/Resume.tsx
"use client";

import data from "../data/datanormal.js";

export default function Resume() {
  const sectionTitle =
    "text-lg font-semibold font-menbere border-b border-gray-300 pb-1 mb-1";

  return (
    <main className="mx-auto max-w-[794px] text-[14px] leading-snug text-gray-800 font-sans bg-white">
      {/* Header */}
      <header className="text-center pb-4">
        <h1 className="text-4xl font-bold font-menbere">{data.name}</h1>
        <div className="text-sm mt-1 space-x-1 bg-gray-200">
          <span>{data.contact.phone}</span>| <span>{data.contact.email}</span>|{" "}
          <a
            href={data.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="underline "
          >
            {data.contact.linkedin}
          </a>
          {/* |{" "}
          <a
            href={data.contact.portfolio}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline"
          >
            Portfolio
          </a>
          |{" "}
          <a
            href={data.contact.github}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline"
          >
            GitHub
          </a> */}
        </div>
      </header>

      {/* Summary */}
      <section>
        <h2 className={sectionTitle}>PROFESSIONAL SUMMARY</h2>
        <p className="text-[15px]">{data.summary}</p>
      </section>

      {/* Skills */}
      {/* <section>
        <h2 className={sectionTitle}>TECHNICAL SKILLS</h2>
        <div className="text-[15px]">
          {Object.entries(data.skills).map(([key, values]) => (
            <div key={key}>
              <span className="font-semibold capitalize">{key}:</span>{" "}
              {values.join(", ")}
            </div>
          ))}
        </div>
      </section> */}

      {/* Experience */}
      <section>
        <h2 className={sectionTitle}>WORK EXPERIENCE</h2>
        {data.experience.map((exp: any, idx) => (
          <div key={idx} className="mb-2">
            <p className="font-semibold text-[15px]">
              {exp.title} –{" "}
              <span className="text-[12px] font-medium">{exp.company}</span>
            </p>
            <p className="italic text-gray-600">{exp.date}</p>
            <ul className="list-disc list-inside ml-2">
              {exp.points.map((point: string, i: number) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Education */}
      <section>
        <h2 className={sectionTitle}>EDUCATION</h2>
        <p className="font-semibold text-[15px]">{data.education.program}</p>
        <p className="text-[14px] italic">{data.education.school}</p>
        {/* <p>{data.education.focus}</p> */}
      </section>

      {/* Soft Skills */}
      <section>
        <h2 className={sectionTitle}>SKILLS</h2>
        <ul className="list-disc list-inside text-[15px]">
          {data.softSkills.map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className={sectionTitle}>AVAILABILITY</h2>
        <p className="font-semibold text-[15px]">{data.availability}</p>
      </section>

      {/* Projects */}
      {/* <section>
        <h2 className={sectionTitle}>PROJECTS</h2>
        {data.projects.map((proj, idx) => (
          <div key={idx} className="mb-2">
            <p className="font-semibold text-[17px]">
              {proj.title} –{" "}
              <span className="text-[14px] font-medium text-blue-600">
                {proj.links.github && (
                  <a
                    href={proj.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="underline mr-2"
                  >
                    GitHub
                  </a>
                )}
                {proj.links.website && (
                  <a
                    href={proj.links.website}
                    target="_blank"
                    rel="noreferrer"
                    className="underline mr-2"
                  >
                    Website
                  </a>
                )}
                {proj.links.figma && (
                  <a
                    href={proj.links.figma}
                    target="_blank"
                    rel="noreferrer"
                    className="underline mr-2"
                  >
                    Figma
                  </a>
                )}
              </span>
            </p>
            <span className="font-semibold">Tech Stack:</span>{" "}
            <span className="italic text-gray-600">
              {proj.techStack.join(", ")}
            </span>
            <ul className="list-disc ml-5 text-[15px]">
              {proj.description.map((point, i) => (
                <li key={i} className="list-outside">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section> */}
    </main>
  );
}
