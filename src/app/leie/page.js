export const metadata = {
    title: "Utleie av Lokaler",
    description:
        "Leie lokaler hos Tarbush Restaurant for alle anledninger - bursdager, konfirmasjoner, bryllup, firmafester, julebord og mer. Kontakt oss for mer informasjon.",
    keywords: [
        "utleie av lokaler",
        "Tarbush Restaurant",
        "bursdagslokaler",
        "konfirmasjonslokaler",
        "bryllupslokaler",
        "firmafest lokaler",
        "julebord lokaler",
        "leie lokaler Trondheim",
        "arrangement lokaler",
        "selskapslokaler",
        "festlokaler",
        "kontakt oss",
        "event lokaler",
        "Trondheim",
        "Tarbush Restaurant utleie",
        "lokaler for alle anledninger",
    ],
    author: "Tarbush Restaurant",
    link: {
        rel: "canonical",
        href: "https://www.tarbush.no/utleie",
    },
    htmlAttributes: {
        lang: "no",
    },
};
import HeroSection from "../../components/leie/carosel";

const page = () => {
    return (
        <section className="h-screen mt-36 container mx-auto ">
            <HeroSection />
        </section>
    );
};

export default page;
