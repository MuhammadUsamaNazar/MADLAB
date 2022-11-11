import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const DATA=[
  {id:1, name:"ABC", contact:"0347687954"},
  {id:2, name:"XYZ", contact:"03315861872"},
  {id:3, name:"PQR", contact:"0310129867"},
  {id:4, name:"RWS", contact:"03156798134"},
]
const onPressitem=(item)=>{
    setmodvis(true);
    setnamein(item.name)
    setcontactin(item.contact)
    setedititem(item.id)
  }

  const renderitem=({item,index})=>{
    return(
      <TouchableOpacity
      style={styles.item}
      onLongPress={()=> onPressitem(item)}
      >
        <Text style={styles.text}>{item.name}</Text>

      </TouchableOpacity>
    )

  }
   const handleEditItem=(editit)=>{
    const newData=data.map(item=>{
      if(item.id==editit){
        item.name=namein;
        item.contact=Contactin;
        return item;
      }
      return item;
    })
    setdata(newData);
    setrender(!isrender);

  }
  const onPressSavededit=()=>{
    handleEditItem(edititem);
    setmodvis(false);
  }

export default function App() {
  return (
    < SafeAreaView style={styles.container}>
      <View style={{marginTop:60}}></View>
      <FlatList
      data={data}
      keyExtractor={(item)=>{item.id.toString()}}
      renderItem={renderitem}
      extraData={isrender}
      />
      <Modal
      animationType='fade'
      visible={ismodvis}
      onRequestClose={()=> setmodvis(false)}
      >
        <View style={styles.modelview}>
          <Text style={styles.text1}>Update Data</Text>
          
          
          <TextInput style={styles.textinput}
          onChangeText={(name1)=>{setnamein(name1)}}
          defaultValue={namein}
          editable={true}
          multiline={false}
          maxLength={200}
          />
           <TextInput style={styles.textinput}
          onChangeText={(name2)=>{setcontactin(name2)}}
          defaultValue={Contactin}
          editable={true}
          multiline={false}
          maxLength={200}
          />
          <TouchableOpacity
          onPress={()=> onPressSavededit()}
          style={styles.touchablesave}
          >
            <Text style={styles.text2}>Save</Text>
          </TouchableOpacity>

        </View>
      </Modal>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
  
  },

  item:{
    borderBottomWidth:1,
    borgerbottomcolor:'grey',
    alignItems:'flex-start'
    
  },
  text:{
    marginVertical:25,
    fontSize:20,
    fontWeight:'bold',
    marginLeft:30,
  },
  text2:{
    marginVertical:25,
    fontSize:20,
    fontWeight:'bold',
    
  },
  text1:{
    marginBottom:40,
    fontSize:30,
    fontWeight:'bold',
    
  },
  textinput:{
    width:'80%',
    height:70,
    paddingLeft:20,
    borderColor:'grey',
    borderWidth:1,
    fontSize:20
  },
  modelview:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  touchablesave:{
    backgroundColor:'orange',
    borderRadius:40,
    paddingHorizontal:60,
    alignItems:'center',
    textAlign:'center',
    marginTop:30
  }
});
