import Link from "next/link";

export default function Anonsment() {
    return (
        <div className="container bg-zinc-900 md:p-12 py-12 bg-opacity-80 rounded-lg flex items-center md:items-start justify-start flex-col max-w-[35rem] font-semibold me-auto">
            <h2 className="text-4xl md:text-start text-center">
                Vi er glad for å annonsere
            </h2>{" "}
            <span className="text-4xl bg-red-500 px-1 rounded-md mt-2">
                Lunsj servering!
            </span>
            <p className="py-8 font-normal text-center">
                Fra starten av den 24.06.2024 vil vi servere lunsj fra kl 11:00
                til kl 12:00. Vi gleder oss til å se dere!
            </p>
            <Link
                href="/meny"
                className="px-7 self-center text-thin relative text uppercase py-2 text-black bg-white shadow-md shadow-zinc-800 hover:shadow-none rounded-md transition-all duration-300  hover:text-white hover:bg-red-600"
            >
                Sjekk ut vår meny
            </Link>
        </div>
    );
}
