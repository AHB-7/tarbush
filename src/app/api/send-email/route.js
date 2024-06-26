import { NextResponse } from "next/server";
import sendEmail from "../../../func/sendEmail";

export async function POST(request) {
    const body = await request.json();
    console.log("Request payload:", body); // Log the request payload

    const { from, phone, subject, text, fromDate, fromTime, toDate, toTime } =
        body;

    try {
        await sendEmail({
            from,
            phone,
            subject,
            text,
            fromDate,
            fromTime,
            toDate,
            toTime,
        });
        return NextResponse.json({ message: "Email sent successfully" });
    } catch (error) {
        return NextResponse.json(
            { error: "Error sending email", details: error.message },
            { status: 500 }
        );
    }
}
