import Link from "next/link";
import Loading from "../loading";
import Box from "./boxes";
import Image from "next/image";

export default function BannerPage({ data }) {
    if (!data) return <Loading />;
    return (
        <>
            <div
                className="relative overflow-hidden bg-cover bg-no-repeat bg-fixed text-center bg-center"
                style={{
                    backgroundImage: `url(/images/grillmat.png)`,
                    height: "100vh",
                }}
            >
                <div
                    className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                >
                    <div className="flex h-full items-center justify-center">
                        <div className="text-white backdrop-blur-md bg-white-20 p-5 md:p-10 rounded-lg">
                            <h2 className="mb-4 text-2xl">
                                Velkommen til vår restaurant
                            </h2>
                            <h4 className="mb-6 text-xl font-thin"></h4>
                            <Link
                                href="/meny"
                                className="px-6 py-2 bg-white hover:bg-black hover:text-white transition-all text-black rounded-lg shadow-inner hover:shadow-xl duration-300"
                            >
                                Vår Meny
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-4 md:bottom-36  sm:bottom-44 flex items-center justify-center w-full gap-7">
                <Box />
            </div>
        </>
    );
}
