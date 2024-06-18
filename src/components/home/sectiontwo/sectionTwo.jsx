import React, { useState, useEffect } from "react";
import { createFeedItem, fetchFeedItems } from "../../../services/index";
import StarRating from "./StarRating";
import FeedItem from "./feedbacsItems";
import Modal from "./Modal";

export default function Sectiontwo() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [stars, setStars] = useState(1);
    const [feedbackName, setFeedbackName] = useState("");
    const [status, setStatus] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");
        try {
            const response = await createFeedItem(
                title,
                content,
                parseFloat(stars),
                feedbackName
            );
            setStatus("Feed item sent!");
            setTitle("");
            setContent("");
            setStars(1); // Reset star rating
            setFeedbackName("");
            setFeedItems([...feedItems, response]);
        } catch (error) {
            setStatus(`Error: ${error.message}`);
            console.error("GraphQL Error:", error);
        }
    };

    return (
        <section>
            <div className="mx-auto container flex flex-col justify-center w-96">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                    Open Feedback Form
                </button>
                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                >
                    <div className="mx-auto container flex flex-col justify-center w-96">
                        <div className="bg-green-700 py-2 px-2 rounded-md w-fit">
                            <h1 className="text-2xl">
                                Gi oss en{" "}
                                <strong className="">vurdering!</strong>
                            </h1>
                        </div>
                        <p className="text-md">
                            Gjerne skrive hva du syns om maten og opplevene!
                        </p>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                className="bg-zinc-800 w-full p-2 my-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-zinc-100"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Title"
                                required
                            />
                            <textarea
                                value={content}
                                className="bg-zinc-800 w-full p-2 my-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-zinc-100"
                                onChange={(e) => setContent(e.target.value)}
                                placeholder="Content"
                                required
                            />
                            <input
                                type="text"
                                className="bg-zinc-800 w-full p-2 my-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-zinc-100"
                                value={feedbackName}
                                onChange={(e) =>
                                    setFeedbackName(e.target.value)
                                }
                                placeholder="Your Name"
                                required
                            />
                            <label>
                                <StarRating
                                    rating={stars}
                                    setRating={setStars}
                                />
                            </label>
                            <button
                                type="submit"
                                className="focus:animate-bounce bg-gradient-to-b text-black from-white to-slate-100 shadow-md shadow-zinc-800 hover:shadow-none hover:scale-105 rounded-md transition-all duration-300 px-6 py-1 hover:text-white hover:bg-gradient-to-b hover:from-red-600 hover:to-red-600 focus:text-white focus:bg-gradient-to-b focus:from-red-700 focus:to-red-900 focus:border-white focus:border"
                            >
                                Send
                            </button>
                        </form>
                        {status === "loading" && <p>Loading...</p>}
                        {status.startsWith("Error:") && <p>{status}</p>}
                        {status === "Feed item sent!" && <p>{status}</p>}
                    </div>
                </Modal>
            </div>
            <FeedItem />
        </section>
    );
}
