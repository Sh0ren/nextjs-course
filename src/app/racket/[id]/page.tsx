import { RacketsAPI } from "@/api/racketsAPI"
import { RacketInfo } from "@/app/racket/[id]/RacketInfo/RacketInfo"

interface Props {
    params: Promise<{ id: string }>
}

export async function generateStaticParams() {
    return [{ id: "1" }, { id: "2" }, { id: "3" }]
}

export default async function Page({ params }: Props) {
    const { id } = await params
    const racketsApi = new RacketsAPI()
    const racket = (await racketsApi.getRacketList()).find(
        (racket) => String(racket.id) === id
    )
    return <RacketInfo racketInfo={racket} />
}
