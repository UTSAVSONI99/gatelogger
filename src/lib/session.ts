"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SignJWT, jwtVerify } from "jose";

const users = [
  {
    username: "utsavsoni619@gmail.com",
    password: "utsav99",
    sessionId: "utsav",
  },
  {
    username: "nknapster@gmail.com",
    password: "Nikhil1234",
    sessionId: "admin",
  },
  {
    username: "user",
    password: "user",
    sessionId: "user",
  },
];

const key = new TextEncoder().encode(process.env.SECRET!);

async function encrypt(payload: any) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1d")
    .sign(key);
}

async function decrypt(session: string) {
  try {
    const { payload } = await jwtVerify(session, key, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch {
    return null;
  }
}

export async function getUser() {
  const cookieStore = cookies();
  const session = (await cookieStore).get("sessionId");
  if (!session) return null;

  const payload = await decrypt(session.value);
  if (!payload) return null;

  const user = users.find((u) => u.sessionId === payload.userId);
  return user ? { username: user.username } : null;
}

export async function login(username: string, password: string) {
  const user = users.find((u) => u.username === username && u.password === password);
  if (!user) return null;

  const token = await encrypt({ userId: user.sessionId });
  const cookieStore = await cookies();
  cookieStore.set("sessionId", token, {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24, // 1 day
  });

  redirect("/admin");
}

export async function logout() {
    const cookieStore = await cookies();
    cookieStore.set("sessionId", "", {
    httpOnly: true,
    path: "/",
    maxAge: 0,
  });

  redirect("/login");
}
