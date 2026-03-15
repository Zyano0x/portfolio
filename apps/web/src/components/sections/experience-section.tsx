const TIMELINE = [
	{
		period: "Apr 2025 – Present",
		role: "Full-Stack Developer",
		company: "TTMI JSC",
		projects: [
			{
				name: "Marketing Platform",
				tech: "Django REST · React · TypeScript · TanStack · Shadcn/ui · TailwindCSS",
				highlights: [
					"Architected back-end with Django REST Framework using Repository-Service-Selector pattern, building 5 modules: Task Management (with approval workflow), Store Availability monitoring across 4 delivery platforms",
					"Built front-end with React Vite, TypeScript, TanStack Router/Query/Table, featuring 20+ modules including dashboard analytics (Recharts), drag-and-drop tasks (dnd-kit), and Excel export (ExcelJS)",
					"Implemented role-based access control, form validation with Zod + React Hook Form, and consistent UI with Shadcn/ui",
				],
			},
			{
				name: "ERP",
				tech: "Next.js · TypeScript · TailwindCSS · MUI",
				highlights: [
					"Developed front-end for an enterprise accounting ERP system with 20+ modules: Sales, Purchasing, Inventory, Cash/Banking, Fixed Assets, Costing, Tax, Receivables/Payables, General Ledger, Budget, and Reports — compliant with Vietnam Circular 200 accounting standards",
					"Built complex data-heavy UIs using MUI DataGrid, TanStack Table, and Recharts for financial dashboards, with Excel export (ExcelJS) and multi-language support via next-intl",
					"Implemented form validation with Zod + React Hook Form, reusable components with Shadcn/ui, and integrated RESTful APIs via Axios, collaborating with a backend team in an Agile/Scrum workflow",
				],
			},
			{
				name: "HRM",
				tech: "React Vite · JavaScript · Shadcn/ui · TailwindCSS",
				highlights: [
					"Built front-end UI and integrated APIs for employee management, attendance tracking, and shift scheduling, serving 100+ employees across multiple departments",
				],
			},
			{
				name: "Customer Service",
				tech: "React · JavaScript · Shadcn/ui · TailwindCSS",
				highlights: [
					"Built front-end UI and integrated APIs for a ticket management system, handling 200+ support tickets monthly with real-time data synchronization",
					"Developed back-end modules for Order Ticket management using the Repository-Service-Selector pattern, featuring automated refund ticket generation",
					"Managed complex application state using React Context and TanStack Query to handle multi-step support workflows",
				],
			},
		],
	},
] as const;

export default function ExperienceSection() {
	return (
		<section className="relative overflow-hidden py-24" id="experience">
			<p className="pointer-events-none absolute -top-3 right-6 select-none font-black font-mono text-[10rem] text-accent/[0.08] leading-none lg:right-12">
				03
			</p>
			<div className="pointer-events-none absolute top-32 left-6 hidden flex-col gap-16 opacity-[0.20] lg:left-12 lg:flex">
				{Array.from({ length: 4 }).map((_, i) => (
					<div className="relative size-3" key={`cross-${i.toString()}`}>
						<div className="absolute top-1/2 left-0 h-px w-full bg-foreground" />
						<div className="absolute top-0 left-1/2 h-full w-px bg-foreground" />
					</div>
				))}
			</div>
			<div className="pointer-events-none absolute top-12 right-0 left-0 flex flex-col gap-[96px] opacity-[0.10]">
				<div className="h-px w-full bg-accent" />
				<div className="h-px w-full bg-accent" />
				<div className="h-px w-full bg-accent" />
				<div className="h-px w-full bg-accent" />
			</div>
			<div className="mx-auto max-w-7xl px-6 lg:px-12">
				<div className="grid gap-16 lg:grid-cols-12">
					<div className="lg:col-span-4">
						<div className="flex items-center gap-4">
							<div className="h-px w-8 bg-accent" />
							<p className="font-mono text-muted-foreground text-xs uppercase tracking-[0.2em]">
								Experience
							</p>
						</div>
					</div>
					<div className="lg:col-span-8">
						{TIMELINE.map(({ period, role, company, projects }) => (
							<div className="relative" key={company}>
								<div className="absolute top-0 left-0 h-full w-px bg-border md:left-[120px]" />
								<div className="relative mb-10 flex flex-col gap-2 pl-6 md:flex-row md:items-start md:gap-8 md:pl-0">
									<div className="flex items-center gap-3 md:w-[120px] md:shrink-0 md:justify-end md:pr-8">
										<div className="absolute top-1 -left-[3.5px] size-2 bg-accent md:left-[116.5px]" />
										<span className="font-mono text-[10px] text-accent uppercase tracking-wider">
											{period}
										</span>
									</div>
									<div className="pl-0 md:pl-8">
										<h2 className="font-black text-2xl uppercase tracking-tight md:text-3xl">
											{role}
										</h2>
										<p className="mt-1 font-mono text-muted-foreground text-sm">
											{company}
										</p>
									</div>
								</div>
								<div className="flex flex-col gap-0 pl-6 md:pl-0">
									{projects.map(({ name, tech, highlights }, i) => (
										<div
											className="relative flex flex-col gap-0 md:flex-row md:gap-8"
											key={name}
										>
											<div className="hidden items-start md:flex md:w-[120px] md:shrink-0 md:justify-end md:pr-8">
												<div className="absolute top-2 -left-[2.5px] size-2 bg-muted-foreground md:left-[116.6px]" />
												<span className="font-mono text-muted-foreground text-xs">
													{String(i + 1).padStart(2, "0")}
												</span>
											</div>
											<div className="border-border border-b pt-0 pb-8 md:flex-1 md:pt-0 md:pb-8 md:pl-8">
												<div className="mb-3 flex items-baseline gap-3">
													<span className="z-10 font-mono text-accent text-xs md:hidden">
														{String(i + 1).padStart(2, "0")}
													</span>
													<h3 className="font-bold text-base uppercase tracking-wide">
														{name}
													</h3>
												</div>
												<p className="mb-3 font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
													{tech}
												</p>
												<ul className="flex flex-col gap-1.5">
													{highlights.map((h) => (
														<li
															className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed"
															key={h}
														>
															<span className="mt-2 size-1 shrink-0 bg-accent/60" />
															{h}
														</li>
													))}
												</ul>
											</div>
										</div>
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
