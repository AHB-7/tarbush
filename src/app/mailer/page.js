"use client";

import { useState } from "react";

// Email validation function
const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

export default function SendTheMail() {
    const [from, setFrom] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");
    const [includeDate, setIncludeDate] = useState(false);
    const [fromDate, setFromDate] = useState("");
    const [fromTime, setFromTime] = useState("");
    const [toDate, setToDate] = useState("");
    const [toTime, setToTime] = useState("");
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let formErrors = {};
        if (!from) {
            formErrors.from = "E-postadresse må fylles ut";
        } else if (!validateEmail(from)) {
            formErrors.from = "Ugyldig e-postadresse";
        }
        if (!phone) {
            formErrors.phone = "Telefonnummer må fylles ut";
        } else if (phone.length < 8) {
            formErrors.phone = "Telefonnummer må være minst 8 sifre";
        }
        if (!subject) formErrors.subject = "Det må være en titl på meldingen";
        if (!message) formErrors.message = "Meldingen kan ikke være tom";
        if (includeDate) {
            if (!fromDate) formErrors.fromDate = "From date is required";
            if (!fromTime) formErrors.fromTime = "From time is required";
            if (!toDate) formErrors.toDate = "To date is required";
            if (!toTime) formErrors.toTime = "To time is required";
        }
        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const sendEmail = async () => {
        if (!validateForm()) return;

        const emailBody = {
            from,
            phone,
            subject,
            text: message,
        };

        if (includeDate) {
            emailBody.fromDate = fromDate;
            emailBody.fromTime = fromTime;
            emailBody.toDate = toDate;
            emailBody.toTime = toTime;
        }

        const response = await fetch("/api/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(emailBody),
        });

        const result = await response.json();

        if (response.ok) {
            setStatus("Din melding ble sendt og vi svarer deg så fort vi kan!");
            location.reload();
        } else {
            setStatus(`Error: ${result.error}`);
        }
    };

    const getCurrentDate = () => {
        const today = new Date();
        return today.toISOString().split("T")[0];
    };

    const getCurrentTime = () => {
        const today = new Date();
        return today.toTimeString().split(" ")[0].slice(0, 5);
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-5 border rounded shadow-lg">
            <h1 className="text-3xl font-bold mb-5 bg-white text-red-500 p-2 rounded-md text-center">
                Send melding
            </h1>
            <div className="mb-3 flex flex-col">
                <label
                    for="email"
                    className="block text-sm font-medium text-white mb-1"
                >
                    E-postadresse
                </label>
                <input
                    id="email"
                    type="email"
                    placeholder="E-postadresse"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    className={`w-full p-2 border rounded bg-zinc-900 ${
                        errors.from ? "border-red-500" : ""
                    }`}
                    required
                />
                {errors.from && (
                    <p className="text-red-500 ms-auto text-sm">
                        {errors.from}
                    </p>
                )}
            </div>
            <div className="mb-3 flex flex-col">
                <label
                    for="tlf"
                    className="block text-sm font-medium text-white mb-1"
                >
                    Telefonnummer
                </label>
                <input
                    id="tlf"
                    type="tel"
                    placeholder="Telefonnummer"
                    value={phone}
                    onChange={(e) => {
                        const cleanedValue = e.target.value.replace(/\D/g, "");
                        setPhone(cleanedValue);
                    }}
                    pattern="\d*"
                    className={`w-full p-2 border rounded bg-zinc-900 ${
                        errors.phone ? "border-red-500" : ""
                    }`}
                    required
                />
                {errors.phone && (
                    <p className="text-red-500 ms-auto text-sm">
                        {errors.phone}
                    </p>
                )}
            </div>
            <div className="mb-3 flex flex-col">
                <label
                    for="titl"
                    className="block text-sm font-medium text-white mb-1"
                >
                    Titl
                </label>
                <input
                    id="titl"
                    type="text"
                    placeholder="Titl"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className={`w-full p-2 border rounded bg-zinc-900 ${
                        errors.subject ? "border-red-500" : ""
                    }`}
                    required
                />
                {errors.subject && (
                    <p className="text-red-500 ms-auto text-sm">
                        {errors.subject}
                    </p>
                )}
            </div>
            <div className="mb-3 flex flex-col">
                <label
                    for="medling"
                    className="block text-sm font-medium text-white mb-1"
                >
                    Melding
                </label>
                <textarea
                    id="medling"
                    placeholder="Start skriving meldingen her..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`w-full p-2 border rounded h-40 bg-zinc-900 ${
                        errors.message ? "border-red-500" : ""
                    }`}
                    required
                ></textarea>
                {errors.message && (
                    <p className="text-red-500 text-sm ms-auto">
                        {errors.message}
                    </p>
                )}
            </div>
            <div className="mb-3">
                <label className="inline-flex items-center mb-5 cursor-pointer">
                    <input
                        type="checkbox"
                        checked={includeDate}
                        onChange={() => setIncludeDate(!includeDate)}
                        className="sr-only peer"
                    />
                    <span className="ml-2 text-white">
                        Vil du leie lokalen <strong>Click her !</strong>
                    </span>
                    <div className="ms-3 relative w-11 h-6 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-white rounded-full peer bg-zinc-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all peer-checked:bg-red-800"></div>
                </label>
            </div>
            {includeDate && (
                <div className="mb-3">
                    <div className="flex flex-wrap justify-between">
                        <div className="flex gap-2 mb-3 items-center">
                            <label for="fradate">Fra:</label>
                            <input
                                id="fradate"
                                type="date"
                                value={fromDate}
                                onChange={(e) => setFromDate(e.target.value)}
                                className={`bg-zinc-900 border p-1 rounded-md ${
                                    errors.fromDate ? "border-red-500" : ""
                                }`}
                                min={getCurrentDate()}
                                onKeyDown={(e) => e.preventDefault()}
                            />
                            <label for="fratime">Kl:</label>
                            <input
                                id="fratime"
                                type="time"
                                value={fromTime}
                                onChange={(e) => setFromTime(e.target.value)}
                                className={`bg-zinc-900 border p-1 rounded-md ${
                                    errors.fromTime ? "border-red-500" : ""
                                }`}
                                min={
                                    fromDate === getCurrentDate()
                                        ? getCurrentTime()
                                        : undefined
                                }
                                onKeyDown={(e) => e.preventDefault()}
                            />
                        </div>
                    </div>
                    {errors.fromDate && (
                        <p className="text-red-500">{errors.fromDate}</p>
                    )}
                    {errors.fromTime && (
                        <p className="text-red-500">{errors.fromTime}</p>
                    )}
                    <div className="flex flex-wrap justify-between">
                        <div className="flex gap-2 mb-3 items-center">
                            <label for="tildate">Til :</label>
                            <input
                                id="tildate"
                                type="date"
                                value={toDate}
                                onChange={(e) => setToDate(e.target.value)}
                                className={`bg-zinc-900 border p-1 rounded-md ${
                                    errors.toDate ? "border-red-500" : ""
                                }`}
                                min={getCurrentDate()}
                                onKeyDown={(e) => e.preventDefault()}
                            />
                            <label for="tiltime">Kl:</label>
                            <input
                                id="tiltime"
                                type="time"
                                value={toTime}
                                onChange={(e) => setToTime(e.target.value)}
                                className={`bg-zinc-900 border p-1 rounded-md ${
                                    errors.toTime ? "border-red-500" : ""
                                }`}
                                min={
                                    toDate === getCurrentDate()
                                        ? getCurrentTime()
                                        : undefined
                                }
                                onKeyDown={(e) => e.preventDefault()}
                            />
                        </div>
                    </div>
                    {errors.toDate && (
                        <p className="text-red-500">{errors.toDate}</p>
                    )}
                    {errors.toTime && (
                        <p className="text-red-500">{errors.toTime}</p>
                    )}
                </div>
            )}
            <button
                onClick={sendEmail}
                className="w-full bg-white text-black p-2 rounded font-bold hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out"
            >
                Send Meldingen
            </button>

            {status && <p className="mt-3">{status}</p>}
        </div>
    );
}
