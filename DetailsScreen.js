import React from 'react';
import { View, Text, Button } from 'react-native';
import FeatureView from './FeatureView'

function DetailsScreen({ navigation, route }) {

    const { item } = route.params
    const keys = Object.keys(item).filter(key => key != 'breed')

    return (
      <View style={{ 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: 10 
      }}>
        <Text style={{ fontSize: 30 }}>{item.breed}</Text>
        {keys.map(key => <FeatureView name={key} value={item[key]} />)}
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => navigation.goBack()}
        />

      </View>
    );
}

export default DetailsScreen