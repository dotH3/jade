interface Props {
    value: string
    setValue: (value: string) => void
    placeholder?: string
}
export const Input = ({ placeholder, setValue, value }: Props) => {
    return (
        <input type="text" placeholder={placeholder} onChange={(e) => { setValue(e.target.value) }} value={value} className="input" />
    )
}
