import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Bestill Nå",
    description:
        "Bestill bord hos Tarbush Restaurant eller kontakt oss for mer informasjon. Vi er her for deg i Trondheim.",
    keywords: [
        "Tarbush Restaurant",
        "bestill nå",
        "kontakt oss",
        "bestille bord",
        "Trondheim",
        "restaurant Trondheim",
        "Tarbush Restaurant",
        "spørsmål",
        "åpningstider",
        "telefonnummer Tarbush",
        "besøksadresse Tarbush",
        "lunsjservering",
        "rabatt",
        "reservasjon",
        "mat Trondheim",
        "autentisk mat",
        "syrisk mat",
        "kurdiske retter",
        "familierestaurant",
    ],
    author: "Tarbush Restaurant",
    link: {
        rel: "canonical",
        href: "https://www.tarbush.no/bestill",
    },
    htmlAttributes: {
        lang: "no",
    },
};

export default function Page() {
    return (
        <>
            <section className="flex items-center justify-center my-24 h-full flex-col gap-8">
                <div className="flex flex-col items-start justify-start relative -z-10 px-2">
                    <h1 className="bg-white w-full text-center text-red-500 p-3 font-extrabold text-2xl rounded-md uppercase">
                        Studentrabatt
                    </h1>
                    <div className="flex items-center justify-center w-full ">
                        {" "}
                        <Image
                            src="/images/events/students.svg"
                            width={500}
                            height={400}
                            alt="Studentrabatt for alle studentene NTNU og Trondheim tiller"
                        ></Image>
                    </div>
                    <p className="py-2 text-center">
                        Å være student er vanskelig og derfor, gleder vi oss til
                        å gjøre det billigere for alle studentene!
                    </p>
                    <div className="flex items-center justify-center flex-col w-full h-32 relative">
                        <p className="w-64 text-xl font-bold">
                            20% på take away
                        </p>
                        <p className="w-64 text-xl font-bold">
                            15% for å spisse inn
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-center flex-col gap-4">
                    <div className=" w-full flex items-center justify-center pt-4">
                        <Link
                            href="/kontakt"
                            className="px-6 relative text uppercase py-2.5 text-black bg-white shadow-md shadow-zinc-800 hover:shadow-none rounded-md transition-all duration-300  hover:text-white hover:bg-red-600"
                        >
                            Ring for å bestille
                        </Link>
                    </div>
                    <div>
                        <ul className="list-disc list-inside pb-12 px-4">
                            <li className=" list-item">
                                tilbudet gjelder kun for studenter med gyldig
                                studentbevis
                            </li>
                            <li>tilbudet gjelder ikke alkohol</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}
