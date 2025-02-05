"use server";

import { cookies } from "next/headers";
export async function setCookie(name: string, value: string) {
    // const setkooc = await cookies().set("branch", value, {httpOnly: false})
    const cooki = cookies()
    cooki.set(name, value)
}