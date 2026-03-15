export default function AboutSection() {
	return (
		<section className="relative overflow-hidden py-24" id="about">
			<p className="pointer-events-none absolute -top-3 left-6 select-none font-black font-mono text-[10rem] text-accent/[0.08] leading-none lg:left-12">
				02
			</p>
			<div className="pointer-events-none absolute -top-20 left-1/3 h-[400px] w-px rotate-[30deg] bg-accent/[0.25]" />
			<div className="pointer-events-none absolute top-24 right-6 hidden flex-col gap-6 opacity-[0.20] lg:right-12 lg:flex">
				{Array.from({ length: 8 }).map((_, i) => (
					<div className="flex items-center gap-1" key={`hash-${i.toString()}`}>
						<div className="h-px w-3 bg-foreground" />
						<div className="h-px w-1.5 bg-foreground" />
					</div>
				))}
			</div>
			<div className="mx-auto max-w-7xl px-6 lg:px-12">
				<div className="grid gap-16 lg:grid-cols-12">
					<div className="lg:col-span-4">
						<div className="flex items-center gap-4">
							<div className="h-px w-8 bg-accent" />
							<p className="font-mono text-muted-foreground text-xs uppercase tracking-[0.2em]">
								About
							</p>
						</div>
					</div>
					<div className="flex flex-col gap-16 lg:col-span-8">
						<h2 className="font-light text-3xl leading-snug tracking-tight md:text-4xl lg:text-5xl">
							A developer who builds{" "}
							<span className="font-serif italic">systems</span> that scale,
							with attention to{" "}
							<span className="font-serif italic">detail</span> and{" "}
							<span className="font-serif italic">craft</span>.
						</h2>
						<div className="grid gap-8 border-border border-t pt-8 md:grid-cols-2">
							<p className="text-muted-foreground text-sm leading-relaxed">
								Full-Stack Developer with 1 year of professional experience
								building enterprise applications. Delivered 4 production systems
								— ERP, HRM, Customer Service, and Marketing — serving 100+ users
								using React, Next.js, TypeScript on the front-end and Python
								with Django REST Framework on the back-end.
							</p>
							<p className="text-muted-foreground text-sm leading-relaxed">
								Beyond web development, I&#39;m deeply interested in reverse
								engineering, Windows internals, virtualization, and OS
								architecture. I enjoy solving algorithmic problems and exploring
								how things work under the hood.
							</p>
						</div>
						<div className="grid grid-cols-2 border border-border md:grid-cols-4">
							{[
								{ value: "04", label: "Systems Shipped" },
								{ value: "100+", label: "Users Served" },
								{ value: "39", label: "GitHub Repos" },
								{ value: "3.41", label: "GPA / 4.0" },
							].map(({ value, label }, i) => (
								<div
									className={`p-6 ${i > 0 ? "border-border border-l" : ""}`}
									key={label}
								>
									<p className="font-black font-mono text-3xl text-accent tracking-tight md:text-4xl">
										{value}
									</p>
									<p className="mt-2 font-mono text-[10px] text-muted-foreground uppercase tracking-[0.15em]">
										{label}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
