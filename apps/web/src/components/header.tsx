"use client";

import Link from "next/link";
import { useCallback, useRef, useState } from "react";

import { ModeToggle } from "./mode-toggle";
import { useLenis } from "./smooth-scroll";

const NAV_LINKS = [
	{ href: "#about", label: "About" },
	{ href: "#experience", label: "Experience" },
	{ href: "#projects", label: "Projects" },
	{ href: "#skills", label: "Skills" },
	{ href: "#contact", label: "Contact" },
] as const;

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const headerRef = useRef<HTMLElement>(null);
	const lenis = useLenis();

	const scrollToSection = useCallback(
		(e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
			e.preventDefault();
			const id = href.replace("#", "");
			const el = document.getElementById(id);
			if (!el) {
				return;
			}

			const offset = headerRef.current?.offsetHeight ?? 80;

			if (lenis) {
				lenis.scrollTo(el, { offset: -offset });
			} else {
				const top = el.getBoundingClientRect().top + window.scrollY - offset;
				window.scrollTo({ top, behavior: "smooth" });
			}

			setIsMenuOpen(false);
		},
		[lenis]
	);

	return (
		<header
			className="sticky top-0 z-50 border-border border-b bg-background/95 backdrop-blur-sm"
			ref={headerRef}
		>
			<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
				<Link
					className="font-medium font-mono text-xs uppercase tracking-[0.3em]"
					href="/"
				>
					Zyano
				</Link>

				<nav className="hidden items-center gap-8 md:flex">
					{NAV_LINKS.map(({ href, label }) => (
						<a
							className="text-muted-foreground text-sm transition-colors duration-200 hover:text-foreground"
							href={href}
							key={href}
							onClick={(e) => scrollToSection(e, href)}
						>
							{label}
						</a>
					))}
				</nav>

				<div className="flex items-center gap-4">
					<ModeToggle />
					<button
						aria-label="Toggle navigation menu"
						className="flex size-8 flex-col items-center justify-center gap-1.5 md:hidden"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						type="button"
					>
						<span
							className={`h-px w-5 bg-foreground transition-all duration-300 ${isMenuOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
						/>
						<span
							className={`h-px w-5 bg-foreground transition-all duration-300 ${isMenuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
						/>
					</button>
				</div>
			</div>

			{isMenuOpen ? (
				<nav className="border-border border-t bg-background px-6 py-6 md:hidden">
					<div className="flex flex-col gap-4">
						{NAV_LINKS.map(({ href, label }) => (
							<a
								className="text-lg text-muted-foreground transition-colors hover:text-foreground"
								href={href}
								key={href}
								onClick={(e) => scrollToSection(e, href)}
							>
								{label}
							</a>
						))}
					</div>
				</nav>
			) : null}
		</header>
	);
}
