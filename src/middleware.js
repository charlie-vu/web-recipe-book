import { NextResponse } from "next/server";

const backToHomeList = [
    '/meal',
    '/category',
]

export function middleware(req) {
    const { pathname } = req.nextUrl;
    if (backToHomeList.includes(pathname)) {
        return NextResponse.redirect(new URL('/', req.url))
    }
}