export const Avatar = ({ src }) => {

    return (
        <div className="inline-block w-full h-full rounded-full overflow-hidden">
            {src ? <img className="w-full h-full" src={src} alt="User avatar" /> : null}
        </div>
    )
}
