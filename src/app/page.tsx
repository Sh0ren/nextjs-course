import { RacketsList } from "@/components/RacketsList"
import { Top10Rackets } from "@/components/Top10Rackets"
import { Gap } from "@/common/Gap"

export default function Home() {
    return (
        <div style={{ padding: "24px", backgroundColor: "white" }}>
            <div
                style={{
                    padding: 16,
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <div>
                    <h3>Ракетки</h3>
                    <RacketsList />
                </div>

                <Gap gap={16} />
                <div>
                    <h3>Top 10</h3>
                    <Top10Rackets />
                </div>
            </div>
        </div>
    )
}
