"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    signIn("credentials", {
      email,
      password,
      redirectTo: "/",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-3xl font-bold">로그인</h1>
      <p>인프런 계정으로 로그인할 수 있어요</p>

      <form
        className="flex flex-col gap-2 min-w-[300px]"
        onSubmit={handleSubmit}
      >
        <label htmlFor="email">이메일</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          placeholder="example@inflab.com"
          className="border border-gray-300 rounded-sm p-2"
        ></input>
        <label htmlFor="password">비밀번호</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          placeholder="비밀번호"
          className="border border-gray-300 rounded-sm p-2"
        ></input>
        <button
          type="submit"
          className="bg-green-500 text-white font-bold rounded-sm p-2 cursor-pointer"
        >
          로그인
        </button>
        <Link href="/signup" className="text-center">
          회원가입
        </Link>
      </form>
    </div>
  );
}
