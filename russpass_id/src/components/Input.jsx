export const Input = (props) => {
    const { onChange, value, type, label, name } = props

    return (
        <div>
            <label>{label}
                <input id={name} name={name} onChange={onChange} value={value} type={type} />
            </label>
        </div>
    )
}