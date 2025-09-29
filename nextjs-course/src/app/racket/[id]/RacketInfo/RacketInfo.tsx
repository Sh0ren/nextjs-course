import {IRacket} from "@/types/types";
import Image from "next/image";

interface Props {
    racketInfo? : IRacket
}

export const RacketInfo = ({racketInfo} : Props) => {
    if (!racketInfo) {
        return  <>
            <h1 >Racket Found</h1>
        </>
    }
    return (
        <div style={{gap : 64, display: 'flex', justifyContent: 'center'}} >

        <div style={{display: 'flex', flexDirection: 'column'}}>
                <p style={{textAlign: 'left'}}>{racketInfo.brand.name}</p>
                <h4>
                    {racketInfo.name}
                </h4>
                <h4 style={{maxWidth: 300}}>
                    {racketInfo.description}
                </h4>
        </div>
            <Image src={racketInfo.imageUrl} alt={racketInfo.name} style={{height: 600, width: 400}}></Image>
            <h4 >{racketInfo.price} Rub.</h4>
        </div>
    );
};