import Box from "./boxes";
import BanneImages from "./Imges";
import MidleBar from "./midleContent";

export default function BannerPage() {
    return (
        <header className="overflow-x-hidden h-screen ">
            <div
                className="-z-10 absolute h-screen w-full bg-fixed bg-cover bg-center bg-no-repeat filter brightness-50 saturate-0"
                style={{
                    backgroundImage: `url(/images/grillmatt.webp)`,
                }}
            ></div>
            <div className="h-screen flex items-center justify-center text-center flex-col">
                <div>
                    <div className="mb-6">
                        <MidleBar />
                    </div>
                </div>
                <Box />
            </div>
        </header>
    );
}
