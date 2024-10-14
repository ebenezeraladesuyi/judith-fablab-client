
import email from "../../assets/images/authImages/email-verify.png";


const SignupVerify = () => {


    return (
        <div className="w-full min-h-[100vh] flex justify-center items-center">
            <div className="w-[85%] md:w-[60%] lg:w-[40%] flex flex-col justify-center items-center gap-6">
                <img className="w-[150px] md:w-[200px]" src={email} alt="" />

                <h1 className="font-bold text-[18px] md:text-[22px] text-[#00285e]">Verify your Email</h1>

                <h2 className="text-[12px] md:text-[14px] text-[#00285e] text-center">
                    To complete the registration process and start using all the features of our service, please check your email inbox for a verification message. Click on the link provided in the email to verify your account. 
                    If you don't see the email within a few minutes, please check your spam or junk folder. 
                </h2>

                <button className="w-[80%] rounded-[6px] bg-[#00285e] h-[42px] text-white border-none">Resend Email</button>
            </div>
        </div>
    )
}

export default SignupVerify;