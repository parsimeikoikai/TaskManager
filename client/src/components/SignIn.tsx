
import { useAuth0 } from '@auth0/auth0-react';
export default function SignIn() {
    const { loginWithRedirect } = useAuth0();
    return (
        <div className="max-w-md w-full space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-300">
                <h1 className="font-bold uppercase text-center mt-8 text-lg tracking-wide hidden xl:block">
                    To-do list - Sign In
                </h1>
                <form className="mt-8 space-y-6 items-center">
                  
                    <div className="justify-center">


                        <button
                            className="btn"
                            onClick={() => loginWithRedirect()}
                        >
                            Log in
                        </button>
                    </div>
                    <div className="flex items-center justify-between">

                    
                    </div>
                </form>
            </div>
        </div>
    );

}