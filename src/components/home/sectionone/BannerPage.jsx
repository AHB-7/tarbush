import Box from "./boxes";
import MidleBar from "./midleContent";

export default function BannerPage() {
    return (
        <header className="overflow-x-hidden">
            <div
                className="-z-10 absolute h-[42rem] w-full bg-cover bg-center bg-no-repeat filter brightness-50 saturate-0"
                style={{
                    backgroundImage: `url(/images/grillmatt.webp)`,
                }}
            ></div>
            <div className="flex items-center justify-center flex-col h-[42rem] w-screen px-2 gap-6 text-center">
                <div className="flex flex-col items-center">
                    <div className="mb-6">
                        <MidleBar />
                    </div>
                    <Box />
                </div>
            </div>
        </header>
    );
}
