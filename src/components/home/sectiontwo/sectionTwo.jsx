import React, { useState, useEffect } from "react";
import { createFeedItem, fetchFeedItems } from "../../../services/index";
import StarRating from "./StarRating";
import FeedItem from "./feedbacsItems";
import Modal from "./Modal";
import Image from "next/image";

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
        <section className=" px-4  xl:px-52 mt-6 w-full mx-auto container">
            <div className="flex flex-col justify-start items-start">
                <div className="bg-green-700 py-2 px-2 rounded-md w-fit">
                    <h1 className="text-2xl">Gi oss en vurdering!</h1>
                </div>
                <p className="text-sm py-2">
                    Gjerne skrive hva du syns om maten og opplevene!
                </p>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-white text-black hover:bg-red-500 hover:text-white transition-all duration-300 px-4 py-2 rounded-md my-4 flex gap-2 justify-center items-center"
                >
                    Skriv på veggen
                    <Image
                        src="/images/logo-circle.png"
                        width={30}
                        height={30}
                        alt="image"
                    ></Image>
                </button>
                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                >
                    <div className="flex flex-col items-center justify-center">
                        <Image
                            src="/images/theTarbush.png"
                            width={40}
                            height={40}
                            alt="image"
                        ></Image>
                        <Image
                            src="/images/bart.png"
                            width={60}
                            height={60}
                            alt="image"
                        ></Image>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className=" flex flex-col gap-3 w-72 md:w-96 "
                    >
                        <div>
                            <span className="text-sm font-thin">Navn</span>
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
                        </div>
                        <div>
                            <span className="text-sm font-thin pt-4">
                                Tittle
                            </span>
                            <input
                                type="text"
                                className="bg-zinc-800 w-full p-2 my-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-zinc-100"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Title"
                                required
                            />
                        </div>
                        <div>
                            {" "}
                            <span className="text-sm font-thin pt-4">Text</span>
                            <textarea
                                value={content}
                                className="bg-zinc-800 w-full p-2 my-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-zinc-100"
                                onChange={(e) => setContent(e.target.value)}
                                placeholder="Skriv her"
                                required
                            />
                            <label>
                                <StarRating
                                    rating={stars}
                                    setRating={setStars}
                                />
                            </label>
                        </div>

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
                </Modal>
            </div>
            <FeedItem />
        </section>
    );
}
