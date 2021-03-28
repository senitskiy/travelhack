
import './UserPan.scss'

export const UserPan = (props) => {
    const { firstname, secondname, email } = props

    return (
        // <div className="border border-rp-input-border rounded-xl mb-2">
        <div className="bg-rp-lighter-gray rounded-xl mb-2">
            <div className="p-3">
                <div className="flex items-center">
                    <div className="rounded rounded-full h-12 w-12 bg-rp-text flex items-center justify-center mr-4">
                        <div className="text-3xl leading-none font-medium text-white">A</div>
                    </div>
                    <div className="leading-snug">{firstname} {secondname}<br></br><span className="text-rp-text-muted text-sm">{email}</span></div>
                </div>
            </div>
        </div>
    )
}