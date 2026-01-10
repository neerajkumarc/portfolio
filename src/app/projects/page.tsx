"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { TabSwitcher } from "@/components/tab-switcher";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsPage() {
    const [activeTab, setActiveTab] = useState<string>("websites");
    const websiteProjects = DATA.projects.filter(
        (project) => project.type === "Website"
    );
    const appProjects = DATA.projects.filter(
        (project) => project.type === "App"
    );

    return (
        <main className="flex flex-col min-h-[100dvh] space-y-10 py-2 px-4 md:px-6">
            <div className="fixed inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-white opacity-20 blur-[100px] animate-gradient-xy"></div>
                <div className="absolute right-0 bottom-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-white opacity-20 blur-[100px] animate-gradient-xy"></div>
            </div>

            <section id="header">
                <div className="mx-auto w-full max-w-2xl text-center space-y-4">
                    <BlurFade delay={BLUR_FADE_DELAY}>
                        <Link
                            href="/"
                            className="text-sm text-muted-foreground hover:underline mb-4 block"
                        >
                            ← Back to Home
                        </Link>
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            All Projects
                        </h1>
                        <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Here showcased are all the projects I have worked on.
                        </p>
                    </BlurFade>
                </div>
            </section>

            {/* Tab Switcher */}
            <section id="tabs" className="flex justify-center w-full">
                <BlurFade delay={BLUR_FADE_DELAY * 1.5}>
                    <TabSwitcher
                        tabs={[
                            { id: "websites", label: "Websites" },
                            { id: "apps", label: "Apps" },
                        ]}
                        activeTab={activeTab}
                        onChange={setActiveTab}
                    />
                </BlurFade>
            </section>

            <section id="projects">
                <div className="max-w-[800px] mx-auto w-full space-y-8">
                    <AnimatePresence mode="wait">
                        {activeTab === "websites" ? (
                            <motion.div
                                key="websites"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="space-y-4"
                            >
                                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                    {websiteProjects.map((project, id) => (
                                        <BlurFade
                                            key={project.title}
                                            delay={BLUR_FADE_DELAY * 2 + id * 0.05}
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
                            </motion.div>
                        ) : (
                            <motion.div
                                key="apps"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="space-y-4"
                            >
                                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                    {appProjects.length > 0 ? (
                                        appProjects.map((project, id) => (
                                            <BlurFade
                                                key={project.title}
                                                delay={BLUR_FADE_DELAY * 2 + id * 0.05}
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
                                        ))
                                    ) : (
                                        <div className="col-span-1 sm:col-span-2 text-center py-20 text-muted-foreground">
                                            No app projects yet.
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>
        </main>
    );
}
