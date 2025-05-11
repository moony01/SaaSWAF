"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  useEffect(() => {
    //API 호출
    fetch("http://127.0.0.1:3000/hello")
      .then((res) => res.json()) // JSON 변환
      .then((data) => {
        alert(`API 응답: ${data.message}`); // 응답을 alert으로 표시
      })
      .catch((err) => {
        console.error("API 호출 실패:", err);
        alert("API 호출 중 오류 발생!");
      });
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>
      </main>
    </div>
  );
}