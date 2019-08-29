import React from "react";
import { Typography, Divider } from 'antd';

class About extends React.Component<{}, {}> {
    render() {
        const { Title, Paragraph, Text } = Typography;

        return (
            <Typography>
                <Title>About <b>P2F</b></Title>
                <Paragraph>
                    <strong>P2F</strong>(People to Follow) is a website that contains a list
                    a list of people on Twitter who can fill your timeline with productive
                    tweets. They are open to discussions and questions.
                    These people can impact your tech and maker life really positively.
                </Paragraph>
                <Paragraph>
                    <Title level={2}>Why?</Title>
                    People such as @chrisooncode and @alligator, have improved my software development
                    life by a mile. So I made this website to help others who are devs just like me.
                </Paragraph>
                <Paragraph>
                    <Title level={2}>Thanks</Title>
                    It would have taken me a while to get this list but thanks to
                    <a href="https://twitter.com/hacksultan"> @hacksultan </a> 
                    who made an <a href="https://scotch.io/bar-talk/the-top-tech-people-to-follow-on-twitter-for-your-stack">
                    article </a> containing a list of people.
                </Paragraph>
            </Typography>
        )
    }
}

export default About;
