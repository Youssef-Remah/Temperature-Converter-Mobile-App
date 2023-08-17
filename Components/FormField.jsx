import { Heading, Input } from 'native-base';
import { Button, StyleSheet, View, Text } from 'react-native';
import { Select, FormControl, Badge, Alert, IconButton, CloseIcon} from "native-base";
import { useEffect, useState } from 'react';



function FormField() {

    const [degreeValue, setDegreeValue] = useState("");

    const [temperatureType, settemperatureType] = useState("");

    const [conversionResult, setConversionResult] = useState("");

    const [showAlert, setShowAlert] = useState(false);


    const handleDegreeChange = (degree) => {

        /*
            Event Handler for changing the text entered in the Degree Field

            Params:

            degree: (string) represents the temperature degree value
        */

        setDegreeValue(degree);
    };

    const handleSelectTemperatureChange = (tempType) => {

        /*
            Event Handler for storing the temperature type the user chooses

            Params:

            tempType: (string) represents the temperature type
        */

        settemperatureType(tempType);

    };

    const calculateConversion = () => {

        if (temperatureType === "fahrenheit") {
            setConversionResult(((degreeValue - 32) * 5 / 9));
        }

        else {
            setConversionResult(((degreeValue * 9 / 5) + 32));
        }

    };

    const handleConvertButtonClicking = () => {

        if (temperatureType === "" || (!degreeValue.match(/^[0-9]+$/)))
            setShowAlert(true);

        else {
            setShowAlert(false);

            calculateConversion();
        }

    };


    return (

        <>

            {/* Input Field */}

            <View style={style.container}>

                <Input variant="underlined" placeholder="Degree" size='xl' maxWidth='1/2' value={degreeValue} onChangeText={handleDegreeChange} />

            </View>

            {/* Select Field */}

            <View style={style.container}>

                <FormControl>

                    <Select fontSize='md' minWidth="200" placeholder="Choose Temperature Type" onValueChange={(tempType) => handleSelectTemperatureChange(tempType)}>

                        <Select.Item label='Fahrenheit' value='fahrenheit'/>

                        <Select.Item label='Celsius' value='celsius' />

                    </Select>

                </FormControl>
            </View>

            {/* Display Area */}

            <View style={style.container}>

                <Heading size="sm">Result</Heading>

                <Badge minWidth="1/2" minHeight="16">

                    <Text style={{fontSize:18}}>

                        {(temperatureType === 'fahrenheit') ? conversionResult + ' (°C)' : conversionResult + ' (°F)'}

                    </Text>
                    
                </Badge>

            </View>

            {/* Convert Button */}

            <View style={style.container}>

                <Button title='Convert' onPress={handleConvertButtonClicking}></Button>

            </View>

            {
                showAlert &&

                <Alert maxW="full" status='error'>

                    <Alert.Icon />

                    <Text>Please Choose a temperature type{'\n\n'}or enter a valid degree value</Text>

                    <IconButton variant="unstyled" _focus={{
                        borderWidth: 0
                    }} icon={<CloseIcon size="4" />} _icon={{
                        color: "coolGray.600"
                    }} onPress={() => setShowAlert(false)} />

                </Alert>
            }

        </>


    );
}

const style = StyleSheet.create({

    container: {

        margin: 20

    }

});

export default FormField;
