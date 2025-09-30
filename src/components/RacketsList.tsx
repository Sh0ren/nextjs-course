"use client"
import { RacketsAPI } from "@/api/racketsAPI"
import { Racket } from "@/components/Racket"

import { useEffect, useState } from "react"
import { IRacket } from "@/types/types"

export const RacketsList = () => {
    const [rackets, setRackets] = useState<IRacket[]>([])
    const [racketsApi] = useState(new RacketsAPI())

    useEffect(() => {
        racketsApi.getRacketList().then((res) => setRackets(res))
    }, [racketsApi])
    if (!rackets) {
        return null
    }

    return (
        <div
            style={{
                padding: 16,
                display: "flex",
                justifyContent: "space-between",
            }}
        >
            {rackets.slice(0, 3).map((racket) => (
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
