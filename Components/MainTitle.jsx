import React from 'react';
import titleStyle from '../Styles/MainTitleStyle';
import { View } from 'react-native';

import { Heading } from 'native-base';



function MainTitle() {
    return (

        <>
            {/* Main Screen Title */}

            <View style={titleStyle.container}>

                <Heading size='lg'>Temperature Converter</Heading>

            </View>

        </>
    );
}



export default MainTitle;