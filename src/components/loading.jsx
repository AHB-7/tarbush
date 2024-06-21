import Image from "next/image";

export default function Loading() {
    return (
        <div className="flex h-full w-full justify-center items-center flex-col">
            <div className="pb-4">
                <p variant="h3">Gi oss et skekund</p>
            </div>
            <div className="flex justify-center items-center">
                <div role="status">
                    <Image
                        src="/images/theTarbush.png"
                        alt="loading"
                        width={100}
                        height={100}
                        className="animate-spin"
                    />
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>
    );
}
