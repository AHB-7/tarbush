import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import Loading from "../loading";
import cardStyle from "../../styles/card.module.css";
import { menyItems } from "../../services/index";
import { MdOutlineFastfood } from "react-icons/md";

const Meny = () => {
    const [data, setData] = useState(null);
    const [isHovered, setIsHovered] = useState(null);
    const [checkedGroups, setCheckedGroups] = useState({});
    const [selectAll, setSelectAll] = useState(true);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedDish, setSelectedDish] = useState(null);
    const [visibleGroups, setVisibleGroups] = useState({});

    useEffect(() => {
        async function fetchData() {
            const result = await menyItems(100); // Fetching with limit 100
            setData(result.menies);
        }
        fetchData();
    }, []);

    useEffect(() => {
        if (data) {
            const initialGroups = groupByGruppe(data);
            setCheckedGroups(
                Object.keys(initialGroups).reduce((acc, gruppe) => {
                    acc[gruppe] = true;
                    return acc;
                }, {})
            );
        }
    }, [data]);

    if (!data) return <Loading />;

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

    const handleGroupClick = (gruppe) => {
        setCheckedGroups((prev) => {
            const newCheckedGroups = { ...prev, [gruppe]: !prev[gruppe] };
            const allSelected = Object.values(newCheckedGroups).every(Boolean);
            setSelectAll(allSelected);
            return newCheckedGroups;
        });
    };

    const handleSelectAll = () => {
        const newCheckedState = !selectAll;
        setSelectAll(newCheckedState);
        setCheckedGroups(
            Object.keys(groupedData).reduce((acc, gruppe) => {
                acc[gruppe] = newCheckedState;
                return acc;
            }, {})
        );
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleDishClick = (dish) => {
        setSelectedDish(dish);
    };

    const handleCloseCard = () => {
        setSelectedDish(null);
    };

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            handleCloseCard();
        }
    };

    const toggleGroupVisibility = (gruppe) => {
        setVisibleGroups((prev) => ({
            ...prev,
            [gruppe]: !prev[gruppe],
        }));
    };

    return (
        <div className="container mx-auto flex flex-wrap max-w-screen-lg">
            <div className="w-full p-4 flex items-start justify-start flex-wrap gap-2">
                <div className="relative w-full flex gap-2 justify-end flex-col items-center">
                    <div
                        className={`flex items-center bg-zinc-800 justify-center w-[10rem] cursor-pointer p-1 rounded-xl ${
                            selectAll ? "border-2" : " border-2 border-zinc-800"
                        }`}
                        onClick={handleSelectAll}
                    >
                        <p className="text-md font-light">Alle Retter</p>
                    </div>
                    <button
                        onClick={toggleDropdown}
                        className="bg-zinc-700 flex items-center justify-center gap-2 text-md w-[10rem] cursor-pointer p-1 rounded-xl"
                    >
                        <p className="text-md font-light">Velg Retter</p>
                        <MdOutlineFastfood className="text-xl" />
                    </button>
                    {dropdownOpen && (
                        <div className="absolute z-10 p-3 bg-zinc-800 shadow-md rounded-lg top-20 grid grid-cols-2 gap-4">
                            {Object.keys(groupedData).map((gruppe) => (
                                <div
                                    key={gruppe}
                                    className={`flex items-center bg-zinc-700 text-white justify-center w-full cursor-pointer p-1 rounded-lg ${
                                        checkedGroups[gruppe]
                                            ? "border-2"
                                            : "border-2 border-zinc-800"
                                    }`}
                                    onClick={() => handleGroupClick(gruppe)}
                                >
                                    <p className="text-md font-light">
                                        {gruppe}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
                {Object.keys(groupedData).map(
                    (gruppe) =>
                        checkedGroups[gruppe] && (
                            <div
                                key={gruppe}
                                onClick={() => toggleGroupVisibility(gruppe)}
                            >
                                <div
                                    className="size-40 bg-slate-500 bg-opacity-50 rounded-3xl flex items-end"
                                    style={{
                                        backgroundImage: `url(${groupedData[gruppe][0]?.dishImage?.url})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                >
                                    <div className="flex items-end justify-end w-full h-full bg-gradient-to-t from-black to-transparent hover:from-red-500 hover:to-transparent transition-all duration-300 rounded-3xl">
                                        <h2 className="text-xl text-center w-full rounded-3xl font-bold p-2">
                                            {gruppe}
                                        </h2>
                                    </div>
                                </div>
                                {visibleGroups[gruppe] && (
                                    <div className="fixed inset-0 p-4 pt-52 xl:p-40 gap-6 z-20 bg-black flex items-start justify-center flex-wrap bg-opacity-50 h-screen overflow-y-auto no-scrollbar">
                                        {groupedData[gruppe].map((item) => (
                                            <div
                                                key={item.id}
                                                className="w-96 h-auto p-3 rounded-lg bg-opacity-90 bg-zinc-800"
                                                onClick={() =>
                                                    handleDishClick(item)
                                                }
                                            >
                                                <div>
                                                    <motion.div
                                                        initial={{
                                                            y: 20,
                                                            opacity: 0,
                                                        }}
                                                        animate={{
                                                            y: 0,
                                                            opacity: 1,
                                                        }}
                                                        transition={{
                                                            ease: "easeInOut",
                                                            duration: 0.7,
                                                        }}
                                                    >
                                                        {item.dishImage
                                                            ?.url && (
                                                            <Image
                                                                src={
                                                                    item
                                                                        .dishImage
                                                                        .url
                                                                }
                                                                alt={
                                                                    item.dishName
                                                                }
                                                                width={400}
                                                                height={400}
                                                                className=" w-full"
                                                            />
                                                        )}
                                                    </motion.div>
                                                    <h2 className="text-xl font-bold py-2 border-b">
                                                        {item.dishName}
                                                    </h2>
                                                    <div className="py-2">
                                                        {item.ingredients
                                                            ?.text && (
                                                            <p className="text-pretty py-2">
                                                                {
                                                                    item
                                                                        .ingredients
                                                                        .text
                                                                }
                                                            </p>
                                                        )}
                                                    </div>
                                                    <div>
                                                        {Array.isArray(
                                                            item.allergier
                                                        ) &&
                                                            item.allergier
                                                                .length > 0 && (
                                                                <div className="flex justify-start py-2">
                                                                    <p className="text-zinc-300">
                                                                        Allergier:
                                                                    </p>
                                                                    <div className="flex items-center flex-wrap gap-1">
                                                                        {item.allergier.map(
                                                                            (
                                                                                allergy,
                                                                                index
                                                                            ) => (
                                                                                <p
                                                                                    key={
                                                                                        index
                                                                                    }
                                                                                    className="w-fit bg-yellow-400 text-black text-xs me-1 px-2 py-0.5 rounded-full dark:bg-blue-600 font-thin dark:text-white"
                                                                                >
                                                                                    {allergy.trim()}
                                                                                </p>
                                                                            )
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            )}
                                                        <div className="flex justify-between py-2">
                                                            <p className="text-xl text-zinc-300 me-2">
                                                                Pris:{" "}
                                                                {item.price} NOK
                                                            </p>
                                                            <Link
                                                                href={`/kontakt`}
                                                                className="px-6 py-2 bg-white hover:bg-black hover:text-white transition-all text-black rounded-lg shadow-inner hover:shadow-xl duration-300"
                                                            >
                                                                Bestill
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )
                )}
            </div>
            {/* {selectedDish && (
                <div
                    className="fixed inset-0 z-30 bg-black bg-opacity-50 flex items-center justify-center p-4"
                    onClick={handleBackdropClick}
                >
                    <div
                        className="bg-white rounded-lg p-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                      
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ ease: "easeInOut", duration: 0.7 }}
                        >
                            {selectedDish.dishImage?.url && (
                                <Image
                                    src={selectedDish.dishImage.url}
                                    alt={selectedDish.dishName}
                                    width={200}
                                    height={200}
                                    className="w-20 h-20"
                                />
                            )}
                        </motion.div>
                        <h2 className="text-xl font-bold py-2 border-b">
                            {selectedDish.dishName}
                        </h2>
                        <div className="py-2">
                            {selectedDish.ingredients?.text && (
                                <p className="text-pretty py-2">
                                    {selectedDish.ingredients.text}
                                </p>
                            )}
                        </div>
                        <div>
                            {Array.isArray(selectedDish.allergier) &&
                                selectedDish.allergier.length > 0 && (
                                    <div className="flex justify-start py-2">
                                        <p className="text-zinc-300">
                                            Allergier:
                                        </p>
                                        <div className="flex items-center flex-wrap gap-1">
                                            {selectedDish.allergier.map(
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
                                    </div>
                                )}
                            <div className="flex justify-between py-2">
                                <p className="text-xl text-zinc-300 me-2">
                                    Pris: {selectedDish.price} NOK
                                </p>
                                <Link
                                    href={`/kontakt`}
                                    className="px-6 py-2 bg-white hover:bg-black hover:text-white transition-all text-black rounded-lg shadow-inner hover:shadow-xl duration-300"
                                >
                                    Bestill
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )} */}
        </div>
    );
};

export default Meny;
