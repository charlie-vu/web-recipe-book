import { NextResponse } from "next/server";

export function middleware(req) {
    const { pathname } = req.nextUrl;
    if (pathname === "/meal") {
        return NextResponse.redirect(new URL('/', req.url))
    }
}