import './input.scss'

export const Input = (props) => {
    const { onChange, value, type, label, name, theme } = props

    return (
        <div className={`form-group text-left flex flex-col ${theme}`}>
            <label className="mb-3 font-medium">{label}</label>
            <div class="form-group">
                <input id={name} name={name} onChange={onChange} value={value} type={type} className="py-3 px-4 border rounded-lg border-rp-input-border outline-none box-border ocus:border-2 w-full" />
            </div>
        </div>
        // <div>
        //     <label>{label}
        //         <input id={name} name={name} onChange={onChange} value={value} type={type} />
        //     </label>
        // </div>
    )
}   