const SKILL_CATEGORIES = [
	{
		title: "Languages",
		skills: ["Python", "Java", "JavaScript", "TypeScript", "C++", "HTML/CSS"],
	},
	{
		title: "Frameworks",
		skills: [
			"Django REST",
			"React",
			"Next.js",
			"Node.js",
			"Express.js",
			"Spring Boot",
			"TailwindCSS",
			"Prisma ORM",
		],
	},
	{
		title: "Databases",
		skills: ["PostgreSQL", "MongoDB", "Supabase", "MySQL"],
	},
	{
		title: "Tools",
		skills: ["Git", "Docker", "VS Code", "WebStorm", "Insomnia", "Jira"],
	},
] as const;

export default function SkillsSection() {
	return (
		<section className="relative overflow-hidden py-24" id="skills">
			<p className="pointer-events-none absolute -top-3 right-6 select-none font-black font-mono text-[10rem] text-accent/[0.08] leading-none lg:right-12">
				05
			</p>
			<div className="pointer-events-none absolute top-16 left-6 select-none font-mono text-[12rem] text-accent/[0.08] leading-none lg:left-12">
				[
			</div>
			<div className="pointer-events-none absolute right-6 bottom-16 select-none font-mono text-[12rem] text-accent/[0.15] leading-none lg:right-12">
				]
			</div>
			<div className="pointer-events-none absolute top-1/2 right-0 left-0 opacity-[0.12]">
				<div className="h-px w-full bg-[repeating-linear-gradient(90deg,var(--foreground)_0px,var(--foreground)_8px,transparent_8px,transparent_16px)]" />
			</div>
			<div className="mx-auto max-w-7xl px-6 lg:px-12">
				<div className="grid gap-16 lg:grid-cols-12">
					<div className="lg:col-span-4">
						<div className="flex items-center gap-4">
							<div className="h-px w-8 bg-accent" />
							<p className="font-mono text-muted-foreground text-xs uppercase tracking-[0.2em]">
								Skills
							</p>
						</div>
					</div>
					<div className="flex flex-col lg:col-span-8">
						{SKILL_CATEGORIES.map(({ title, skills }, index) => (
							<div
								className={`grid grid-cols-[120px_1fr] gap-8 py-8 md:grid-cols-[160px_1fr] ${index > 0 ? "border-border border-t" : ""}`}
								key={title}
							>
								<p className="font-bold font-mono text-xs uppercase tracking-wider">
									{title}
								</p>
								<div className="flex flex-wrap gap-x-6 gap-y-2">
									{skills.map((skill) => (
										<span
											className="text-muted-foreground text-sm transition-colors hover:text-foreground"
											key={skill}
										>
											{skill}
										</span>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
