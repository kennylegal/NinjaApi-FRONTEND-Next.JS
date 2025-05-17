'use server';

import { setAccessToken, setRefreshToken } from "@/app/lib/auth";
import { NextResponse } from "next/server";

const DJANGO_LOGIN_URL = 'http://127.0.0.1:8000/api/token/pair';

export async function POST(request) {

    const requestData = await request.json();
    const jsonData = JSON.stringify(requestData);
    const requestOption = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: jsonData,
    };

    const response = await fetch(DJANGO_LOGIN_URL, requestOption);
    const data = await response.json();

    if (response.ok) {
        const { access, refresh } = data;
        setAccessToken(access);
        setRefreshToken(refresh);
        return NextResponse.json({"LoggedIn": true}, { status: 200 });
    }

    return NextResponse.json({"LoggedIn": false}, { status: 400 });
} 
