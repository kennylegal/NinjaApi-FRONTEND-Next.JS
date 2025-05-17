'use server';

import { getAccessToken } from "@/app/lib/auth";
import { NextResponse } from "next/server";

const DJANGO_WAITLIST_URL = 'http://127.0.0.1:8000/api/waitlist/'
export async function GET(request) {

    const authToken = await getAccessToken()
    if (!authToken){
        return NextResponse.json({error: "Unauthorized"}, {status: 401})
    }
    const options = {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Accept" : "application/json",
            "Authorization": `Bearer ${authToken}`
        }
    }
    const response = await fetch(DJANGO_WAITLIST_URL, options)
    const result = await response.json()
    let status = 200
    if (!response.ok){
        status = 401
        console.log(result)
        return NextResponse.json({...result}, {status: response.status})
    }

    return NextResponse.json({...result}, {status: response.status})
    
}