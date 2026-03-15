"use client";

import { ArrowUpRight, ChevronLeft, ChevronRight, Github } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const getSlideClass = (index: number, current: number) => {
	if (index === current) {
		return "scale-100 opacity-100";
	}
	if (index < current) {
		return "-translate-x-full scale-95 opacity-0";
	}
	return "translate-x-full scale-95 opacity-0";
};

const PROJECTS = [
	{
		name: "Linkly",
		description:
			"Full-stack link-sharing platform with real-time analytics, QR code generation, and URL management.",
		tech: ["Next.js", "Supabase", "Prisma", "Shadcn/ui", "Zod"],
		github: "https://github.com/Zyano0x/Linkly",
		image: "/images/projects/linkly.png",
		date: "Dec 2024",
	},
	{
		name: "Taskly",
		description:
			"Task management app with CRUD operations, RESTful API, filtering, searching, and pagination.",
		tech: ["React", "Express.js", "Supabase", "Prisma", "Zod"],
		github: "https://github.com/Zyano0x/Taskly",
		image: "/images/projects/taskly.png",
		date: "Oct 2024",
	},
	{
		name: "Tourify",
		description:
			"Modern tour booking system with beautiful UI, optimized performance, and enhanced UX.",
		tech: ["Next.js", "TypeScript", "TailwindCSS"],
		github: "https://github.com/Zyano0x/Tourify",
		image: "/images/projects/tourify.png",
		date: "2024",
	},
	{
		name: "BookTrip",
		description:
			"Tour booking system with JWT auth, role-based access, automated emails, and SSR UI.",
		tech: ["Spring Boot", "Spring Security", "MySQL", "Thymeleaf"],
		github: "https://github.com/Zyano0x/BookTrip",
		image: "/images/projects/booktrip.png",
		date: "Nov 2023 – Apr 2024",
	},
] as const;

