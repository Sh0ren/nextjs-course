import {Top10Rackets} from "@/components/Top10Rackets";


export default async function Top10Page() {


    return (
        <div style={{ padding: "24px" , backgroundColor: "white" }}>
            <div>
                <h3>Top 10</h3>
                <Top10Rackets/>
            </div>
        </div>
        )
}