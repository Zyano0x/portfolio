export default function EducationSection() {
	return (
		<section className="relative overflow-hidden py-24" id="education">
			<p className="pointer-events-none absolute -top-3 left-6 select-none font-black font-mono text-[10rem] text-accent/[0.08] leading-none lg:left-12">
				06
			</p>
			<div className="pointer-events-none absolute -top-16 -left-16 hidden size-64 rounded-full border border-accent/[0.30] lg:block" />
			<div className="pointer-events-none absolute right-24 bottom-24 hidden opacity-[0.20] lg:block">
				<div className="relative size-8">
					<div className="absolute top-1/2 left-0 h-px w-full bg-foreground" />
					<div className="absolute top-0 left-1/2 h-full w-px bg-foreground" />
					<div className="absolute top-1/2 left-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground" />
				</div>
			</div>
			<div className="mx-auto max-w-7xl px-6 lg:px-12">
				<div className="grid gap-16 lg:grid-cols-12">
					<div className="lg:col-span-4">
						<div className="flex items-center gap-4">
							<div className="h-px w-8 bg-accent" />
							<p className="font-mono text-muted-foreground text-xs uppercase tracking-[0.2em]">
								Education
							</p>
						</div>
					</div>
					<div className="flex flex-col gap-4 lg:col-span-8">
						<div className="flex flex-col gap-1">
							<h3 className="font-bold text-xl uppercase tracking-tight md:text-2xl">
								Ho Chi Minh City University of Technology
							</h3>
							<p className="text-muted-foreground text-sm">
								HUTECH — Bachelor of Software Engineering
							</p>
						</div>

						<div className="flex items-center gap-6">
							<span className="font-mono text-muted-foreground text-xs">
								Oct 2020 – Dec 2024
							</span>
							<span className="h-px w-4 bg-accent" />
							<span className="font-bold font-mono text-sm">
								GPA <span className="font-black text-accent text-xl">3.41</span>
								<span className="text-muted-foreground">/4.0</span>
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
