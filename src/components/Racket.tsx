import Image from "next/image"
import { redirect } from "next/navigation"
interface Props {
    imgSrc: string
    title: string
    id: string
}

export const Racket = ({ imgSrc, title, id }: Props) => {
    return (
        <div>
            <Image
                height={600}
                width={500}
                onClick={() => redirect(`/racket/${id}`)}
                src={imgSrc}
                alt={title}
            />
            <p>{title}</p>
        </div>
    )
}
