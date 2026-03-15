import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const SOCIAL_LINKS = [
	{ href: "https://github.com/Zyano0x", label: "GitHub" },
	{ href: "https://linkedin.com/in/nthoai305", label: "LinkedIn" },
	{ href: "mailto:nthoai305@gmail.com", label: "Email" },
] as const;

export default function Footer() {
	return (
		<footer className="border-border border-t">
			<div className="mx-auto max-w-7xl px-6 py-12 lg:px-12">
				<div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
					<div className="flex flex-col gap-2">
						<Link
							className="font-medium font-mono text-xs uppercase tracking-[0.3em]"
							href="/"
						>
							Zyano
						</Link>
						<p className="text-muted-foreground text-xs">
							&copy; {new Date().getFullYear()} Nguyen Thanh Hoai. All rights
							reserved.
						</p>
					</div>

					<div className="flex items-center gap-6">
						{SOCIAL_LINKS.map(({ href, label }) => (
							<a
								className="group inline-flex items-center gap-1 text-muted-foreground text-sm transition-colors hover:text-foreground"
								href={href}
								key={href}
								rel="noopener noreferrer"
								target="_blank"
							>
								{label}
								<ArrowUpRight className="size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}
