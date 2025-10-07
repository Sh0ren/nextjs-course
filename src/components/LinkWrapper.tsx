import Link from "next/link"

interface LinkWrapperProps {
    href: string
    text: string
    pathname: string
}

export const LinkWrapper = ({ text, pathname, href }: LinkWrapperProps) => {
    return (
        <>
            <Link href={href}>
                <p
                    style={
                        pathname === href
                            ? { color: "blue", fontWeight: "bold" }
                            : {}
                    }
                >
                    {text}
                </p>
            </Link>
        </>
    )
}