export default function ProjectsSection() {
	const [current, setCurrent] = useState(0);
	const [isTransitioning, setIsTransitioning] = useState(false);

	const goTo = useCallback(
		(index: number) => {
			if (isTransitioning) {
				return;
			}
			setIsTransitioning(true);
			setCurrent(index);
			setTimeout(() => setIsTransitioning(false), 500);
		},
		[isTransitioning]
	);

	const next = useCallback(() => {
		goTo((current + 1) % PROJECTS.length);
	}, [current, goTo]);

	const prev = useCallback(() => {
		goTo((current - 1 + PROJECTS.length) % PROJECTS.length);
	}, [current, goTo]);

	// Auto-advance
	useEffect(() => {
		const timer = setInterval(next, 6000);
		return () => clearInterval(timer);
	}, [next]);

	const project = PROJECTS[current];
	if (!project) {
		return null;
	}

	return (
		<section className="relative overflow-hidden py-24" id="projects">
			<p className="pointer-events-none absolute -top-3 left-6 select-none font-black font-mono text-[10rem] text-accent/[0.08] leading-none lg:left-12">
				04
			</p>
			<div className="pointer-events-none absolute top-8 left-6 size-6 opacity-[0.30] lg:left-12">
				<div className="absolute top-0 left-0 h-full w-px bg-accent" />
				<div className="absolute top-0 left-0 h-px w-full bg-accent" />
			</div>
			<div className="pointer-events-none absolute top-8 right-6 size-6 opacity-[0.25] lg:right-12">
				<div className="absolute top-0 right-0 h-full w-px bg-accent" />
				<div className="absolute top-0 right-0 h-px w-full bg-accent" />
			</div>
			<div className="pointer-events-none absolute bottom-8 left-6 size-6 opacity-[0.25] lg:left-12">
				<div className="absolute bottom-0 left-0 h-full w-px bg-accent" />
				<div className="absolute bottom-0 left-0 h-px w-full bg-accent" />
			</div>
			<div className="pointer-events-none absolute right-6 bottom-8 size-6 opacity-[0.25] lg:right-12">
				<div className="absolute right-0 bottom-0 h-full w-px bg-accent" />
				<div className="absolute right-0 bottom-0 h-px w-full bg-accent" />
			</div>
			<div className="pointer-events-none absolute bottom-16 left-8 hidden size-32 opacity-[0.12] lg:block">
				<div
					className="size-full"
					style={{
						backgroundImage:
							"repeating-linear-gradient(60deg, var(--foreground) 0px, var(--foreground) 1px, transparent 1px, transparent 20px), repeating-linear-gradient(-60deg, var(--foreground) 0px, var(--foreground) 1px, transparent 1px, transparent 20px)",
					}}
				/>
			</div>
			<div className="mx-auto max-w-7xl px-6 lg:px-12">
				<div className="mb-4 flex items-center justify-between lg:mb-8">
					<div className="flex items-center gap-4">
						<div className="h-px w-8 bg-accent" />
						<p className="font-mono text-muted-foreground text-xs uppercase tracking-[0.2em]">
							Projects
						</p>
					</div>
					<div className="flex items-center gap-3 ">
						<div className="flex items-baseline gap-1 lg:hidden">
							<span className="font-black font-mono text-accent text-xl lg:text-3xl">
								{String(current + 1).padStart(2, "0")}
							</span>
							<span className="font-mono text-muted-foreground text-xs lg:text-sm">
								/ {String(PROJECTS.length).padStart(2, "0")}
							</span>
						</div>
						<div className="flex gap-1.5">
							{PROJECTS.map((p, i) => (
								<button
									aria-label={`Go to project ${p.name}`}
									className={`h-1 transition-all duration-300 ${
										i === current
											? "w-5 bg-accent lg:w-8"
											: "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/60 lg:w-4"
									}`}
									key={p.name}
									onClick={() => goTo(i)}
									type="button"
								/>
							))}
						</div>
					</div>
				</div>

				<div className="grid lg:grid-cols-12 lg:gap-16">
					<div className="hidden flex-col gap-8 lg:col-span-6 lg:flex">
						<div className="flex items-center justify-between gap-4">
							<div className="flex items-baseline gap-2">
								<span className="font-black font-mono text-5xl text-accent">
									{String(current + 1).padStart(2, "0")}
								</span>
								<span className="font-mono text-lg text-muted-foreground">
									/ {String(PROJECTS.length).padStart(2, "0")}
								</span>
							</div>
							<div className="flex items-center gap-2">
								<button
									aria-label="Previous project"
									className="flex size-10 items-center justify-center border border-border transition-colors hover:bg-accent hover:text-accent-foreground"
									onClick={prev}
									type="button"
								>
									<ChevronLeft className="size-5" />
								</button>
								<button
									aria-label="Next project"
									className="flex size-10 items-center justify-center border border-border transition-colors hover:bg-accent hover:text-accent-foreground"
									onClick={next}
									type="button"
								>
									<ChevronRight className="size-5" />
								</button>
							</div>
						</div>
						<div
							className={`flex flex-col gap-4 transition-all duration-500 ${
								isTransitioning
									? "translate-y-2 opacity-0"
									: "translate-y-0 opacity-100"
							}`}
						>
							<h3 className="font-black text-3xl uppercase tracking-tight">
								{project.name}
							</h3>
							<p className="font-mono text-muted-foreground text-xs">
								{project.date}
							</p>
							<p className="text-muted-foreground text-sm leading-relaxed">
								{project.description}
							</p>
							<div className="flex flex-wrap gap-2">
								{project.tech.map((t) => (
									<span
										className="border border-border px-2.5 py-1 font-mono text-[10px] text-muted-foreground uppercase tracking-wider"
										key={t}
									>
										{t}
									</span>
								))}
							</div>
							<a
								className="group mt-2 inline-flex items-center gap-2 text-sm transition-colors hover:text-accent"
								href={project.github}
								rel="noopener noreferrer"
								target="_blank"
							>
								<Github className="size-4" />
								View Source
								<ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
							</a>
						</div>
					</div>

					<div className="relative lg:col-span-6">
						<div className="relative aspect-[3/2] w-full overflow-hidden border border-border bg-card">
							{PROJECTS.map((p, i) => (
								<div
									className={`absolute inset-0 transition-all duration-700 ease-out ${getSlideClass(i, current)}`}
									key={p.name}
								>
									<Image
										alt={`${p.name} project showcase`}
										className="object-cover"
										fill
										priority={i === 0}
										src={p.image}
									/>
								</div>
							))}
							<div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
							<div className="absolute right-6 bottom-6 left-6">
								<p
									className={`font-black text-4xl text-foreground uppercase tracking-tight transition-all duration-500 md:text-6xl ${
										isTransitioning
											? "translate-y-4 opacity-0"
											: "translate-y-0 opacity-100"
									}`}
								>
									{project.name}
								</p>
							</div>

							<button
								aria-label="Previous project"
								className="absolute top-1/2 left-2 flex size-8 -translate-y-1/2 items-center justify-center bg-background/60 backdrop-blur-sm transition-colors hover:bg-accent hover:text-accent-foreground lg:hidden"
								onClick={prev}
								type="button"
							>
								<ChevronLeft className="size-4" />
							</button>
							<button
								aria-label="Next project"
								className="absolute top-1/2 right-2 flex size-8 -translate-y-1/2 items-center justify-center bg-background/60 backdrop-blur-sm transition-colors hover:bg-accent hover:text-accent-foreground lg:hidden"
								onClick={next}
								type="button"
							>
								<ChevronRight className="size-4" />
							</button>
						</div>
						<div className="h-px w-full bg-border">
							<div
								className="h-full bg-accent transition-all duration-300"
								style={{ width: `${((current + 1) / PROJECTS.length) * 100}%` }}
							/>
						</div>

						<div
							className={`flex flex-col gap-3 pt-5 transition-all duration-500 lg:hidden ${
								isTransitioning
									? "translate-y-2 opacity-0"
									: "translate-y-0 opacity-100"
							}`}
						>
							<div className="flex items-baseline justify-between gap-3">
								<h3 className="font-black text-xl uppercase tracking-tight">
									{project.name}
								</h3>
								<p className="shrink-0 font-mono text-muted-foreground text-xs">
									{project.date}
								</p>
							</div>
							<p className="text-muted-foreground text-sm leading-relaxed">
								{project.description}
							</p>
							<div className="flex flex-wrap gap-1.5">
								{project.tech.map((t) => (
									<span
										className="border border-border px-2 py-0.5 font-mono text-[10px] text-muted-foreground uppercase tracking-wider"
										key={t}
									>
										{t}
									</span>
								))}
							</div>
							<a
								className="group inline-flex items-center gap-2 text-sm transition-colors hover:text-accent"
								href={project.github}
								rel="noopener noreferrer"
								target="_blank"
							>
								<Github className="size-4" />
								View Source
								<ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
							</a>
						</div>
					</div>
				</div>
				<div className="mt-12 border-border border-t pt-8">
					<a
						className="group inline-flex items-center gap-3 font-mono text-muted-foreground text-sm transition-colors hover:text-foreground"
						href="https://github.com/Zyano0x"
						rel="noopener noreferrer"
						target="_blank"
					>
						<Github className="size-4" />
						View all repositories
						<ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
					</a>
				</div>
			</div>
		</section>
	);
}
