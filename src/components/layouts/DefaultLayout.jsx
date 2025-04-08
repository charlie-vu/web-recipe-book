import Footer from "./Footer";
import Header from "./Header";

export default function DefaultLayout(props) {
    const { children } = props;
    return (
        <>
            <div className="min-vh-100 d-flex flex-column">
                <Header />
                <main className="flex-grow-1">
                    {children}
                </main>
                <Footer />
            </div>
        </>
    )
}