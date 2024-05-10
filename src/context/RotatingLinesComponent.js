import React, {useEffect} from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

const RotatingLinesComponent = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          
          navigate('/login');
        }, 500);

        return () => {
            // Clear the timeout to prevent navigation if the component unmounts before 2 seconds
            clearTimeout(timeoutId);
          };
        }, [navigate]);

        return (
            <div className="flex items-center justify-center h-screen">
        <RotatingLines
          visible={true}
          height="96"
          width="96"
          color="brown"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
        )
}

export default RotatingLinesComponent;