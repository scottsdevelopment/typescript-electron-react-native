import React from 'react';
import {
    Text,
    TextInput,
    View,
  } from 'react-native';
  
interface PropsType { 
    entityClass: Function;
}
interface StateType {
    repository: Repository<any>;
}

import { getRepository, Repository } from 'typeorm';
import { isElectron } from '../services/Platform';
import { styles } from '../styles/stylesheet';

// import { Repository } from 'typeorm';
// import { isElectron } from '../services/Platform';
// import { ReactNativeDatabase } from '../services/ReactNativeDatabase';

export class EntityList extends React.Component<PropsType,
    StateType> {
    state: StateType;
    props: PropsType;

    constructor(props: PropsType) {
        super(props);
        this.props = props;
        if (isElectron()) {
           this.state = {
               repository: window.TypeOrm.getRepository((this.props.entityClass as Function).name)
           }
        } else {
           this.state = {
               repository: getRepository(this.props.entityClass)
           }
        }
        console.log(this.state.repository.metadata.columns)
    }

    render() {
        const columns = this.state.repository.metadata.columns.map((column) => {
            if (column.isGenerated) {
                return ( <View key={column.databaseName}></View> );
            }
            return (
                <View key={column.databaseName}>
                    <Text>
                        { column.databaseName } { (column.type as Function).name }:
                    </Text>
                    <TextInput style={styles.textInput}/>  
                </View>
            )
        });
        return (
            <View>
                <Text>
                    { (this.props.entityClass as Function).name },  Columns: {this.state.repository.metadata.columns.length}
                </Text>
                {
                    columns
                }
            </View>
        )
    }
}
