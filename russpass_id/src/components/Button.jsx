import './button.scss'

export const Button = (props) => {
    const { type, label, theme } = props

    return (
        <div>
            <button type={type} className={`py-3.5 px-8 rounded-lg font-medium focus:outline-none ${theme}`}>{label}</button>
        </div>
    )
}