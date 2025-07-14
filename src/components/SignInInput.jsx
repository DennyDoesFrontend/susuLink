export default function SignInInput({icon, placeholder}) {
    return (
        <div className="inline-flex items-center gap-2 border py-2 px-2 rounded-md bg-[#EBEFF450]">
            <i className={`${icon} text-slate-400`}></i>
            <input type="email" placeholder={placeholder} className="bg-[#EBEFF450] outline-none"/>
        </div>
    )
}