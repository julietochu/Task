import React, {FC} from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Tasks } from "../screens/index";

const Stack = createNativeStackNavigator()

const AppStack: FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Task" component={Tasks} />
        </Stack.Navigator>
    )
}

export default AppStack