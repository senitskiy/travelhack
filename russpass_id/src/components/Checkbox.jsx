import './checkbox.scss'

export const Checkbox = (props) => {
    const { value, label, name, onChange } = props

    return (
        <div>
            <label>{label}
                <input onChange={onChange} id={name} name={name} type="checkbox" value={value} />
            </label>
        </div>
    )
}