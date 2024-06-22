import Link from "next/link";
import GalleryDetailPage from "../../../components/gallary/fetchgallary";

const Page = ({ params }) => {
    return (
        <section>
            <GalleryDetailPage params={params} />
        </section>
    );
};

export default Page;
