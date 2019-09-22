import React from 'react';
import { Text } from 'react-native';
import Routing from '../../services/Routing';
import { isReactNative } from '../../services/Platform';
// import { styles } from '../../styles/Stylesheet';
const { Link: NativeLink } = Routing;

interface LinkProps {
    to: string,
    children: string,
    style?: StyleSheet|object,
    textStyle?: StyleSheet|object
}

export class Link extends React.Component<LinkProps, {}> {
    constructor(props: LinkProps) {
        super(props);
    }

    render() {
        return (
            <NativeLink
                to={this.props.to}
                style={isReactNative && this.props.style ? {} : this.props.style}
            >
                <Text>{this.props.children}</Text>
            </NativeLink>
        )
    }
};

export default Link;