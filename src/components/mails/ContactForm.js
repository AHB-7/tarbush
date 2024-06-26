const nodemailer = require("nodemailer");

const sendEmail = async ({
    from,
    subject,
    text,
    fromDate,
    fromTime,
    toDate,
    toTime,
}) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_USER, // your Gmail account
            pass: process.env.GMAIL_PASS, // your Gmail app password
        },
    });

    // Convert the plain text message to an HTML list
    const items = text
        .split("\n")
        .map((item) => `<li>${item}</li>`)
        .join("");
    const dateTimeHtml =
        fromDate && fromTime && toDate && toTime
            ? `<p><strong>Fra:</strong> ${fromDate} kl. ${fromTime}</p><p><strong>Til:</strong> ${toDate} kl. ${toTime}</p>`
            : "";

    const html = `
    <div style="font-family: Arial, sans-serif; margin: 0; padding: 0;">
      <div style="max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
        <h2 style="font-size: 18px; margin-bottom: 10px; color: #333;">From: ${from}</h2>
        <h2 style="font-size: 24px; margin-bottom: 20px; color: #333;">${subject}</h2>
        <ul style="font-size: 16px; line-height: 1.5; color: #555; padding-left: 20px;">
          ${items}
        </ul>
        ${sendEmail}
      </div>
    </div>
  `;

    const mailOptions = {
        from: process.env.GMAIL_USER, // sender address
        to: process.env.GMAIL_USER, // recipient address (yourself)
        subject: `Form submission: ${subject}`, // Subject line
        text: `From: ${from}\n\n${text}${
            fromDate && fromTime && toDate && toTime
                ? `\n\nFra: ${fromDate} kl. ${fromTime}\nTil: ${toDate} kl. ${toTime}`
                : ""
        }`, // plain text body
        html, // html body
        replyTo: "no-reply@example.com", // no-reply address
    };

    await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
