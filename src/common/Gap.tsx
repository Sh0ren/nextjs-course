
interface IGapProps {
    gap: number;
}

export const Gap = ({gap}:IGapProps) => {

    return (
        <div style={{height: `${gap}px`}}> </div>
    )

}