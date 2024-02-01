import { useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const errorGet = useRouteError();
  
    return (
      <div className="flex flex-col items-center justify-center h-lvh p-5">
        <h1 className="text-red-400">Oops!</h1>
        <p className="mt-4 mb-4">Sorry, an unexpected error has occurred.</p>
        <p className="mt-4 mb-4">
          <i className="text-gray-500">{errorGet.statusText || errorGet.message}</i>
        </p>
      </div>
  )
}

export default ErrorPage