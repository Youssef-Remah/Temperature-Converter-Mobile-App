import FormField from "./Components/FormField";
import MainTitle from "./Components/MainTitle";

import { NativeBaseProvider } from "native-base";

export default function MainApp() {
    return (
  
        <NativeBaseProvider>

            <MainTitle></MainTitle>

            <FormField></FormField>

        </NativeBaseProvider>

      
    );
  }