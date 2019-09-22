import React from 'react';
import {
    Text,
    TextInput,
    View,
    TouchableOpacity,
  } from 'react-native';
  
interface PropsType { 
    entityClass: Function
}
interface StateType {
    repository: Repository<any>,
    genericProps: {[key: string]: any}
}

import { getRepository, Repository } from 'typeorm';
import { isElectron } from '../services/Platform';
import { styles } from '../styles/Stylesheet';

export class EntityList extends React.Component<PropsType,
    StateType> {
    state: StateType;
    props: PropsType;

    constructor(props: PropsType) {
        super(props);
        this.props = props;
        let repository = new Repository();
        if (isElectron) {
            repository = window.TypeOrm.getRepository((this.props.entityClass as Function).name);
        } else {
            repository = getRepository(this.props.entityClass);
        }
        this.state = {
            repository: repository,
            genericProps: {},
        }
    }
    handleSubmit() {
        try {
            const generic = this.state.repository.create(this.state.genericProps);
            this.state.repository.save(generic);
        } catch(e) {
        }
    }
    handleChange(property: string, value: string) {
        let newGenericProps = this.state.genericProps;
        newGenericProps[property] = value;
        this.setState({ genericProps: newGenericProps });
    }
    render() {
        const entityName = (this.props.entityClass as Function).name;
        const columns = this.state.repository.metadata.columns.map((column) => {
            if (column.isGenerated) {
                return ( <View key={column.databaseName}></View> );
            }
            const type = (column.type as Function).name;
            let input = null;
            switch (column.type) {
                case String:
                default:
                    const columnLength: number = parseInt(column.length, 10);
                    let multiLine = false;
                    let numberOfLines: number = 1;
                    if (columnLength > 255) {
                        multiLine = true;
                        numberOfLines = Math.round(columnLength / 100);
                    }
                    if (numberOfLines > 5) {
                        numberOfLines = 5;
                    }
                    input = 
                    <TextInput
                     onChangeText={(value: string) => { this.handleChange(column.propertyName, value)}}
                     multiline={multiLine}
                     numberOfLines={numberOfLines}
                     style={styles.textInput}
                    />;
                    break;
            }
            return (
                <View key={column.databaseName}>
                    <Text style={styles.baseText}>
                        { column.databaseName } { type }:
                    </Text>
                    { input }
                </View>
            )
        });
        return (
            <View>
                <Text style={styles.baseText}>
                    { entityName },  Columns: {this.state.repository.metadata.columns.length}
                </Text>
                {
                    columns
                }
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.handleSubmit.bind(this)}
                >
                    <Text style={styles.buttonText}>Save {entityName}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
