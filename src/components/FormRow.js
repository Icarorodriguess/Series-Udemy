import React from 'react';

import { View, StyleSheet } from 'react-native';

const FormRow = props => {
    const { children, first, last} = props;
    return (
        <View style={[
                styles.container,
                first ? styles.first : null, 
                last ? styles.last : null]}
            >
            {children}
        </View>
)}
const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderWidth: 1,
        backgroundColor: '#fff',
        marginTop: 5,
        marginBottom: 5,
        elevation: 1
    },
    first: {
        paddingTop: 10
    },
    last: {
        paddingBottom: 10
    },
});

export default FormRow;