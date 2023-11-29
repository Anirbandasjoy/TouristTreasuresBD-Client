import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe('pk_test_51OF93jFkH4xZfhGO7fFl9ab0enYrXF3LhYldRRgacPJpLayBFgCc2yK8EEtKsKEH4IrNKA0PxwlapkzBZDjIEYwQ00jsCsVipf');

const Payment = () => {
    const { state } = useLocation()

    return (
        <div className="max-w-2xl flex items-center bg-blue-100 mx-auto h-[calc(100ch-300px)] justify-center">
            <div className="w-96 text-center  mx-auto">
                <h1 className="text-2xl font-medium mb-14 text-gray-500">Payment</h1>
                <Elements stripe={stripePromise}>
                    <CheckoutForm state={state} />
                </Elements>
            </div>
        </div>
    )
}

export default Payment