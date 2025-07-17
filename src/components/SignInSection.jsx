import Button from "./Button";
import Logo from "./logo";
import SignInInput from "./SignInInput";
import SignInType from "./SignInType";

export default function SignInSection() {
    return (
        <div className="flex-1 relative">
            <div className="flex flex-col gap-8 absolute max-w-[50%] w-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <Logo />
                <div className="flex flex-col gap-2">
                    <h2 className="text-3xl font-semibold text-clBlack">Log in to your Account</h2>
                    <p className="text-base text-slate-400">Welcome back! Select method to log in:</p>
                </div>
                <div className="flex items-center justify-between gap-6">
                    <SignInType text="Google" imageLink="/google-icon.png" />
                    <SignInType text="Facebook" imageLink="/facebook-icon.png" />
                </div>
                <div className="flex items-center gap-8 w-full">
                    <div className="h-[2px] rounded-md w-[30px] bg-slate-200 flex-1"></div>
                    <p className="text-sm text-slate-400">or continue with email</p>
                    <div className="h-[2px] rounded-md w-[30px] bg-slate-200 flex-1"></div>
                </div>
                <div className="flex flex-col items-start w-full gap-4">
                    <SignInInput icon="ri-mail-line" placeholder="Email"/>
                    <SignInInput icon="ri-lock-line" placeholder="Password"/>
                </div>
                <Button text="Log In" />
            </div>
        </div>
    )
}