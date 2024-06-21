import Link from "next/link";

export default function Anonsment() {
    return (
        <div className="container bg-zinc-900 md:p-12 py-12 bg-opacity-80 rounded-lg flex items-center justify-center md:items-start md:justify-start flex-col md:max-w-[50rem] font-semibold me-auto">
            <h2 className="text-4xl font-bold md:text-start text-center">
                Vi er glad for å annonsere
            </h2>
            <span className="text-4xl font-bold bg-red-500 px-1 py-2 rounded-md mt-2">
                Lunsj servering!
            </span>
            <p className="py-8 font-normal text-center md:text-start">
                Fra og med den 24.06.2024 vil vi servere lunsj fra kl 11:00 til
                kl 14:00. Vi gleder oss til å se dere!
            </p>
            <Link
                href="/meny"
                className="px-6 font-normal md:self-end text uppercase py-2.5 text-black bg-white shadow-md shadow-zinc-800 hover:shadow-none rounded-md transition-all duration-300  hover:text-white hover:bg-red-600"
            >
                Sjekk ut vår meny
            </Link>
        </div>
    );
}
