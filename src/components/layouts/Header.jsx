import Link from "next/link";

export default function Header() {
    return (
        <header>
            <div className="bg-green">
                <div className="container p-2 text-center">
                    <Link href="/">
                        <div className="p-2">
                            <img src="/images/logo.png" alt="logo" width={54} height={25} />

                        </div>
                        <h2 className="fw-semibold fs-22px text-secondary">FINDTOEAT</h2>
                    </Link>
                </div>
            </div>
        </header>
    )
}