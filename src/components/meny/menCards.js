import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import Loading from "../loading";
import cardStyle from "../../styles/card.module.css";
import { roudIt } from "../../func/meny";
import { menyItems } from "../../services/index";
import { CiCircleChevDown } from "react-icons/ci";
import { MdOutlineFastfood } from "react-icons/md";

const Meny = () => {
    const [data, setData] = useState(null);
    const [isHovered, setIsHovered] = useState(null);
    const [checkedGroups, setCheckedGroups] = useState({});
    const [selectAll, setSelectAll] = useState(true);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedDish, setSelectedDish] = useState(null);

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

    return (
        <div className="container mx-auto flex flex-wrap max-w-screen-lg">
            <div className="w-full p-4 flex items-start justify-start flex-wrap gap-2">
                <div className="relative w-full flex gap-2 justify-end flex-col items-end">
                    <div
                        className={`flex items-center bg-zinc-800 justify-center w-[10rem] cursor-pointer p-1 rounded-xl ${
                            selectAll
                                ? "border-2  "
                                : " border-2 border-zinc-800 "
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
                                            ? "border-2 "
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
            {Object.keys(groupedData).map(
                (gruppe) =>
                    checkedGroups[gruppe] && (
                        <div key={gruppe} className="w-full mb-8 p-2">
                            <h2 className="text-2xl text-center font-bold mb-4 py-6 ps-5 mx-2  text-red-500 bg-white rounded-lg">
                                {gruppe}
                            </h2>
                            <div className={` flex flex-wrap gap-4 mx-2`}>
                                {groupedData[gruppe].map((item) => (
                                    <div
                                        key={item.id}
                                        className={`w-[20rem] grow border p-3 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-sm hover:shadow-slate-300 `}
                                        onClick={() => handleDishClick(item)}
                                    >
                                        <h2 className="text-lg py-2 border-b uppercase">
                                            {item.dishName}
                                        </h2>
                                        <div className="flex justify-between py-2">
                                            <p className="text-lg text-zinc-300 me-2">
                                                Pris: {item.price} NOK
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
            )}
            {selectedDish && (
                <div
                    className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50"
                    onClick={handleBackdropClick}
                >
                    <div className=" bg-zinc-800 p-6 rounded-lg shadow-lg w-full max-w-lg relative">
                        <button
                            className="absolute top-4 right-4 text-xl"
                            onClick={handleCloseCard}
                        >
                            &times;
                        </button>
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                ease: "easeInOut",
                                duration: 0.7,
                            }}
                        >
                            {selectedDish.dishImage?.url && (
                                <Image
                                    src={selectedDish.dishImage.url}
                                    alt={selectedDish.dishName}
                                    width={400}
                                    height={400}
                                    className={`${cardStyle.cardImage}`}
                                />
                            )}
                        </motion.div>
                        <h2 className="text-xl font-bold py-2 border-b">
                            {selectedDish.dishName}
                        </h2>
                        <div className="py-2">
                            {selectedDish.ingredients &&
                                selectedDish.ingredients.text && (
                                    <p className="text-pretty py-2">
                                        {selectedDish.ingredients.text}
                                    </p>
                                )}
                        </div>
                        <div className="">
                            {Array.isArray(selectedDish.allergier) &&
                                selectedDish.allergier.length > 0 && (
                                    <div className="flex justify-start py-2">
                                        <p className="text-zinc-300">
                                            Allergier:
                                        </p>
                                        {selectedDish.allergier && (
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
                                        )}
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
            )}
        </div>
    );
};

export default Meny;
