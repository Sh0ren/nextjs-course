import { RacketApiInstance } from "@/api/racketsAPI"
import { Racket } from "@/components/Racket"

export const RacketsList = async () => {
    const rackets = await RacketApiInstance.getRacketList()

    return (
        <div
            style={{
                padding: 16,
                display: "flex",
                justifyContent: "space-between",
                overflowX: "auto",
                width: 1000,
            }}
        >
            {rackets.slice(0, 10).map((racket) => (
                <Racket
                    imgSrc={racket.imageUrl}
                    id={String(racket.id)}
                    title={racket.name}
                    key={racket.imageUrl}
                />
            ))}
        </div>
    )
}
