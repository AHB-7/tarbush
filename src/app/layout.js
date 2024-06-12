import Navbar from "@/components/nav/nav";
import "@/styles/globals.css";
import { roboto } from "@/ui/font";

export const metadata = {
    title: "Tarbush",
    description:
        "Tarbush restaurant i Trondheim, vi er her for å tjene dere på best mulig måte. Ta en titt på vår meny og bestill mat i dag!",
};

export default function RootLayout({ children }) {
    return (
        <html lang="no">
            <body className={roboto.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
