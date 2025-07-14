export default function SignInType({imageLink, text}) {
    return (
        <button className="py-3 pe-12 ps-12 border-[0.8px] inline-flex items-center gap-2 rounded-md shadow-md">
            <img className="w-8" src={imageLink} alt="Icon" />
            <p className="text-xl font-semibold">{text}</p>
        </button>
    )
}