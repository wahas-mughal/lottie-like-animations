import { StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import LottieView from "lottie-react-native";

const { width } = Dimensions.get("window");

export default class SocialAnimations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: false,
    };
    this.startAnimation = this.startAnimation.bind(this);
  }

  //on initial rendering
  componentDidMount() {
    if (this.state.isLiked) {
      this.animation.play(60, 60);
    } else {
      this.animation.play(20, 20);
    }
    this.firstRun.current = false;
  }

  //on state change
  componentDidUpdate() {
    if (this.state.isLiked) {
      this.animation.play(19, 50);
    } else {
      this.animation.play(0, 19);
    }
  }

  //onPress event
  startAnimation() {
    this.setState({ isLiked: !this.state.isLiked });
  }

  render() {
    return (
      <TouchableOpacity onPress={this.startAnimation}>
        <LottieView
          ref={(animation) => (this.animation = animation)}
          source={require("../assets/lottie/like.json")}
          style={styles.lottieSocial}
          autoPlay={false}
          loop={false}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  lottieSocial: {
    width: width / 1.1,
    height: width / 1.1,
  },
});
