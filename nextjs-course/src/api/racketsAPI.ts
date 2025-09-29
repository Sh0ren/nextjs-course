import {rackets} from "../../public/mock";
import {IRacket} from "@/types/types";

export class RacketsAPI {

    getRacketList : () => Promise<IRacket[]> = async ()  => {
        return rackets;
    }
}