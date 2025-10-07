import Image from "next/image"
import { RacketApiInstance } from "@/api/racketsAPI"
import { notFound } from "next/navigation"

interface Props {
    id: string
}

export const RacketInfo = async ({ id }: Props) => {
    const racketInfo = (await RacketApiInstance.getRacketById(id)).product

    if (!racketInfo) {
        return notFound()
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
