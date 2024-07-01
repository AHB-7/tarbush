import { BiSolidFoodMenu } from "react-icons/bi";

export default function Header() {
    return (
        <section class="container mx-auto ">
            <div class="flex items-center justify-center mx-auto flex-col mt-24 gap-4 overflow-hidden">
                <div class=" relative flex gap-2">
                    <h1 class="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
                        Vår Meny{" "}
                    </h1>
                    <div className=" absolute right-0 -mr-28 mt-2 text-red-500 opacity-30 -z-10">
                        <BiSolidFoodMenu className="text-9xl -rotate-45" />
                    </div>
                </div>
                <p className="max-w-3xl text-lg text-center font-light border-b pb-12 border-red-500">
                    Vår retter er laget med kjærlighet og omtanke for deg. Vi
                    bruker kun de beste råvarene og tilbereder maten med
                    stolthet. Velkommen til oss!
                </p>
            </div>
        </section>
    );
}
