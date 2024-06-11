import Link from "next/link";

export default function Header() {
    return (
        <div className=" bg-gradient-to-r from-red-400 to-red-500 h-36 rounded-b-3xl flex justify-center">
            <h1 className=" p-2 text-6xl bg-gradient-to-r from-red-100 mb-2 to-white bg-clip-text text-transparent w-fit mt-auto">
                Vår Meny
            </h1>
        </div>
    );
}
