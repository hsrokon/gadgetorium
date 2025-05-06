import { Link, useRouteError } from "react-router-dom";
import { PiSmileySadThin } from "react-icons/pi";


const ErrorPage = () => {

    const error = useRouteError();
    console.log(error);
    

    return (
        <div className="flex flex-col items-center justify-center gap-2 min-h-screen">
            <h2 className="text-2xl font-semibold">{error.data}</h2>
            <h2 className="text-2xl font-semibold text-purple-600">{error.status}</h2>
            <h2 className="text-2xl font-semibold">{error.statusText}</h2>
            <PiSmileySadThin className="text-7xl text-purple-600" />
            <Link to={'/'}><button className="cursor-pointer underline hover:text-purple-600">Go back to homepage</button></Link>
            
        </div>
    );
};

export default ErrorPage;