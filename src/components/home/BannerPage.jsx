import Box from "./boxes";
import MidleBar from "./midleContent";

export default function BannerPage() {
    return (
        <>
            <div
                className="-z-10 absolute h-screen min-h-[40rem] w-screen bg-cover bg-center bg-no-repeat filter brightness-50 saturate-0"
                style={{
                    backgroundImage: `url(/images/grillmatt.webp)`,
                }}
            ></div>
            <div className="flex items-center justify-center flex-col h-screen min-h-[40rem] w-screen px-2 gap-6 text-center">
                <div className="flex flex-col items-center">
                    <div className="mb-6">
                        <MidleBar />
                    </div>
                    <div className="flex gap-2 md:gap-8 mt-0 md:mt-auto mb-0 md:mb-10">
                        <Box />
                    </div>
                </div>
            </div>
        </>
    );
}
