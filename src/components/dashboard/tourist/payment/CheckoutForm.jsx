/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { useContext, useEffect, useState } from "react";
import useAxios from "../../../../hooks/useAxios";
import { AuthContext } from "../../../../context/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const CheckoutForm = ({ state }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [err, setErr] = useState('')
    const [clintSecret, setClintSecret] = useState("")
    const { axiosSecure } = useAxios()
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    useEffect(() => {
        axiosSecure.post("/create-payment-intent", { price: Number(state?.price) })
            .then(({ data }) => {
                console.log(data)
                setClintSecret(data.clientSecret)
            })
    }, [axiosSecure, state?.price])
    console.log(clintSecret)
    const handleSubmit = async (event) => {
        event.preventDefault()
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setErr(error.message)
            return;
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setErr('')

        }

        const { paymentIntent, error: confrimError } = await stripe.confirmCardPayment(clintSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonimus',
                    name: user?.displayName || 'anonimus'
                }
            }
        })
        if (confrimError) {
            console.log('confrim erro')
        } else {
            console.log('payment intent', paymentIntent)
            if (paymentIntent.status === "succeeded") {
                console.log('transection id ', paymentIntent.id)
                toast.success("Payment Successfull", paymentIntent.id)
                axiosSecure.patch(`/update-paymentStatus/${state?._id}?paymentStatus=paid`)
                    .then(({ data }) => {
                        console.log(data)
                        navigate("/dashboard/my-bookings")
                    })
            }
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="text-right mt-10 py-2 px-8 bg-blue-400 text-white font-bold" type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            <p className="text-red-400 text-left mt-5">{err && err}</p>
        </div>
    )
}

export default CheckoutForm