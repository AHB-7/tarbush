import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import Loading from "../loading";
import cardStyle from "@/styles/card.module.css";
import { roudIt } from "@/func/meny";
import { menyItems } from "@/services";
import { CiCircleChevDown } from "react-icons/ci";

const Meny = () => {
    const [data, setData] = useState(null);
    const [isHovered, setIsHovered] = useState(null);
    const [expandedGroups, setExpandedGroups] = useState({});

    useEffect(() => {
        async function fetchData() {
            const result = await menyItems(100); // Fetching with limit 100
            setData(result.menies);
        }
        fetchData();
    }, []);

    if (!data) return <Loading />;

    // Utility function to group items by `gruppe`
    const groupByGruppe = (items) => {
        return items.reduce((groups, item) => {
            const group = item.gruppe || "Other";
            if (!groups[group]) {
                groups[group] = [];
            }
            groups[group].push(item);
            return groups;
        }, {});
    };

    const groupedData = groupByGruppe(data);

    const toggleGroup = (gruppe) => {
        setExpandedGroups((prev) => ({
            ...prev,
            [gruppe]: !prev[gruppe],
        }));
    };

    return (
        <div>
            {Object.keys(groupedData).map((gruppe) => (
                <div key={gruppe} className="mb-8">
                    <div
                        className="container w-11/12 outline outline-orange-50 outline-1 flex items-center justify-center mx-auto rounded-lg my-4 py-2 cursor-pointer"
                        onClick={() => toggleGroup(gruppe)}
                    >
                        <h2 className="text-2xl w-full ps-5 font-bold">
                            {gruppe}
                        </h2>
                        <CiCircleChevDown className="text-4xl me-3" />
                    </div>
                    {expandedGroups[gruppe] && (
                        <div className={cardStyle.cardContainer}>
                            {groupedData[gruppe].map((item) => (
                                <div
                                    key={item.id}
                                    className={`${cardStyle.card} p-4 shadow-md shadow-stone-900 rounded-lg`}
                                    onMouseEnter={() => setIsHovered(item.id)}
                                    onMouseLeave={() => setIsHovered(null)}
                                >
                                    <motion.div
                                        initial="initial"
                                        animate={
                                            isHovered === item.id
                                                ? "exit"
                                                : "enter"
                                        }
                                        variants={roudIt}
                                    >
                                        <Image
                                            src={item.dishImage?.url || ""}
                                            alt={item.dishName}
                                            loading="lazy"
                                            width={400}
                                            height={400}
                                            className={`${cardStyle.cardImage}`}
                                        />
                                    </motion.div>
                                    <h2 className="text-xl font-bold py-4 border-b">
                                        {item.dishName}
                                    </h2>
                                    <div className="h-20 py-2">
                                        {item.ingredients &&
                                            item.ingredients.text && (
                                                <p className="text-pretty">
                                                    {item.ingredients.text}
                                                </p>
                                            )}
                                    </div>
                                    <div className="flex justify-start py-2">
                                        <p className="text-zinc-300 me-2">
                                            Allergier:{" "}
                                        </p>
                                        {item.allergier && (
                                            <div className="flex items-center">
                                                {item.allergier.map(
                                                    (allergy, index) => (
                                                        <p
                                                            key={index}
                                                            className="w-fit bg-yellow-400 text-black text-xs me-1 px-2 py-0.5 rounded-full dark:bg-blue-600 font-thin dark:text-white"
                                                        >
                                                            {allergy.trim()}
                                                        </p>
                                                    )
                                                )}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex justify-between py-3 border-t">
                                        <p className="text-xl text-zinc-300 me-2">
                                            Pris: {item.price} NOK{" "}
                                        </p>
                                        <Link
                                            href={`/kontakt`}
                                            className="px-6 py-2 bg-white hover:bg-black hover:text-white transition-all text-black rounded-lg shadow-inner hover:shadow-xl duration-300"
                                        >
                                            Ring oss
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Meny;
