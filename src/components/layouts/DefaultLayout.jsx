'use client';
import { SwitchTransition, CSSTransition } from "react-transition-group";
import Footer from "./Footer";
import Header from "./Header";
import { useRouter } from "next/router";
import { useRef } from "react";

export default function DefaultLayout(props) {
    const { children } = props;
    const router = useRouter();
    const nodeRef = useRef(null);
    return (
        <>
            <div className="min-vh-100 d-flex flex-column overflow-x-hidden">
                <Header />
                <SwitchTransition>
                    <CSSTransition key={router.pathname} timeout={300} classNames="page" unmountOnExit nodeRef={nodeRef}>
                        <main className="flex-grow-1" ref={nodeRef}>
                            {children}
                        </main>
                    </CSSTransition>
                </SwitchTransition>
                <Footer />
            </div>
        </>
    )
}