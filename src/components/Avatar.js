export const Avatar = ({ src }) => {

    return (
        <div className="inline-block w-12 h-12 rounded-full overflow-hidden">
            {src ? <img className="w-full h-full" src={src} alt="User avatar" /> : null}
        </div>
    )
}
