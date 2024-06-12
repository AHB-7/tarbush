import Image from "next/image";
import Link from "next/link";
import Loading from "../loading";

export default function Meny({ data }) {
    if (!data) return <Loading />;

    return (
        <div className="w-fit">
            {data.map((item) => (
                <div key={item.id} className="p-4 border-b">
                    <h2 className="text-xl font-bold">{item.dishName}</h2>
                    <Image
                        src={item.dishImage?.url || ""}
                        alt={item.dishName}
                        width={1000}
                        height={1000}
                        className=" size-auto"
                    />
                    {item.allergier && (
                        <div className="w-full flex justify-end">
                            {item.allergier.map((allergy, index) => (
                                <p
                                    key={index}
                                    className=" w-fit bg-yellow-400 text-black text-xs me-1 px-2 py-0.5 rounded-full dark:bg-blue-600 font-thin dark:text-white"
                                >
                                    {allergy.trim()}
                                </p>
                            ))}
                        </div>
                    )}
                    <p>{item.ingredients.text}</p>
                    <p>{item.rating} ⭐</p>
                    <p>{item.price} NOK</p>
                </div>
            ))}
        </div>
    );
}
