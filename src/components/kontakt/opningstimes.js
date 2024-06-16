export default function OpningsTimes() {
    return (
        <div className="bg-opacity-5 bg-black  after:-z-10 after:bg-black after:bg-opacity-10 relative flex items-start flex-col gap-4 justify-center my-2 w-full py-10 px-4 border max-w-[18rem] max-h-[20rem] rounded-lg after:rounded-lg after:border after:absolute after:max-w-[18rem] after:top-2 after:right-2 after:py-10 after:px-4 after:max-h-[20rem] after:w-full after:h-full after:border-red-400">
            <h2 className="text-xl">Åpningstider</h2>
            <ul className="flex flex-col  w-full">
                <li className=" w-full flex justify-between">
                    <h3 className="">Mandag</h3> <h3>14:00-22:00</h3>
                </li>
                <li className=" w-full flex justify-between">
                    <h3 className="">Tirsdag</h3>
                    <h3>14:00-22:00</h3>
                </li>
                <li className=" w-full flex justify-between">
                    <h3 className="">Onsdag</h3>
                    <h3>14:00-22:00</h3>
                </li>
                <li className=" w-full flex justify-between">
                    <h3 className="">Torsdag</h3>
                    <h3>14:00-22:00</h3>
                </li>
                <li className=" w-full flex justify-between">
                    <h3 className="">Fredag</h3>
                    <h3>14:00-22:00</h3>
                </li>
                <li className=" w-full flex justify-between">
                    <h3 className="">Søndag</h3>
                    <h3>14:00-22:00</h3>
                </li>
            </ul>
        </div>
    );
}
