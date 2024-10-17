
import "bootstrap/dist/css/bootstrap.min.css";

import Image from "next/image";
import logo from "../components/FirstScreen/logo.webp";

export default function NotFound() {

    return (
        <html>
            <body data-bs-theme="dark">
                <div className="d-flex text-center flex-column">

                    <div className="container d-flex flex-column justify-content-center align-items-center">
                        <a href="/">
                            <Image
                                height={300}
                                width={300}
                                src={logo}
                                alt="Error - 404! Page not found."
                                className='header-logo mt-5'
                            /></a>
                        <h1 className="mt-5">Error - 404! Page not found.</h1>
                    </div>
                </div>
            </body>
        </html>)
}