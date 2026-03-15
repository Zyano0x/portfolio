import { ArrowUpRight } from "lucide-react";

export default function ContactSection() {
	return (
		<section className="relative overflow-hidden py-24" id="contact">
			<p className="pointer-events-none absolute -top-3 right-6 select-none font-black font-mono text-[10rem] text-accent/[0.08] leading-none lg:right-12">
				07
			</p>
			<div className="pointer-events-none absolute top-1/2 right-8 hidden -translate-y-1/2 items-center gap-3 lg:flex">
				{Array.from({ length: 5 }).map((_, i) => (
					<span
						className="font-mono text-2xl text-accent leading-none"
						key={`arrow-${i.toString()}`}
						style={{ opacity: 0.3 - i * 0.05 }}
					>
						›
					</span>
				))}
			</div>
			<div className="pointer-events-none absolute right-0 bottom-0 left-0 h-[3px] bg-accent/[0.25]" />
			<div className="pointer-events-none absolute -bottom-10 -left-10 h-[200px] w-px rotate-[30deg] bg-accent/[0.20]" />
			<div className="pointer-events-none absolute -bottom-10 left-4 h-[200px] w-px rotate-[30deg] bg-accent/[0.15]" />
			<div className="mx-auto max-w-7xl px-6 lg:px-12">
				<div className="grid gap-16 lg:grid-cols-12">
					<div className="lg:col-span-4">
						<div className="flex items-center gap-4">
							<div className="h-px w-8 bg-accent" />
							<p className="font-mono text-muted-foreground text-xs uppercase tracking-[0.2em]">
								Contact
							</p>
						</div>
					</div>
					<div className="flex flex-col gap-12 lg:col-span-8">
						<h2 className="font-black text-4xl uppercase leading-tight tracking-tight md:text-5xl lg:text-6xl">
							Let&#39;s build
							<br />
							something{" "}
							<span className="font-normal font-serif text-accent italic">
								great
							</span>
							.
						</h2>

						<p className="max-w-md text-muted-foreground text-sm leading-relaxed">
							I&#39;m always open to new opportunities and interesting projects.
							Whether you need a full-stack developer or just want to connect,
							feel free to reach out.
						</p>
						<div className="grid gap-0 border border-border md:grid-cols-2">
							{[
								{
									label: "Email",
									value: "nthoai305@gmail.com",
									href: "mailto:nthoai305@gmail.com",
								},
								{
									label: "GitHub",
									value: "@Zyano0x",
									href: "https://github.com/Zyano0x",
								},
								{
									label: "LinkedIn",
									value: "nthoai305",
									href: "https://linkedin.com/in/nthoai305",
								},
								{
									label: "Location",
									value: "Ho Chi Minh City, Vietnam",
									href: null,
								},
							].map(({ label, value, href }, i) => {
								const content = (
									<>
										<p className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
											{label}
										</p>
										<p className="mt-1 font-medium text-sm">{value}</p>
									</>
								);

								const classes = `group flex items-start justify-between p-6 transition-colors hover:bg-accent/5 ${
									i >= 2 ? "border-t border-border" : ""
								} ${i % 2 === 0 ? "" : "border-l border-border"}`;

								if (href) {
									return (
										<a
											className={classes}
											href={href}
											key={label}
											rel={
												href.startsWith("mailto")
													? undefined
													: "noopener noreferrer"
											}
											target={href.startsWith("mailto") ? undefined : "_blank"}
										>
											<div>{content}</div>
											<ArrowUpRight className="size-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
										</a>
									);
								}

								return (
									<div className={classes} key={label}>
										<div>{content}</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
