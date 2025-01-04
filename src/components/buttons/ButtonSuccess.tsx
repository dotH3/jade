interface Props {
    onClick: () => void,
    text: string
}

export const ButtonSuccess = ({ onClick, text }: Props) => {
    return (
        <button className="btn btn-gradient btn-success" onClick={onClick}>{text}</button>
    )
}
