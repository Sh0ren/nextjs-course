import Image from "next/image"
import Link from "next/link"
interface Props {
    imgSrc: string
    title: string
    id: string
}

export const Racket = ({ imgSrc, title, id }: Props) => {
    return (
        <Link href={`/racket/${id}`}>
            <Image
                height={600}
                width={500}
                src={imgSrc}
                alt={title}
            >
            </Image>
            <p>{title}</p>
        </Link>
    )
}
