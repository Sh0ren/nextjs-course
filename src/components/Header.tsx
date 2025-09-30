"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const Header = () => {
    const pathname = usePathname()

    return (
        <header>
            <div
                style={{
                    padding: 16,
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <h3>TENNIS STORE</h3>
                <div>
                    <div
                        style={{
                            gap: 16,
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Link href='/'>
                            <p
                                style={
                                    pathname === "/"
                                        ? { color: "blue", fontWeight: "bold" }
                                        : {}
                                }
                            >
                                Главная
                            </p>
                        </Link>
                        <Link href='/rackets'>
                            <p
                                style={
                                    pathname.startsWith("/rackets")
                                        ? { color: "blue", fontWeight: "bold" }
                                        : {}
                                }
                            >
                                Ракетки
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
