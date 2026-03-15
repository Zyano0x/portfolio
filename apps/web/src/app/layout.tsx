import type { Metadata } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";

import "../index.css";
import BackgroundDecoration from "@/components/background-decoration";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Providers from "@/components/providers";
import SmoothScroll from "@/components/smooth-scroll";

const inter = Inter({
	variable: "--font-sans",
	subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
	variable: "--font-serif",
	subsets: ["latin"],
	weight: "400",
	style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
	variable: "--font-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Zyano — Full-Stack Developer",
	description:
		"Full-Stack Developer crafting enterprise applications with React, Next.js, TypeScript, and Django. Based in Ho Chi Minh City.",
	keywords: [
		"Full-Stack Developer",
		"React",
		"Next.js",
		"TypeScript",
		"Python",
		"Django",
		"Portfolio",
	],
	authors: [{ name: "Nguyen Thanh Hoai" }],
	openGraph: {
		title: "Zyano — Full-Stack Developer",
		description:
			"Full-Stack Developer crafting enterprise applications with React, Next.js, TypeScript, and Django.",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} antialiased`}
				suppressHydrationWarning
			>
				<Providers>
					<SmoothScroll>
						<BackgroundDecoration />
						<div className="relative z-10">
							<Header />
							<main>{children}</main>
							<Footer />
						</div>
					</SmoothScroll>
				</Providers>
			</body>
		</html>
	);
}
