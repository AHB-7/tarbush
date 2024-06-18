// BanneImages.js
import Image from "next/image";

export default function BanneImages() {
    return (
        <div className=" -z-10 fixed top-0 left-0 w-screen h-screen">
            <Image
                src="/images/home/image-1.png"
                className="-rotate-6"
                alt="alt"
                width="140"
                height="50"
            />
            <Image
                src="/images/home/image-2.png"
                className="-rotate-45"
                alt="alt"
                width="140"
                height="50"
            />
            <Image
                src="/images/home/image-3.png"
                className="-rotate-12 translate-x-3/4"
                alt="alt"
                width="140"
                height="50"
            />
        </div>
    );
}
