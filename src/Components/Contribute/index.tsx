import React from "react";
import { Typography, Divider } from 'antd';

class Contribute extends React.Component<{}, {}> {
    render() {
        const { Title, Paragraph, Text } = Typography;

        return (
            <Typography>
                <Title>Contribute </Title>
                <Paragraph>
                    I know I dont have everybody here and you sure must have someone who has impacted
                    tech life, do not hesitate to add them. Contribute <a href="https://github.com/tesh254/p2f">here</a>
                </Paragraph>
            </Typography>
        )
    }
}

export default Contribute;
