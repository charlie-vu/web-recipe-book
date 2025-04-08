export default function Footer() {
    return (
        <footer>
            <div className="bg-green py-3">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <a href="/">
                            <div className="d-flex gap-3 align-items-center">
                                <img src="images/logo.png" alt="logo" width={70} />
                                <h2 className="fw-semibold fs-24px text-secondary">FINDTOEAT</h2>
                            </div>
                        </a>
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
                </div>
            </div>
        </footer>
    )
}