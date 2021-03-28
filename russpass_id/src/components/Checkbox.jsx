import './checkbox.scss'

export const Checkbox = (props) => {
    const { value, label, name, onChange, condition } = props

    return (
        <div className="checkbox-group relative">
            <input onChange={onChange} id={name} name={name} type="checkbox" value={value} checked={condition}/>
            <label for={name}>{label}
            </label>
        </div>
    )
}