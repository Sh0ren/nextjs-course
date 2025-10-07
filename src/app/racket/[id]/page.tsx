import { RacketInfo } from "@/app/racket/[id]/RacketInfo/RacketInfo"
import { Suspense } from "react"

interface Props {
    params: Promise<{ id: string }>
}

export default async function Page({ params }: Props) {
    const { id } = await params

    return (
        <Suspense fallback={<h1>...wait</h1>}>
            <RacketInfo id={id} />
        </Suspense>
    )
}
