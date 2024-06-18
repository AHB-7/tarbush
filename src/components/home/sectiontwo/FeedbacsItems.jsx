import StarDisplay from "./StarDisplay";
import React, { useState, useEffect } from "react";
import { createFeedItem, fetchFeedItems } from "../../../services/index";

const FeedItem = ({ item }) => {
    const [feedItems, setFeedItems] = useState([]);

    useEffect(() => {
        const loadFeedItems = async () => {
            try {
                const items = await fetchFeedItems();
                setFeedItems(items);
            } catch (error) {
                console.error("Error fetching feed items:", error);
            }
        };

        loadFeedItems();
    }, []);
    return (
        <div>
            {feedItems.length > 0 && (
                <div>
                    <h2>Feed Items</h2>
                    {feedItems.map((item) => (
                        <div
                            key={item.id}
                            className="border p-2 mb-2 rounded-md"
                        >
                            <p>
                                <strong>Name:</strong> {item.feedbackName}
                            </p>
                            <p>
                                <strong>Title:</strong> {item.title}
                            </p>
                            <p>
                                <strong>Content:</strong> {item.content}
                            </p>
                            <p>
                                <strong>Stars:</strong>{" "}
                                <StarDisplay rating={item.stars} />
                            </p>
                            <p>
                                <strong>Created At:</strong>{" "}
                                {new Date(item.createdAt).toLocaleString()}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FeedItem;
