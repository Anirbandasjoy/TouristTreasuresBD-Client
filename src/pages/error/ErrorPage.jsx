import { Link } from 'react-router-dom';
import { AlertTriangle } from 'react-feather'; // Import the Feather Icons component
import { Helmet } from 'react-helmet';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <Helmet>
                <title>Erro | Tour sport</title>
            </Helmet>
            <AlertTriangle size={64} color="#FF6347" className="mb-6" />
            <h1 className="text-4xl font-bold text-red-500 mb-2">Oops! Something went wrong.</h1>
            <p className="text-gray-600 mb-6">The page you are looking for could not be found.</p>
            <Link
                to="/"
                className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-600"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default ErrorPage;
