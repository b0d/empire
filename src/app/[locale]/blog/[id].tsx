import { useRouter } from "next/router";
import "./index.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Erotic massage Lviv - Empire",
    description: "Best erotic massage in Lviv. Beautiful girls and unforgettable emotions. Call us now! 24/7",
};

/* export async function generateMetadata(params:type) {
    params,
}
*/
export default function Kontakty() {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div className="container">
            <h1>Hello {id}</h1>
        </div>
    );
}


