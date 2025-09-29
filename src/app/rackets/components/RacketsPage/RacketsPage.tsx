import {RacketsList} from "@/components/RacketsList";
import {Sidebar} from "@/app/rackets/components/Sidebar/Sidebar";

export const RacketsPage = () => {
    return (
        <div style={{padding: '24px'}}>
            <div style={{padding : 16, display: 'flex', gap: 48}} >

                <Sidebar/>

                <div>

                    <h3 >
                        Ракетки
                    </h3>
                    <RacketsList></RacketsList>

                </div>
            </div>
        </div>
    );
};
