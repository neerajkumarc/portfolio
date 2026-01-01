import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { ChevronRight } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const websiteProjects = DATA.projects.filter((project) => project.type === "Website");
  const appProjects = DATA.projects.filter((project) => project.type === "App");

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      {/* Background Gradients */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-white dark:bg-black">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[510px] w-[510px] rounded-full bg-gray-200 opacity-20 blur-[200px] animate-gradient-xy"></div>
        <div className="absolute right-0 bottom-0 -z-10 m-auto h-510px] w-[510px] rounded-full bg-gray-200 opacity-20 blur-[200px] animate-gradient-xy"></div>
      </div>

      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between items-center">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                className="max-w-[600px] md:text-md"
                delay={BLUR_FADE_DELAY}
                text={"Hi, I'm "}
              />
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none font-cursive"
                yOffset={8}
                text={`${DATA.name}`}
              />
              <BlurFadeText
                className="max-w-[600px] text-sm md:text-md"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-32 border">
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
          <Markdown className=" max-w-full text-pretty  text-sm ">
            {DATA.summary}
          </Markdown>
          <div className="flex flex-wrap gap-4 mt-4 ">
            {DATA.contact.social.map((social) => (
              <div
                key={social.url}
                className="flex gap-1 justify-center items-center"
              >
                <social.icon className="size-4" />
                <a href={social.url} target="_blank" rel="noreferrer">
                  {social.name}
                </a>
              </div>
            ))}
          </div>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
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
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="projects">
        <div className="space-y-4 w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex items-start justify-between flex-row sm:items-center gap-2">
              <h2 className="text-xl font-bold">Projects</h2>
              <Link href="/projects" className="group flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                View All Projects
                <ChevronRight className="size-3 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </BlurFade>

          {/* Websites Section */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto mb-8">

            <h3 className="col-span-full text-lg font-semibold text-muted-foreground mb-2"><BlurFadeText text="Websites" delay={BLUR_FADE_DELAY * 12} /> </h3>

            {websiteProjects.slice(0, 4).map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  active={project.active}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>

          {/* Apps Section */}
          {appProjects.length > 0 && (
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
              <h3 className="col-span-full text-lg font-semibold text-muted-foreground mb-2"><BlurFadeText text="Apps" delay={BLUR_FADE_DELAY * 13} /> </h3>
              {appProjects.slice(0, 4).map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 13 + id * 0.05}
                >
                  <ProjectCard
                    href={project.href}
                    key={project.title}
                    title={project.title}
                    active={project.active}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    image={project.image}
                    video={project.video}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section> */}
    </main>
  );
}
