import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Sharde/Loading';
import auth from './firebase.init';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const [signInWithGoogle, user, loading] = useSignInWithGoogle(auth);

    const onSubmit = data => {
        console.log(data);
    }
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || '/';

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, from, navigate])


    if (loading) {
        return <Loading />;
    }
    return (
        <div className='flex h-screen justify-center items-center'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="text-center font-bold text-xl">Login In Your Account</h2>
                        <input type="text" placeholder="Email" class="input input-bordered w-full max-w-xs"  {...register("email", { required: true })} />
                        <input type="password" placeholder="Password" class="input input-bordered w-full max-w-xs" {...register("password", { required: true })} />

                        <div class="card-actions justify-center">
                            <button type="submit" class="btn btn-primary w-full max-w-xs">Login</button>
                        </div>
                        <div class="divider">OR</div>
                        <div class="card-actions justify-center">
                        <button type="submit" class="btn btn-primary w-full max-w-xs" onClick={() => signInWithGoogle()}>Google Login</button>
                        </div>

                    </div>
                </div>

            </form>
        </div>
    );
};

export default Login;