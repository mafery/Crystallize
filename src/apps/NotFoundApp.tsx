import { Button, Result } from 'antd';
import React from 'react';

function NotFoundApp(props: any) {
    const handleClick = () => {
        location.replace("http://localhost:3000")
    }
    return (
        <Result 
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist"
            extra={<Button type="primary" onClick={handleClick}>回到主页</Button>}
        />
    );
}

export default NotFoundApp;