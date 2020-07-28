import React from "react"
import { View, Image, ImageBackground } from "react-native"
import {
  withStyles,
  Text,
  Button,
  CheckBox,
  Radio,
  Toggle,
  Icon,
  Input,
  Datepicker
} from "react-native-ui-kitten"
import Slider from "@react-native-community/slider"

import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export class _Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {
    Input_7: "",
    Input_9: "",
    Datepicker_11: new Date("07/28/2020"),
    Input_13: "",
    CheckBox_42: true,
    Toggle_44: true,
    Radio_46: true
  }

  render = () => (
    <View
      style={{
        width: "100%",
        height: "100%",
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        marginBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        overflow: "visible",
        textAlign: "left",
        verticalAlign: "baseline",
        fontSize: 20,
        color: "#000000",
        backgroundColor: "#ffffff",
        fontStyle: "normal",
        fontWeight: "normal",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "stretch",
        alignContent: "stretch",
        borderColor: "#000000",
        borderStyle: "solid",
        borderWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderRadius: 0,
        backgroundSize: "auto"
      }}
    >
      <Button
        style={{
          width: "100%",
          marginLeft: 0,
          marginRight: 0,
          marginTop: 5,
          marginBottom: 5,
          paddingLeft: 5,
          paddingRight: 5,
          paddingTop: 5,
          paddingBottom: 5,
          overflow: "visible",
          textAlign: "center",
          verticalAlign: "baseline",
          fontSize: 12,
          color: "#000000",
          backgroundColor: "#3366FF",
          fontStyle: "normal",
          fontWeight: "normal",
          borderColor: "#000000",
          borderStyle: "solid",
          borderWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          borderRadius: 0,
          textDecorationLine: "none",
          textTransform: "none",
          lineHeight: 12,
          letterSpacing: 0
        }}
        onPress={() => alert("Pressed!")}
      >
        Press me!
      </Button>
      <Text
        style={{
          marginLeft: 0,
          marginRight: 0,
          marginTop: 5,
          marginBottom: 5,
          paddingLeft: 5,
          paddingRight: 5,
          paddingTop: 5,
          paddingBottom: 5,
          overflow: "visible",
          textAlign: "left",
          verticalAlign: "baseline",
          fontSize: 12,
          color: "#000000",
          backgroundColor: "#ffffff",
          fontStyle: "normal",
          fontWeight: "normal",
          borderColor: "#000000",
          borderStyle: "solid",
          borderWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          borderRadius: 0,
          textDecorationLine: "none",
          textTransform: "none",
          lineHeight: 12,
          letterSpacing: 0
        }}
      >
        Sample text content
      </Text>
      <Input
        placeholder="Sample text input placeholder"
        editable={true}
        textStyle={{ fontSize: 12, color: "#000000", textAlign: "left" }}
        style={{
          width: "100%",
          marginLeft: 0,
          marginRight: 0,
          marginTop: 5,
          marginBottom: 5,
          paddingLeft: 5,
          paddingRight: 5,
          paddingTop: 5,
          paddingBottom: 5,
          overflow: "visible",
          textAlign: "left",
          verticalAlign: "baseline",
          fontSize: 12,
          color: "#000000",
          backgroundColor: "#ffffff",
          fontStyle: "normal",
          fontWeight: "normal",
          borderColor: "#000000",
          borderStyle: "solid",
          borderWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          borderRadius: 0,
          textDecorationLine: "none",
          textTransform: "none",
          lineHeight: 12,
          letterSpacing: 0
        }}
        value={this.state.Input_7}
        onChangeText={nextValue => this.setState({ Input_7: nextValue })}
      />
      <Input
        placeholder="Number Input Placeholder"
        editable={true}
        keyboardType="numeric"
        textStyle={{ fontSize: 12, color: "#000000", textAlign: "left" }}
        style={{
          width: "100%",
          marginLeft: 0,
          marginRight: 0,
          marginTop: 5,
          marginBottom: 5,
          paddingLeft: 5,
          paddingRight: 5,
          paddingTop: 5,
          paddingBottom: 5,
          overflow: "visible",
          textAlign: "left",
          verticalAlign: "baseline",
          fontSize: 12,
          color: "#000000",
          backgroundColor: "#ffffff",
          fontStyle: "normal",
          fontWeight: "normal",
          borderColor: "#000000",
          borderStyle: "solid",
          borderWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          borderRadius: 0,
          textDecorationLine: "none",
          textTransform: "none",
          lineHeight: 12,
          letterSpacing: 0
        }}
        value={this.state.Input_9}
        onChangeText={nextValue => this.setState({ Input_9: nextValue })}
      />
      <Datepicker
        style={{
          width: "100%",
          marginLeft: 0,
          marginRight: 0,
          marginTop: 5,
          marginBottom: 5,
          paddingLeft: 5,
          paddingRight: 5,
          paddingTop: 5,
          paddingBottom: 5,
          overflow: "visible",
          textAlign: "left",
          verticalAlign: "baseline",
          fontSize: 12,
          color: "#000000",
          backgroundColor: "#ffffff",
          fontStyle: "normal",
          fontWeight: "normal",
          borderColor: "#000000",
          borderStyle: "solid",
          borderWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          borderRadius: 0,
          textDecorationLine: "none",
          textTransform: "none",
          lineHeight: 12,
          letterSpacing: 0
        }}
        date={this.state.Datepicker_11}
        onSelect={nextValue => this.setState({ Datepicker_11: nextValue })}
      />
      <Input
        placeholder="Sample text input placeholder"
        editable={true}
        multiline={true}
        textStyle={{
          height: 100,
          fontSize: 12,
          color: "#000000",
          textAlign: "left"
        }}
        style={{
          width: "100%",
          marginLeft: 0,
          marginRight: 0,
          marginTop: 5,
          marginBottom: 5,
          paddingLeft: 5,
          paddingRight: 5,
          paddingTop: 5,
          paddingBottom: 5,
          overflow: "visible",
          textAlign: "left",
          verticalAlign: "baseline",
          fontSize: 12,
          color: "#000000",
          backgroundColor: "#ffffff",
          fontStyle: "normal",
          fontWeight: "normal",
          borderColor: "#000000",
          borderStyle: "solid",
          borderWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          borderRadius: 0,
          textDecorationLine: "none",
          textTransform: "none",
          lineHeight: 12,
          letterSpacing: 0
        }}
        value={this.state.Input_13}
        onChangeText={nextValue => this.setState({ Input_13: nextValue })}
      />
      <CheckBox
        text="Checkbox"
        disabled={false}
        style={{
          marginLeft: 0,
          marginRight: 0,
          marginTop: 5,
          marginBottom: 5,
          paddingLeft: 5,
          paddingRight: 5,
          paddingTop: 5,
          paddingBottom: 5,
          overflow: "visible",
          textAlign: "left",
          verticalAlign: "baseline",
          borderColor: "#000000",
          borderStyle: "solid",
          borderWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          borderRadius: 0,
          textDecorationLine: "none",
          textTransform: "none",
          lineHeight: 12,
          letterSpacing: 0
        }}
        checked={this.state.CheckBox_42}
        onChange={nextChecked => this.setState({ CheckBox_42: nextChecked })}
      />
      <Toggle
        text="switch ON/OFF"
        activeColor="#409EFF"
        inactiveColor="#C0CCDA"
        disabled={false}
        style={{
          marginLeft: 0,
          marginRight: 0,
          marginTop: 5,
          marginBottom: 5,
          paddingLeft: 5,
          paddingRight: 5,
          paddingTop: 5,
          paddingBottom: 5,
          overflow: "visible",
          textAlign: "left",
          verticalAlign: "baseline",
          borderColor: "#000000",
          borderStyle: "solid",
          borderWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          borderRadius: 0,
          textDecorationLine: "none",
          textTransform: "none",
          lineHeight: 12,
          letterSpacing: 0
        }}
        checked={this.state.Toggle_44}
        onChange={nextChecked => this.setState({ Toggle_44: nextChecked })}
      />
      <Radio
        text="Radio button"
        disabled={false}
        style={{
          marginLeft: 0,
          marginRight: 0,
          marginTop: 5,
          marginBottom: 5,
          paddingLeft: 5,
          paddingRight: 5,
          paddingTop: 5,
          paddingBottom: 5,
          overflow: "visible",
          textAlign: "left",
          verticalAlign: "baseline",
          borderColor: "#000000",
          borderStyle: "solid",
          borderWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          borderRadius: 0,
          textDecorationLine: "none",
          textTransform: "none",
          lineHeight: 12,
          letterSpacing: 0
        }}
        checked={this.state.Radio_46}
        onChange={nextChecked => this.setState({ Radio_46: nextChecked })}
      />
      <Icon
        iconFont="Eva Design Icons"
        name="star"
        width={20}
        height={20}
        style={{
          marginLeft: 0,
          marginRight: 0,
          marginTop: 5,
          marginBottom: 5,
          paddingLeft: 5,
          paddingRight: 5,
          paddingTop: 5,
          paddingBottom: 5,
          overflow: "visible",
          textAlign: "left",
          verticalAlign: "baseline",
          borderColor: "#000000",
          borderStyle: "solid",
          borderWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          borderRadius: 0,
          fontSize: 20,
          color: "#000000",
          backgroundColor: "#ffffff",
          fontStyle: "normal",
          fontWeight: "normal",
          textDecorationLine: "none",
          textTransform: "none",
          lineHeight: 12,
          letterSpacing: 0
        }}
      />
    </View>
  )
}

export default Blank = withStyles(_Blank, theme => ({
  container: {
    backgroundColor: theme["color-basic-100"]
  }
}))
