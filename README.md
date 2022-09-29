# ⚛️ Challenge Aluxion - React Native

***

![giphy](https://user-images.githubusercontent.com/51721302/192948042-033a51fc-1a6c-412f-93cb-dec50ef8fa62.gif)

---
## 🚀 Dependencies :

Utilicé el boilerplate (https://github.com/iviveros-code/boilerplate-react-native) creado por mí y agregué algunas librerías más, cómo el caso de Redux Toolkit (dejé planteado como sería su implementación) no lo utilicé ya que eran muy pocos estados y utilicé useState.

- @react-navigation/drawer  Para dejar implementado el drawer
- @reduxjs/toolki Como alternativa de state management
- axios  Para hacer las llamadas a la API
- react-native-animatable Para las animaciones de los textos en la screen Details
- react-native-fast-image Para el manejo de las imagenes
- react-native-linear-gradient Según requerimiento gradiente en diseño

Entre Otras.

- Utilicé el componente Flatlist con varias de sus props para renderizar la screen principal con un scroll infinito.
 


***
# 🚀 How does it works?

Para ios :

1 - yarn install
2 - cd ios/ pod install
3 - yarn start --reset-cache
4 - yarn ios

Para Android:

1 - yarn install
2 - cd android / ./gradlew clean
3 - yarn start --reset-cache
4 - yarn android

