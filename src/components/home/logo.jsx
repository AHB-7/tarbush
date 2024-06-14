import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <Link
            href="/"
            className="absolute top-0 w-full flex flex-col gap-7 py-7 align-middle text-center bg-black bg-opacity-65"
        >
            <Image
                src="/images/logo.png"
                width={50}
                height={50}
                className="absolute bg-none top-5 left-5 z-10 rounded-full "
                alt="Picture of the author"
            />
        </Link>
    );
}
