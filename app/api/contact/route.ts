import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const TO_EMAIL = "infobysoriva@gmail.com";

type ContactPayload = {
	fromEmail: string;
	subject: string;
	message: string;
};

function isValidEmail(email: string) {
	// Simple, pragmatic validation
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getSmtpConfig() {
	const host = process.env.SMTP_HOST;
	const portRaw = process.env.SMTP_PORT;
	const user = process.env.SMTP_USER;
	const pass = process.env.SMTP_PASS;
	const from = process.env.SMTP_FROM || user;

	const port = portRaw ? Number(portRaw) : undefined;
	const secureEnv = process.env.SMTP_SECURE;
	const secure =
		secureEnv != null
			? secureEnv === "true"
			: port === 465; // common default

	if (!host || !port || !user || !pass || !from) {
		return null;
	}

	return { host, port, user, pass, from, secure };
}

export async function POST(request: Request) {
	try {
		const contentType = request.headers.get("content-type") || "";
		if (!contentType.includes("application/json")) {
			return NextResponse.json(
				{ ok: false, error: "Unsupported content type" },
				{ status: 415 }
			);
		}

		const body = (await request.json()) as Partial<ContactPayload>;
		const fromEmail = String(body.fromEmail ?? "").trim();
		const subject = String(body.subject ?? "").trim();
		const message = String(body.message ?? "").trim();

		if (!fromEmail || !subject || !message) {
			return NextResponse.json(
				{ ok: false, error: "Missing fields" },
				{ status: 400 }
			);
		}
		if (!isValidEmail(fromEmail)) {
			return NextResponse.json(
				{ ok: false, error: "Invalid email" },
				{ status: 400 }
			);
		}
		if (subject.length > 160 || message.length > 8000) {
			return NextResponse.json(
				{ ok: false, error: "Message too long" },
				{ status: 400 }
			);
		}

		const smtp = getSmtpConfig();
		if (!smtp) {
			return NextResponse.json(
				{
					ok: false,
					error:
						"Email is not configured on the server (missing SMTP env vars).",
				},
				{ status: 500 }
			);
		}

		const transporter = nodemailer.createTransport({
			host: smtp.host,
			port: smtp.port,
			secure: smtp.secure,
			auth: {
				user: smtp.user,
				pass: smtp.pass,
			},
		});

		await transporter.sendMail({
			to: TO_EMAIL,
			from: smtp.from,
			replyTo: fromEmail,
			subject: `[Landing] ${subject}`,
			text: `From: ${fromEmail}\n\n${message}`,
		});

		return NextResponse.json({ ok: true });
	} catch (error) {
		console.error("/api/contact error", error);
		return NextResponse.json(
			{ ok: false, error: "Failed to send" },
			{ status: 500 }
		);
	}
}
