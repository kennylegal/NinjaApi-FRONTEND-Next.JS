const { cookies } = require("next/headers");

const TOKEN_AGE = 3600;

export function getAccessToken(){
    const myAuthToken = cookies().get('auth-token');
    return myAuthToken?.value;
}

export function setAccessToken(authToken){
    cookies().set({
        name:'auth-token',
        value: authToken,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'development',
        sameSite: 'strict',
        maxAge: TOKEN_AGE
    })
}

export function deleteToken(){
    cookies().delete('auth-refresh-token');
    return cookies().delete('auth-token');
}


export function getRefreshToken(){
    const myAuthToken = cookies().get('auth-refresh-token');
    return myAuthToken?.value;
}


export function setRefreshToken(authRefreshToken){
    cookies().set({
        name:'auth-refresh-token',
        value: authRefreshToken,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'development',
        sameSite: 'strict',
        maxAge: TOKEN_AGE
    })
}
