import React from 'react'

const Header = () => {
  return (
      <View style={style.header}>
          {/* icon for the menu */}
          <View>
              <Text style={styles.headerText}>Gamezone</Text>
          </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#333",
        letterSpacing: 1
    }
})