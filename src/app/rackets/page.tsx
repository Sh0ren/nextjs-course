import { Sidebar } from "@/app/rackets/components/Sidebar/Sidebar"
import { RacketsList } from "@/components/RacketsList"

export default async function Page() {
    return (        <div style={{ padding: "24px" }}>
            <div style={{ padding: 16, display: "flex", gap: 48 }}>
                <Sidebar />

                <div>
                    <h3>Ракетки</h3>
                    <RacketsList/>
                </div>
            </div>
        </div>
    )
}
