import DownloadResume from "@/components/download-resume";
import { Icons } from "@/components/icons";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Skills } from "@/components/skills";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

export const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10 ">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name}`}
              />
              <BlurFade
                className="max-w-[600px] text-sm"
                delay={BLUR_FADE_DELAY}
              >
                <p className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                  I have a <b>3+ years of</b> experience as a <b>Full Stack Web Developer</b>, passionate about building scalable and impactful web solutions, dedicated to bringing ideas to life on the web.
                </p>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY}>
                <DownloadResume />
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border-4 border-[#9a6e6d]">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <p className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            A results-driven <b>Full Stack Web Developer</b> with <b>3+ years</b> deep expertise in building scalable, performant, and secure web applications using the <b>MERN stack</b>. Experienced in designing microservices architectures, optimizing backend systems, and crafting intuitive user interfaces that prioritize usability and impact. Skilled in bridging frontend and backend seamlessly, delivering robust APIs, and integrating modern DevOps workflows to ensure reliability and efficiency across deployments. Passionate about transforming complex business needs into elegant, user-centric digital solutions that scale effortlessly.
          </p>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          <div className="space-y-5">
            {DATA.work.map((work, id) => (
              <BlurFade
                key={work.company}
                delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              >
                <ResumeCard
                  key={work.company}
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  href={work.href}
                  badges={work.badges}
                  period={`${work.start} - ${work.end ?? "Present"}`}
                  description={work.description as unknown as string[]}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <Skills />
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my project work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-5 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.websiteURL}
                  githubURL={project?.githubURL}
                  key={project.title}
                  title={project.title}
                  description={project.desc as unknown as string[]}
                  tags={project.techStack}
                  image={project.imgURL}
                  links={[
                    {
                      type: "Website",
                      href: project.websiteURL,
                      icon: <Icons.globe className="size-3" />,
                    },
                    {
                      type: "Source",
                      href: project.githubURL,
                      icon: <Icons.github className="size-3" />,
                    }
                  ]}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Would you like to get in touch? Just shoot me an {" "}
                <a href="mailto:digitalsajed@gmail.com" target="_blank"
                  rel="noopener noreferrer" className="text-blue-700 font-semibold" >email here</a> {" "}
                or contact me at <span className="text-blue-700 font-semibold">7773936878</span> and I&apos;ll respond you, surely.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
