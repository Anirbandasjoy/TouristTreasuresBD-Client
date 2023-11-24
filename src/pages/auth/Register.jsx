import { useContext, useState } from 'react';
import { useFormik } from 'formik'
import { Link, useNavigate, } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import * as yup from 'yup';
import { AuthContext } from '../../context/AuthProvider';
import { updateProfile } from 'firebase/auth';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';
const Register = () => {
    const [showPassword, setShowPassword] = useState(true);
    const [registerError, setRegisterError] = useState("");
    const navigate = useNavigate();

    const { registerUser, googleLoginUser, logOut } = useContext(AuthContext)
    const location = localStorage.getItem("location")

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            name: "",
            image: ""
        },
        validationSchema: yup.object({
            name: yup.string().required(),
            image: yup.string().required(),
            email: yup.string().email().required(),
            password: yup.string().matches(
                /^(?=.*[A-Z])(?=.*[\W_]).{6,}$/,
                "Password at least 6 char and one uppercase one spacial char"
            ).required()
        }),

        onSubmit: (values) => {

            const { email, password, name, image } = values;
            setRegisterError("")

            registerUser(email, password)
                .then((userCredetial) => {
                    updateProfile(userCredetial.user, {
                        displayName: name,
                        photoURL: image,
                        location: "location",
                        shortDescription: "shortDescription",
                    })
                        .then(() => {
                        })
                        .catch((err) => console.log(err.message))

                    toast.success("Your Registation Successfully!")
                    logOut()
                        .then(() => {
                            localStorage.removeItem("location")
                            navigate("/login")
                        })

                })
                .catch((err) => {
                    setRegisterError("Somthing Rong", err);

                })

        }
    });

    const handleGoogleLogin = () => {
        googleLoginUser()
            .then(() => {
                toast.success("Logged in Successfully!")
                navigate(location ? location : "/")
            })
            .catch((err) => [
                console.log(err.message)
            ])
    }


    return (
        <div className='max-w-6xl mx-auto bg-base-300'>
            <Helmet>
                <title>Registation | Tour sport</title>
            </Helmet>
            <div className='flex  justify-center h-screen items-center  px-4 md:px-0'>
                <div className="w-full max-w-lg  p-4  rounded-md  sm:p-6 md:p-8 ">
                    <form className="space-y-4 " onSubmit={formik.handleSubmit}>
                        <h5 className="text-xl font-medium text-gray-900  text-center dark:text-white">Sign Up </h5>
                        <p className='text-center text-sm text-red-600'>
                            {
                                setRegisterError && registerError
                            }
                        </p>

                        <div>

                            <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="your name" onChange={formik.handleChange} value={formik.values.name} />
                            <span className="text-red-600 text-xs">{formik.touched.name ? formik.errors.name : ""}</span>
                        </div>

                        <div>

                            <input type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="your email" onChange={formik.handleChange} value={formik.values.email} />
                            <span className="text-red-600 text-xs">{formik.touched.email ? formik.errors.email : ""}</span>
                        </div>
                        <div>

                            <input type="text" name="image" id="image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="your image url" onChange={formik.handleChange} value={formik.values.image} />
                            <span className="text-red-600 text-xs">{formik.touched.image ? formik.errors.image : ""}</span>
                        </div>
                        <div>

                            <div className='relative'>
                                <input type={showPassword ? "password" : "text"} name="password" id="password" placeholder="your password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " onChange={formik.handleChange} value={formik.values.password} />
                                <span onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <AiOutlineEyeInvisible size={23} className='absolute right-4 bottom-2 cursor-pointer' /> : <AiOutlineEye size={23} className='absolute right-4 bottom-2 cursor-pointer' />
                                    }
                                </span>
                            </div>
                            <span className="text-red-600 text-xs">{formik.touched.password ? formik.errors.password : ""}</span>
                        </div>

                        <div className="flex items-start">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 " required />
                                </div>
                                <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-white">Remember me</label>
                            </div>

                        </div>
                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Register </button>
                        <div className="text-sm font-medium text-gray-500 ">
                            Already Register? please <Link to="/login" className="text-blue-700 hover:underline ">Login</Link>

                        </div>
                        {/* social login start */}
                        <div className='flex flex-col sm:flex-row justify-center items-center '>

                            <button onClick={handleGoogleLogin} type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-xs px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                                <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                                    <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd" />
                                </svg>
                                Sign in with Google
                            </button>

                        </div>



                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register