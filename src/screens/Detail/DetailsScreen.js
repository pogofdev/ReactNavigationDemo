import React from "react";
import {Button, Text, View} from "react-native";

export default class DetailsScreen extends React.Component {
    static navigationOptions = {
        title: 'Details'
    };

    render() {
        const {itemId, otherParam, param = 'khong co gi'} = this.props.navigation.state.params;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Text>Passed prop 1: {JSON.stringify(itemId)}</Text>
                <Text>Passed prop 2: {JSON.stringify(otherParam)}</Text>
                <Text>Passed prop 3: {JSON.stringify(param)}</Text>
                <Button
                    title="Go to Details... again"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}