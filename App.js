import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Button } from 'react-native';
import {useState} from 'react';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';



let x = {value1 : '', value2 : '', action : ''};
const Chunk = ({text1, text2, text3, text4, action1, action2, action3, action4}) => {
  return (
    <View style={styles.viewRows}>
      <CButton text = {text1} action = {action1}></CButton>
      <CButton text = {text2} action = {action2}></CButton>
      <CButton text = {text3} action = {action3}></CButton>
      <CButton text = {text4} action = {action4}></CButton>
    </View>
  )
}
const CButton = ({text, action}) => {
  return(
    <Text style={styles.textSpacing} onPress={() => action(x, text)}>{text}</Text>
  )
}
export default function App() {
  const [r, setText] = useState('0');
  const changeText = () => {
    setText(String(x.value1) + String(x.action) + String(x.value2))
  }
  function del(x, action){
    if (x.value2 == ''){
      if (x.action == ''){x.value1 = x.value1.substring(0, x.value1.length - 1);} 
      else{x.action = '';}
    } else {x.value2 = x.value2.substring(0, x.value2.length - 1);}
    changeText();
    console.log(x);
  }
  function addTo(x, num){
    if (x.action == ''){
      if(x.value1 == '0' && num != "."){
        x.value1 = String(num);
      } else{
        x.value1 = String(x.value1) + num;
      }
    }else{
      x.value2 = String(x.value2) + num;
    }
    changeText();
    console.log(x);
  }
  function reset(x, action){
    x = {value1 : '0', value2 : '', action : ''};
    changeText();
    console.log(x);
  }
  function applyAction(x, action){
    x.action = action;
    changeText();
    console.log(x)
  }
  function numAction(x, action){
    x.value1 = Number(x.value1);
    if (x.action != '' && x.value2 != '' && action != "±"){
      if (action == "±"){
        if (x.action == ''){  
          x.value1 *= -1;
        }else{
          x.value2 = Number(x.value2);
          x.value2 *= -1;
        }
      } else if(x.action == "-"){
        x.value1 -= Number(x.value2);
        x.action = ""; x.value2 = "";
      } else if(x.action == "+"){
        x.value1 += Number(x.value2);
        x.action = ""; x.value2 = "";
      } else if(x.action == "x"){
        x.value1 *= x.value2;
        x.action = ""; x.value2 = "";
      } else if (x.action == "^"){
        x.value1 = x.value1 ** x.value2;
        x.action = ""; x.value2 = "";
      } else{
        x.value1 /= x.value2;
        x.action = ""; x.value2 = "";
      }
      changeText();
      console.log(x)
    }
  }
  console.log("App Start")
return (
    <SafeAreaView>
        <View style={styles.viewRows}>
          <Text style={styles.textSpacing}>Benjamin's Calc</Text>
        </View>
        <View style={styles.viewRows}>
          <Text style={styles.textSpacing}>{r}</Text>
        </View>
        <Chunk text1='c' text2='⌫' text3='^' text4='/' action1 = {reset} action2 = {del} action3 = {applyAction} action4 = {applyAction}></Chunk>
        <Chunk text1='7' text2='8' text3='9' text4='x' action1 = {addTo} action2 = {addTo} action3 = {addTo} action4 = {applyAction}></Chunk>
        <Chunk text1='4' text2='5' text3='6' text4='-' action1 = {addTo} action2 = {addTo} action3 = {addTo} action4 = {applyAction}></Chunk>
        <Chunk text1='1' text2='2' text3='3' text4='+' action1 = {addTo} action2 = {addTo} action3 = {addTo} action4 = {applyAction}></Chunk>
        <Chunk text1='±' text2='0' text3='.' text4='=' action1 = {numAction} action2 = {addTo} action3 = {addTo} action4 = {numAction}></Chunk>
        <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'white ',
    justifyContent: 'center',
    paddingBottom: 100,
  },
  viewRows: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white ',
    justifyContent: 'center',
  },
  textSpacing: {
    flex: 1,
    fontSize: scale(50),
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 0,
    backgroundColor: 'grey',
    textAlign: 'center',
  }
});
