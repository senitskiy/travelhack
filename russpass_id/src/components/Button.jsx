export const Button = (props) => {
    const { type, label } = props

    return (
        <div>
            <button type={type}>{label}</button>
        </div>
    )
}