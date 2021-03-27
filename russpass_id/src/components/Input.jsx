export const Input = (props) => {
    const { onChange, value, type, label, name } = props

    return (
        <div class="form-group text-left flex flex-col ">
            <label for={name} className="mb-3">Логин</label>
            <div class="form-group">
                <input id={name} name={name} onChange={onChange} value={value} type={type} className="py-3 px-4 border rounded-lg border-rp-input-border outline-none focus:border-2 focus:border-rp-text" />
            </div>
        </div>
        // <div>
        //     <label>{label}
        //         <input id={name} name={name} onChange={onChange} value={value} type={type} />
        //     </label>
        // </div>
    )
}   