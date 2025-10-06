import {RacketsAPI} from "@/api/racketsAPI";
import {Racket} from "@/components/Racket";


export const Top10Rackets = async () => {

    const racketsAPI = new RacketsAPI()
    const rackets = await racketsAPI.getTop10Rackets()

    return (
        <div
            style={{
                padding: 16,
                display: "flex",
                justifyContent: "space-between",
                overflowX: "auto",
                width: 1000
            }}
        >
            {rackets.map((racket) => (
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