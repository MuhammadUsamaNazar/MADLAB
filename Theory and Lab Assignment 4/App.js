import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Prayers from './Components/Prayers';
import CalendarPicker from 'react-native-calendar-picker';

import {
  ScrollView,
  Button,
  View  } from "react-native";
export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    axois.get('http://10.0.2.2:8000/api')
     .then((response) => response.data)
      .then((json) => setData(json)) 
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <ScrollView>
    <View style={{
        textAlign: 'center',
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: 'black',
        elevation:30,
        shadowOffset:{height:1,width:1}}}>
        <CalendarPicker maxDate={new Date()} onDateChange={date => handleDatechange(date)}></CalendarPicker>
      </View>
    <Prayers data={record[selected].data} id={selected} handleChange={(id, value) => handleChange(id, value)} />
    <Button style={{marginTop:40}} title="See Reports" onPress={()=>navigation.navigate("Reports")}></Button>
 </ScrollView> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
