import OpningsTimes from "../../kontakt/opningstimes";

export default function Anonsment() {
    return (
        <div className="container flex items-start justify-start flex-col max-w-[35rem] font-semibold me-auto">
            <h2 className="text-4xl">
                Vi er glad for å annonsere
                <br />
                <span className="bg-red-500 px-1 rounded-md">
                    Lunsj servering!
                </span>
            </h2>
            <p className="py-8 font-normal">
                Fra starten av den 24.06.2024 vil vi servere lunsj fra kl 12:00
                til kl 16:00. Vi gleder oss til å se dere!
            </p>
        </div>
    );
}
