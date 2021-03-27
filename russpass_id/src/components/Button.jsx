import './button.scss'

export const Button = (props) => {
    const { type, label } = props

    return (
        <div>
            <button type={type} className="py-3.5 px-8 bg-rp-red rounded text-white hover:bg-rp-red-hover focus:rp-red-focus rounded-lg">{label}</button>
        </div>
    )
}