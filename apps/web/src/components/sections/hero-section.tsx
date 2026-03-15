import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function HeroSection() {
	return (
		<section
			className="relative overflow-hidden pt-12 pb-24 md:pt-16 md:pb-32 lg:pt-20 lg:pb-40"
			id="hero"
		>
			<div className="pointer-events-none absolute top-0 right-0 h-full w-16 opacity-10 md:w-24 lg:w-32">
				<div className="h-full w-full bg-[repeating-linear-gradient(0deg,transparent,transparent_8px,var(--accent)_8px,var(--accent)_10px)]" />
			</div>
			<div className="pointer-events-none absolute top-8 left-6 size-20 opacity-[0.25] lg:left-12">
				<div className="absolute top-0 left-0 h-[2px] w-full bg-accent" />
				<div className="absolute top-0 left-0 h-full w-[2px] bg-accent" />
			</div>
			<div className="pointer-events-none absolute top-16 right-16 hidden size-48 opacity-[0.15] lg:block">
				<div
					className="size-full"
					style={{
						backgroundImage:
							"radial-gradient(circle, var(--foreground) 1px, transparent 1px)",
						backgroundSize: "16px 16px",
					}}
				/>
			</div>
			<div className="pointer-events-none absolute top-0 right-0 left-0 flex flex-col gap-[6px] opacity-[0.12]">
				<div className="h-px w-full bg-foreground" />
				<div className="h-px w-full bg-foreground" />
				<div className="h-px w-full bg-foreground" />
			</div>
			<div className="mx-auto max-w-7xl px-6 lg:px-12">
				<div className="grid gap-16 lg:grid-cols-12">
					<div className="flex flex-col gap-10 lg:col-span-8">
						<div className="flex items-center gap-4">
							<div className="h-px w-12 bg-accent" />
							<p className="font-mono text-muted-foreground text-xs uppercase tracking-[0.2em]">
								Full-Stack Developer
							</p>
						</div>
						<h1 className="font-black text-[clamp(3.5rem,10vw,9rem)] uppercase leading-[0.85] tracking-[-0.04em]">
							<span className="block">Nguyen</span>
							<span className="block">Thanh</span>
							<span className="block text-accent">Hoai</span>
						</h1>
						<div className="h-[3px] w-24 bg-accent" />
						<p className="max-w-lg text-base text-muted-foreground leading-relaxed md:text-lg">
							Building enterprise-grade applications with modern web
							technologies. Passionate about{" "}
							<span className="font-serif text-foreground italic">systems</span>
							,{" "}
							<span className="font-serif text-foreground italic">
								architecture
							</span>
							, and{" "}
							<span className="font-serif text-foreground italic">craft</span>.
						</p>
						<div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6">
							<a
								className="group inline-flex w-fit items-center gap-3 bg-accent px-7 py-3.5 font-bold text-accent-foreground text-sm uppercase tracking-wider transition-all duration-200 hover:bg-foreground hover:text-background"
								href="#projects"
							>
								View Projects
								<ArrowDown className="size-4 transition-transform group-hover:translate-y-1" />
							</a>
							<div className="flex items-center gap-6">
								<a
									className="group inline-flex items-center gap-2 border-muted-foreground border-b pb-1 text-muted-foreground text-sm transition-colors hover:border-foreground hover:text-foreground"
									href="https://github.com/Zyano0x"
									rel="noopener noreferrer"
									target="_blank"
								>
									GitHub
									<ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
								</a>
								<a
									className="group inline-flex items-center gap-2 border-muted-foreground border-b pb-1 text-muted-foreground text-sm transition-colors hover:border-foreground hover:text-foreground"
									href="https://linkedin.com/in/nthoai305"
									rel="noopener noreferrer"
									target="_blank"
								>
									LinkedIn
									<ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
								</a>
							</div>
						</div>
					</div>
					<div className="flex flex-col justify-end gap-8 lg:col-span-4">
						<p className="font-black font-mono text-[8rem] text-accent/10 leading-none">
							01
						</p>

						<div className="flex flex-col gap-6 border-border border-l pl-6">
							<div>
								<p className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
									Based in
								</p>
								<p className="mt-1 font-medium text-sm">Ho Chi Minh City, VN</p>
							</div>
							<div>
								<p className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
									Currently at
								</p>
								<p className="mt-1 font-medium text-sm">TTMI JSC</p>
							</div>
							<div>
								<p className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
									Stack
								</p>
								<p className="mt-1 font-medium text-sm">
									React · Next.js · TypeScript · Django
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
