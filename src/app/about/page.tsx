import { DATA } from "@/data";
import type { Metadata } from "next";
import Markdown from "react-markdown";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: "A summary of my work experience and my education.",
};

function Badge(props: any) {
  return (
    <a
      {...props}
      target="_blank"
      className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
    />
  );
}

export default function AboutPage() {
  return (
    <section>
      <div className="mb-5">
        <h2 className="font-medium text-2xl mb-8 tracking-tighter">About</h2>
        <Markdown className="prose prose-neutral dark:prose-invert">
          {DATA.summary}
        </Markdown>
      </div>
      {/* Hackathon */}
      <h1 className="font-medium text-2xl mt-12 mb-4 tracking-tighter">
        Hackathons
      </h1>{" "}
      <hr className="my-3 border-neutral-100 dark:border-neutral-800" />
      <div className="prose prose-neutral dark:prose-invert">
        {DATA.hackathons.map((hackathons, id) => (
          <div key={hackathons.id} className="flex items-start mb-6">
            {hackathons?.logo && (
              <Image
                src={hackathons.logo}
                alt={hackathons.title}
                height="80"
                width="80"
                className="rounded-full border-2 bg-white dark:bg-black dark:border-black border-white object-contain overflow-hidden aspect-square "
              />
            )}

            <div className="ml-4">
              <h2 className="font-medium text-xl mb-1 tracking-tighter">
                {hackathons.title}
              </h2>

              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                {hackathons.dates}, {hackathons.location}
              </p>
              <hr className="my-3 border-neutral-100 dark:border-neutral-800" />

              <Markdown className="prose prose-neutral dark:prose-invert my-1">
                {hackathons.description}
              </Markdown>
              <Markdown className="prose prose-neutral dark:prose-invert text-sm mt-1">
                {hackathons.summary}
              </Markdown>
            </div>
          </div>
        ))}
      </div>
      {/* Education */}
      <h1 className="font-medium text-2xl mt-12 mb-4 tracking-tighter">
        My Education
      </h1>
      <hr className="my-3 border-neutral-100 dark:border-neutral-800" />
      <div className="prose prose-neutral dark:prose-invert">
        <Markdown className="prose prose-neutral dark:prose-invert">
          {DATA.educationsummary}
        </Markdown>

        {DATA.education.map((education, id) => (
          <div key={education.id} className="flex items-start mb-6">
            {education?.logoUrl && (
              <Image
                src={education.logoUrl}
                alt={education.school}
                height="80"
                width="80"
                className="rounded-full border-2 bg-white dark:bg-black dark:border-black border-white object-contain overflow-hidden aspect-square "
              />
            )}
            <div className="ml-4">
              <h2 className="font-medium text-xl mb-1 tracking-tighter">
                {education.school}
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                {education.degree}, {education.start} — {education.end}
              </p>
              <Markdown className="prose prose-neutral dark:prose-invert mt-1">
                {/* add description prop if needed */}
              </Markdown>
              <hr className="my-3 border-neutral-100 dark:border-neutral-800" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
