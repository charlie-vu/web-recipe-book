import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mt-5">
            <div className="bg-green py-3">
                <div className="container">
                    <div className="d-flex flex-column flex-md-row gap-4 justify-content-md-between align-items-center">
                        <Link href="/">
                            <div className="d-flex gap-3 align-items-center">
                                <img src="/images/logo.png" alt="findtoeat" width={70} />
                                <h2 className="fw-semibold fs-24px text-secondary">FINDTOEAT</h2>
                            </div>
                        </Link>
                        <div className="d-flex gap-32px">
                            <a href="#" target="_blank">
                                <img src="/images/icon/fb.png" alt="facebook" width={36} />
                            </a>
                            <a href="#" target="_blank">
                                <img src="/images/icon/insta.png" alt="insta" width={36} />
                            </a>
                            <a href="#" target="_blank">
                                <img src="/images/icon/gmail.png" alt="gmail" width={36} />
                            </a>
                        </div>
                    </div>

                    <div className="border-top border-1 mt-3 pt-3 border-secondary small">
                        <div className="d-flex flex-wrap justify-content-end align-items-center column-gap-5">
                            <p>Source: <a href="https://github.com/charlie-vu/web-recipe-book" target="_blank" className="fw-semibold">Github</a></p>
                            <p>Figma: <a href="https://www.figma.com/design/wtulIuCRE3uUUSxoKdX7kN/Web-recipe-book--Community" target="_blank" className="fw-semibold">Web Recipe Book (Community)</a></p>
                            <p>API: <a href="https://www.themealdb.com/" target="_blank" className="fw-semibold">The Meal DB</a></p>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}