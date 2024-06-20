import Link from "next/link";
import GalleryDetailPage from "../../../components/gallary/fetchgallary";

const Page = ({ params }) => {
    return (
        <section>
            <GalleryDetailPage params={params} />
            <div className="text-center">
                <Link
                    href="/blog"
                    className=" mb-6 px-7 relative text uppercase py-2 text-black bg-white shadow-md shadow-zinc-800 hover:shadow-none rounded-md transition-all duration-300  hover:text-white hover:bg-red-600"
                >
                    Blog
                </Link>
            </div>
        </section>
    );
};

export default Page;
