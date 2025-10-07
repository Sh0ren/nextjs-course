"use client"
import { usePathname } from "next/navigation"
import { LinkWrapper } from "@/components/LinkWrapper"

export const Header = () => {
    const pathname = usePathname()

    return (
        <header>
            <div
                style={{
                    padding: 16,
                    display: "flex",
                    justifyContent: "space-between",
                    backgroundColor: "lightgray",
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
                        <LinkWrapper
                            href={"/"}
                            pathname={pathname}
                            text={"Главная"}
                        ></LinkWrapper>
                        <LinkWrapper
                            href={"/rackets"}
                            text={"Ракетки"}
                            pathname={pathname}
                        />
                        <LinkWrapper
                            href={"/top-10"}
                            text={"Top 10"}
                            pathname={pathname}
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}
