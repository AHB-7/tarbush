import OpningsTimes from "../../kontakt/opningstimes";
import Anonsment from "./Annonsment";

export default function SectionThree() {
    return (
        <div className=" container flex items-center justify-center flex-wrap mx-auto h-full w-full">
            <Anonsment />
            <OpningsTimes />
        </div>
    );
}
