import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import Loading from "../loading";
import { menyItems } from "../../services/index";

const Meny = () => {
    const [data, setData] = useState(null);
    const [selectedDish, setSelectedDish] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [showVegetarianOnly, setShowVegetarianOnly] = useState(false); // New state for vegetarian filter
    const [selectedGroup, setSelectedGroup] = useState(""); // New state for selected group

    useEffect(() => {
        async function fetchData() {
            const result = await menyItems(100);
            setData(result.menies);
        }
        fetchData();
    }, []);

    if (!data) return <Loading />;

    // Group dishes by 'gruppe'
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

    const groupedDishes = groupByGruppe(data);

    // Filter dishes based on search query, vegetarian filter, and selected group
    const filteredDishes = data.filter(
        (item) =>
            item.dishName.toLowerCase().includes(searchQuery.toLowerCase()) &&
            (!showVegetarianOnly || item.vegitar) && // Filter by vegetarian if enabled
            (!selectedGroup || item.gruppe === selectedGroup) // Filter by selected group if a group is selected
    );

    const handleDishClick = (dish) => {
        setSelectedDish(dish);
    };

    const handleGroupClick = (group) => {
        setSelectedGroup(group === selectedGroup ? "" : group); // Toggle group selection
    };

    return (
        <div className="container mx-auto flex flex-wrap max-w-screen-lg ">
            {/* Search Bar, Vegetarian Filter Button, and Group Buttons */}
            <div className="py-4 mx-4 w-full flex items-center justify-center gap-2 ">
                <input
                    type="text"
                    placeholder="Søk etter retter..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="px-4 w-full md:w-[30rem] py-2 rounded-lg border border-gray-300 bg-zinc-800 focus:border-black focus:ring-2 focus:ring-black transition-all"
                />
                <button
                    onClick={() => setShowVegetarianOnly(!showVegetarianOnly)}
                    className={`px-4 py-2 rounded-lg transition-all w-36 ${
                        showVegetarianOnly
                            ? "bg-white text-black"
                            : "bg-green-500"
                    }`}
                >
                    {showVegetarianOnly ? "All" : "Vegetar"}
                </button>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-4 md:px-24 ">
                {Object.keys(groupedDishes).map((group) => (
                    <button
                        key={group}
                        onClick={() => handleGroupClick(group)}
                        className={`px-4 py-2 rounded-lg transition-all ${
                            selectedGroup === group
                                ? "bg-blue-500 text-white"
                                : "bg-red-300"
                        }`}
                    >
                        {group}
                    </button>
                ))}
            </div>

            <div className="flex items-center flex-col gap-4 p-2 mx-auto w-full">
                {filteredDishes.length ? (
                    filteredDishes.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center flex-col sm:flex-row justify-between gap-8 w-full bg-zinc-800 p-4 rounded-lg shadow-lg"
                            onClick={() => handleDishClick(item)}
                        >
                            <motion.div className="">
                                {item.dishImage?.url && (
                                    <Image
                                        src={item.dishImage.url}
                                        alt={item.dishName}
                                        width={200}
                                        height={200}
                                    />
                                )}
                            </motion.div>
                            <div className="w-full">
                                <h2 className="text-xl font-bold py-2">
                                    {item.dishName}
                                </h2>
                                {item.ingredients?.text && (
                                    <p className="text-pretty py-2">
                                        {item.ingredients.text}
                                    </p>
                                )}
                                {item.allergier?.length > 0 && (
                                    <p className="text-xs flex gap-2 items-center">
                                        Allergier:
                                        <div className="flex gap-2 flex-wrap">
                                            {item.allergier.map(
                                                (allergi, index) => (
                                                    <div
                                                        key={index}
                                                        className=" bg-blue-800 px-2 py-1 rounded-lg"
                                                    >
                                                        {allergi}
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </p>
                                )}
                            </div>
                            <div className="flex flex-col justify-between gap-4 items-center">
                                <p className="text-md text-zinc-300">
                                    {item.price} NOK
                                </p>
                                <Link
                                    href={`/kontakt`}
                                    className="px-32 sm:px-12 py-2 bg-white hover:bg-black hover:text-white transition-all text-black rounded-lg shadow-inner hover:shadow-xl duration-300 "
                                >
                                    Bestill
                                </Link>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-zinc-300">
                        Ingen retter funnet.
                    </p>
                )}
            </div>
        </div>
    );
};

export default Meny;
