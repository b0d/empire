import { useRouter } from "next/router";
import "./index.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "CCCCCC",
    description: "GeGGGGG",
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


