import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import Loading from "../loading";
import { menyItems } from "../../services/index";

const Meny = () => {
    const [data, setData] = useState(null);
    const [isHovered, setIsHovered] = useState(null);
    const [checkedGroups, setCheckedGroups] = useState({});
    const [selectAll, setSelectAll] = useState(true);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedDish, setSelectedDish] = useState(null);
    const [searchQuery, setSearchQuery] = useState(""); // New state for search
    const [visibleGroups, setVisibleGroups] = useState({}); // Fix: Added visibleGroups state

    useEffect(() => {
        async function fetchData() {
            const result = await menyItems(100);
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

    const filteredDishes = data.filter(
        (item) =>
            item.dishName.toLowerCase().includes(searchQuery.toLowerCase()) // Filter data by search query
    );

    const handleDishClick = (dish) => {
        setSelectedDish(dish);
    };

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            setSelectedDish(null);
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
            {/* Search Bar */}
            <div className="py-4 mx-4 w-full flex items-center justify-center">
                <input
                    type="text"
                    placeholder="Søk etter retter..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="px-4 w-full md:w-[40rem] py-2 rounded-lg border border-gray-300 bg-zinc-800 focus:border-black focus:ring-2 focus:ring-black transition-all"
                />
            </div>

            {/* Render either filtered dishes or grouped data */}
            <div className="flex flex-wrap items-center justify-center gap-4">
                {searchQuery
                    ? // Show filtered dishes when there is a search query
                      filteredDishes.map((item) => (
                          <div
                              key={item.id}
                              className="w-96 h-auto p-3 rounded-lg bg-opacity-90 bg-zinc-800"
                              onClick={() => handleDishClick(item)}
                          >
                              <motion.div
                                  initial={{ y: 20, opacity: 0 }}
                                  animate={{ y: 0, opacity: 1 }}
                                  transition={{
                                      ease: "easeInOut",
                                      duration: 0.7,
                                  }}
                              >
                                  {item.dishImage?.url && (
                                      <Image
                                          src={item.dishImage.url}
                                          alt={item.dishName}
                                          width={400}
                                          height={400}
                                          className="w-full"
                                      />
                                  )}
                              </motion.div>
                              <h2 className="text-xl font-bold py-2 border-b">
                                  {item.dishName}
                              </h2>
                              <div className="py-2">
                                  {item.ingredients?.text && (
                                      <p className="text-pretty py-2">
                                          {item.ingredients.text}
                                      </p>
                                  )}
                              </div>
                              <div>
                                  {Array.isArray(item.allergier) &&
                                      item.allergier.length > 0 && (
                                          <div className="flex justify-start py-2">
                                              <p className="text-zinc-300">
                                                  Allergier:
                                              </p>
                                              <div className="flex items-center flex-wrap gap-1">
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
                                          </div>
                                      )}
                                  <div className="flex justify-between py-2">
                                      <p className="text-xl text-zinc-300 me-2">
                                          Pris: {item.price} NOK
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
                      ))
                    : // Show grouped data when there is no search query
                      Object.keys(groupByGruppe(data)).map((gruppe) => (
                          <div
                              key={gruppe}
                              onClick={() => toggleGroupVisibility(gruppe)}
                          >
                              <div
                                  className="size-40 bg-slate-500 bg-opacity-50 rounded-3xl flex items-end"
                                  style={{
                                      backgroundImage: `url(${
                                          groupByGruppe(data)[gruppe][0]
                                              ?.dishImage?.url
                                      })`,
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
                                  <div className="fixed inset-0 p-4 pt-52 xl:p-40 gap-6 z-20 bg-black flex items-start justify-center flex-wrap bg-opacity-80 h-screen overflow-y-auto no-scrollbar">
                                      <div className="flex items-center justify-center w-full sticky -top-44 md:-top-36">
                                          <h3 className="bg-red-500 py-2 px-12 rounded-md font-extrabold hover:cursor-pointer ">
                                              Tilbake til Gruppene
                                          </h3>
                                      </div>
                                      {groupByGruppe(data)[gruppe].map(
                                          (item) => (
                                              <div
                                                  key={item.id}
                                                  className="w-96 h-auto p-3 rounded-lg bg-opacity-90 bg-zinc-800"
                                                  onClick={() =>
                                                      handleDishClick(item)
                                                  }
                                              >
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
                                                      {item.dishImage?.url && (
                                                          <Image
                                                              src={
                                                                  item.dishImage
                                                                      .url
                                                              }
                                                              alt={
                                                                  item.dishName
                                                              }
                                                              width={400}
                                                              height={400}
                                                              className="w-full"
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
                                                              Pris: {item.price}{" "}
                                                              NOK
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
                                          )
                                      )}
                                  </div>
                              )}
                          </div>
                      ))}
            </div>
        </div>
    );
};

export default Meny;
