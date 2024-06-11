import Link from "next/link";

export default function Banner({ data }) {
    return (
        <div
            className="relative overflow-hidden bg-cover bg-no-repeat bg-fixed text-center"
            style={{
                backgroundImage: `url(${data?.bannerImage?.url})`,
                height: "100vh",
            }}
        >
            <div
                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
            >
                <div className="flex h-full items-center justify-center">
                    <div className="text-white backdrop-blur-sm bg-white-20 p-12 rounded-lg">
                        <h2 className="mb-4 text-4xl font-thin">
                            {data?.heading}
                        </h2>
                        <h4 className="mb-6 text-xl font-thin">
                            {data?.description}
                        </h4>
                        <Link
                            href="/meny"
                            className="px-6 py-2 bg-white text-black rounded-lg"
                        >
                            {data?.heroBtn}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
