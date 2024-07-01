import React, { useState, useEffect } from "react";
import { createFeedItem, fetchFeedItems } from "../../../services/index";
import StarRating from "./StarRating";
import Modal from "./Modal";
import Image from "next/image";
import { FaYelp } from "react-icons/fa";
import { BiLogoTripAdvisor } from "react-icons/bi";
import Link from "next/link";
import Loading from "../../loading";
import FeedItemCarousel from "./FeedItemCarousel";

const CharacterCounter = ({ currentLength, maxLength }) => {
    return (
        <p className="text-sm text-gray-400">
            {currentLength}/{maxLength}
        </p>
    );
};

const FeedbackSection = () => {
    const [content, setContent] = useState("");
    const [stars, setStars] = useState(5);
    const [feedbackName, setFeedbackName] = useState("");
    const [status, setStatus] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [feedItems, setFeedItems] = useState([]);
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadFeedItems = async () => {
            try {
                const items = await fetchFeedItems();
                setFeedItems(items);
            } catch (error) {
                console.error("Error fetching feed items:", error);
            } finally {
                setLoading(false);
            }
        };

        loadFeedItems();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    const validateForm = () => {
        let formErrors = {};
        if (!feedbackName) {
            formErrors.feedbackName = "Name is required.";
        } else if (feedbackName.length < 5) {
            formErrors.feedbackName = "Name must be at least 5 characters.";
        }

        if (!content) {
            formErrors.content = "Content is required.";
        } else if (content.length < 20) {
            formErrors.content = "Content must be at least 20 characters.";
        }

        if (stars < 1 || stars > 5) {
            formErrors.stars = "Rating must be between 1 and 5.";
        }

        return formErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }
        setStatus("loading");
        try {
            const response = await createFeedItem(
                content,
                parseFloat(stars),
                feedbackName
            );
            setStatus("Feed item sent!");
            setContent("");
            setStars(1);
            setFeedbackName("");
            setFeedItems([...feedItems, response]);
            setErrors({});

            // Show success message
            setSuccessMessage("Feed item sent!");

            // Hide success message after 2 seconds
            setTimeout(() => {
                setSuccessMessage("");
            }, 2000);
        } catch (error) {
            setStatus(`Error: ${error.message}`);
        }
    };

    return (
        <div className="my-8">
            <div>
                {feedItems.length > 0 ? (
                    <FeedItemCarousel feedItems={feedItems} />
                ) : (
                    <p>No feed items available.</p>
                )}
            </div>
            <div className="relative flex flex-col justify-center items-center gap-1">
                <p className="text-center">
                    Vi setter pris på alle tilbakemeldinger, og vi vil gjøre
                    vårt beste for å forbedre oss.
                </p>
                <div className="flex flex-col w-full mt-4 items-center justify-center">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="text-white border hover:border-white hover:bg-white hover:text-black transition-all duration-300 px-4 py-2 rounded-md flex gap-2 justify-center items-center relative group"
                    >
                        <p className="group-hover:block transition-opacity duration-300">
                            Skriv på veggen
                        </p>
                        <Image
                            src="/images/logo-circle.png"
                            width={20}
                            height={20}
                            alt="image"
                        />
                    </button>
                    <div className="flex items-center justify-center flex-col">
                        <p className="pt-2 text-xs">Eller</p>
                        <div className="flex">
                            <button className="text-white hover:border-white hover:bg-white hover:text-black transition-all duration-300 px-1 group-hover:px-4 py-2 rounded-md flex gap-2 justify-center items-center relative group">
                                <p className="hidden group-hover:block transition-opacity duration-300">
                                    Google
                                </p>
                                <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png"
                                    width={20}
                                    height={20}
                                    alt="image"
                                />
                            </button>
                            <Link
                                href="https://www.tripadvisor.com/Restaurant_Review-g2417002-d27960509-Reviews-Tarbush-Trondheim_Municipality_Trondelag_Central_Norway.html"
                                className="text-white hover:border-white hover:bg-white hover:text-black transition-all duration-300 px-1 group-hover:px-4 py-2 rounded-md flex gap-2 justify-center items-center relative group"
                            >
                                <p className="hidden group-hover:block transition-opacity duration-300">
                                    Tripadvisor
                                </p>
                                <BiLogoTripAdvisor className="text-green-500 text-2xl" />
                            </Link>
                            <Link
                                href="https://www.yelp.no/biz/tarbush-tiller"
                                className="text-white hover:border-white hover:bg-white hover:text-black transition-all duration-300 px-1 group-hover:px-4 py-2 rounded-md flex gap-2 justify-center items-center relative group"
                            >
                                <p className="hidden group-hover:block transition-opacity duration-300">
                                    Skriv på Yelp
                                </p>
                                <FaYelp className="text-red-400 text-xl" />
                            </Link>
                        </div>
                    </div>
                </div>
                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                >
                    <div className="flex flex-col items-center justify-center">
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-3 w-72 md:w-96"
                            noValidate
                        >
                            <div>
                                <span className="text-sm font-thin">Navn</span>
                                <input
                                    type="text"
                                    className="bg-zinc-700 w-full p-2 border-none rounded-md focus:bg-zinc-800 focus:outline-none"
                                    value={feedbackName}
                                    onChange={(e) =>
                                        setFeedbackName(e.target.value)
                                    }
                                    placeholder="Ditt navn"
                                />
                                <CharacterCounter
                                    currentLength={feedbackName.length}
                                    maxLength={5}
                                />
                                {errors.feedbackName && (
                                    <p className="text-red-500 text-sm">
                                        {errors.feedbackName}
                                    </p>
                                )}
                            </div>

                            <div>
                                <span className="text-sm font-thin pt-4">
                                    Dine ord
                                </span>
                                <textarea
                                    value={content}
                                    className="bg-zinc-700 w-full p-2 border-none rounded-md focus:bg-zinc-800 focus:outline-none"
                                    onChange={(e) => setContent(e.target.value)}
                                    placeholder="Skriv her"
                                />
                                <CharacterCounter
                                    currentLength={content.length}
                                    maxLength={20}
                                />
                                {errors.content && (
                                    <p className="text-red-500 text-sm">
                                        {errors.content}
                                    </p>
                                )}
                                <label>
                                    <StarRating
                                        rating={stars}
                                        setRating={setStars}
                                    />
                                </label>
                                {errors.stars && (
                                    <p className="text-red-500 text-sm">
                                        {errors.stars}
                                    </p>
                                )}
                            </div>
                            <button
                                type="submit"
                                className=" text-black bg-white shadow-md shadow-zinc-800 hover:shadow-none rounded-md transition-all duration-300 px-6 py-1 hover:text-white hover:bg-red-500"
                            >
                                Send
                            </button>
                        </form>
                        {status === "loading" && <Loading />}
                        {status.startsWith("Error:") && (
                            <p>Oops! noe gikk galt prøv senere</p>
                        )}
                        {successMessage && <p>{successMessage}</p>}
                    </div>
                </Modal>
            </div>
        </div>
    );
};

export default FeedbackSection;
