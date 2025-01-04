interface Props {
    onClick: () => void
}

export const ButtonSuccess = ({ onClick }: Props) => {
    return (
        <button className="btn btn-gradient btn-success" onClick={onClick}>Request</button>
    )
}
