import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <div className="fixed top-0 w-12 flex flex-col gap-7 py-7 z-10">
            <Link href="/" className="w-fit">
                <Image
                    src="/images/logo.png"
                    width={50}
                    height={50}
                    className="absolute bg-none top-5 left-5 z-10 rounded-full "
                    alt="Logo av Tarbush resturant i Trondheim"
                />
            </Link>
        </div>
    );
}
