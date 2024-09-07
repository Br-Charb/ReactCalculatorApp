import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Button } from 'react-native';
import {useState} from 'react';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';



let x = {value1 : '', value2 : '', action : ''};
const Chunk = ({text1, text2, text3, text4}) => {
  return (
    <View style={styles.viewRows}>
      <Text style={styles.textSpacing} onPress={() => applyAction(x, 'c')}>{text1}</Text>
      <Text style={styles.textSpacing} onPress={() => applyAction(x, "")}>{text2}</Text>
      <Text style={styles.textSpacing} onPress={() => applyAction(x, "^")}>{text3}</Text>
      <Text style={styles.textSpacing} onPress={() => applyAction(x, "/")}>{text4}</Text>
      <StatusBar style="auto" />
    </View>
  )
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
function applyAction(x, action){
if (action == "c"){
  x.value1 = '0';
  x.value2 = '';
  x.action = '';
} else{
  x.action = action;
}
console.log(x)
changeText();

}
function numAction(x, action){
  x.value1 = Number(x.value1);
  x.value2 = Number(x.value2);
  if (action == "±"){
    if (x.action == ''){  
      x.value1 *= -1;
    }else{
      x.value2 *= -1;
    }
  } else if(action == "-"){
    x.value1 -= Number(x.value2);
    x.action = ""; x.value2 = "";
  } else if(action == "+"){
    x.value1 += Number(x.value2);
    x.action = ""; x.value2 = "";
  } else if(action == "x"){
    x.value1 *= x.value2;
    x.action = ""; x.value2 = "";
  } else if (action == "^"){
    x.value1 = x.value1 ** x.value2;
    x.action = ""; x.value2 = "";
  } else{
    x.value1 /= x.value2;
    x.action = ""; x.value2 = "";
  }
  changeText();
  console.log(x)
}
const [r, setText] = useState('0');
const changeText = () => {
  setText(String(x.value1) + String(x.action) + String(x.value2))
}
export default function App() {
  console.log("App Start")
  return (
    <SafeAreaView>
      {/* <ScrollView> */}
        <View style={styles.viewRows}>
          <Text style={styles.textSpacing}>Benjamin's Calc</Text>
        </View>
        <View style={styles.viewRows}>
          <Text style={styles.textSpacing}>{r}</Text>
        </View>
          <Chunk text1="c" text2="⌫" text3="^x" text4="/"></Chunk>
        {/* <View style={styles.viewRows}>
          <Text style={styles.textSpacing} onPress={() => applyAction(x, 'c')}>c</Text>
          <Text style={styles.textSpacing} onPress={() => applyAction(x, "")}>⌫</Text>
          <Text style={styles.textSpacing} onPress={() => applyAction(x, "^")}>^x</Text>
          <Text style={styles.textSpacing} onPress={() => applyAction(x, "/")}>/</Text>
          <StatusBar style="auto" />
        </View> */}
        <View style={styles.viewRows}>
          <Text style={styles.textSpacing} onPress={() => addTo(x, "7")}>7</Text>
          <Text style={styles.textSpacing} onPress={() => addTo(x, "8")}>8</Text>
          <Text style={styles.textSpacing} onPress={() => addTo(x, "9")}>9</Text>
          <Text style={styles.textSpacing} onPress={() => applyAction(x, "x")}>x</Text>
          <StatusBar style="auto" />
        </View>
        <View style={styles.viewRows}>
          <Text style={styles.textSpacing} onPress={() => addTo(x, "4")}>4</Text>
          <Text style={styles.textSpacing} onPress={() => addTo(x, "5")}>5</Text>
          <Text style={styles.textSpacing} onPress={() => addTo(x, "6")}>6</Text>
          <Text style={styles.textSpacing} onPress={() => applyAction(x, "-")}>-</Text>
          <StatusBar style="auto" />
        </View>
        <View style={styles.viewRows}>
          <Text style={styles.textSpacing} onPress={() => addTo(x, "1")}>1</Text>
          <Text style={styles.textSpacing} onPress={() => addTo(x, "2")}>2</Text>
          <Text style={styles.textSpacing} onPress={() => addTo(x, "3")}>3</Text>
          <Text style={styles.textSpacing} onPress={() => applyAction(x, "+")}>+</Text>
          <StatusBar style="auto" />
        </View>
        <View style={styles.viewRows}>
          <Text style={styles.textSpacing} onPress={() => numAction(x, "±")}>±</Text>
          <Text style={styles.textSpacing} onPress={() => addTo(x, "0")}>0</Text>
          <Text style={styles.textSpacing} onPress={() => addTo(x, ".")}>.</Text>
          <Text style={styles.textSpacing} onPress={() => numAction(x, x.action)}>=</Text>
          <StatusBar style="auto" />
        </View>
      {/* </ScrollView> */}
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
