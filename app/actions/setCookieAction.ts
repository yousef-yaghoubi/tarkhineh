"use server";

import { cookies } from "next/headers";
export async function setCookie(name: string, value: string) {
    // const setkooc = await cookies().set("branch", value, {httpOnly: false})
    (await cookies()).set(name, value)
}