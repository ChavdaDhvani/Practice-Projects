import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong!</h1>
      <p>{error?.message || error?.statusText || "An unknown error occurred."}</p>
    </div>
  );
}
