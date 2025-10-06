import Image from "next/image"
import { RacketsAPI } from "@/api/racketsAPI"
import NotFound from "@/app/racket/[id]/not-found"

interface Props {
    id: string
}

export const RacketInfo = async ({ id }: Props) => {
    const racketsApi = new RacketsAPI()
    const racketInfo = (await racketsApi.getRacketById(id)).product

    if (!racketInfo) {
        return NotFound()
    }
    return (
        <div
            style={{
                gap: 64,
                display: "flex",
                justifyContent: "center",
                backgroundColor: "white",
            }}
        >
            <div style={{ display: "flex", flexDirection: "column" }}>
                <p style={{ textAlign: "left" }}>{racketInfo.brand.name}</p>
                <h4>{racketInfo.name}</h4>
                <h4 style={{ maxWidth: 300 }}>{racketInfo.description}</h4>
            </div>
            <Image
                src={racketInfo.imageUrl}
                alt={racketInfo.name}
                height={600}
                width={400}
            />
            <h4>{racketInfo.price} Rub.</h4>
        </div>
    )
}
