import React, { useEffect } from 'react';

const styles = {
    sandbox: {
        width: "100%",
        height:"500px",
        border:0,
        overflow:"hidden"
    }
}

const HomePage: React.FC = () => {
    useEffect(() => {
        // get(`${API_URL}/`).then((data:any) => {})
    }, []);
 
    return (
    <div>
        Task sandbox
        <iframe
          src="https://codesandbox.io/embed/new?codemirror=1&highlights=6,7,8,9"
            style={styles.sandbox}
              allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts">
        </iframe>
    </div>   
    );
}

export default HomePage;