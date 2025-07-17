export default function SignInType({imageLink, text}) {
    return (
        <button className="border flex-1 flex items-center justify-center gap-2 py-[12px] rounded-md shadow-sm">
            <img className="w-6" src={imageLink} alt="Icon" />
            <p className="text-md font-semibold">{text}</p>
        </button>
    )
}