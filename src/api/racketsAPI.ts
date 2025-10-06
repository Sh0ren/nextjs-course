import { IRacket } from "@/types/types"

export class RacketsAPI {
    getRacketList: () => Promise<IRacket[]> = async () => {
        const response = await fetch(
            "http://localhost:4000/api/products?limit=10"
        )
        return response.json()
    }

    getTop10Rackets = async (): Promise<IRacket[]> => {
        const response = await fetch("http://localhost:4000/api/top-10")
        return response.json()
    }

    getRacketById = async (id: string): Promise<{ product: IRacket }> => {
        const response = await fetch("http://localhost:4000/api/product/" + id)
        return response.json()
    }
}
