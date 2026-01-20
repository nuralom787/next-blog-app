"use client";

import { useEffect } from "react";

const error = ({ error, reset }: { error: Error & { digest?: string }, reset: () => void }) => {
    useEffect(() => {
        console.log(error);
    }, []);


    return (
        <div>
            <h1>Somethings Wants Wrong!!</h1>
            <button onClick={() => reset()}>Try Again</button>
        </div>
    );
};

export default error;