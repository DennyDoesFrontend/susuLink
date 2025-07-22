export default function SignInInput({icon, placeholder, type}) {
    return (
        <div className="inline-flex items-center gap-2 border py-[5px] px-2 rounded-md w-full">
            <i className={`${icon} text-slate-400`}></i>
            <input type={type} placeholder={placeholder} className="outline-none flex-1 py-2"/>
        </div>
    )
}