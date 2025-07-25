import FindAPerson from "./FindAPerson"

export default function SlideShow() {
    return (
        <div className="w-[80%] h-[80%] rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-gradient-to-r from-clBlue to-blue-600 flex items-end">
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <FindAPerson />
            </div>
            <div className="text-center mx-auto">
                <h2 className="text-clWhite font-semibold text-2xl">Connect with every customer</h2>
                <p className="text-clWhite text-md">Everything you need about your customers easily summarised and customised.</p>
            </div>
        </div>
    )
}