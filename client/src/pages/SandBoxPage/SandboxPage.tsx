
import React, { useEffect } from 'react';

const styles = {
    sandbox: {
        width: "100%",
        height:"500px",
        border:0,
        overflow:"hidden"
    }
}

const SandboxPage: React.FC = () => {
    useEffect(() => {
        // get(`${API_URL}/`).then((data:any) => {})
    }, []);
 
    return (
    <div>
        Task sandbox       
        <iframe src="https://trinket.io/embed/python3/eb71a51e05" width="100%" height="356" ></iframe>

    </div>   
    );
}

export default SandboxPage;