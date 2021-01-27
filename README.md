# PPLUS's react-native-structure-example

In this project, we present our common structure for a `react-native` application

- How are components & styling organized?
  
  In `src` folder, there're `components` folder that contains common components that are used widely among app such as button, text, input... 
  and `containers` folder that contains screens, in each screen, the ui, the stylings 
  and the handling code are written in separate files with extensions such as *.styles, *.handlers... see the code to have a better view
  
- Does it have a meaningful test?
  
  We have unit test for `components` and `business logic code` such as `api` or `handlers`
  
- How is business logic organized in the project?
  
  Most of business logic are handled in `services` directory which contains `api` handling code, and also handled in `*.handlers` code file
  
- How is 3rd party api organized?
  
  3rd party api (ex: payment gateway), is also served as a service.
  Our `server` will communicate with the `gateway` to handle business logic and ensure data is secured, and then provide an `api` for `mobile app` so it 
  just have to make api call like any other services.
  
- Does it use Redux?
  
  Yes. `Redux` is used for managing global states such as `access_token`, `login state`, `business logic state`... `Screens` in the app can listen for states changes and dispatch actions to update `states`
  
- Does it use assets?
  
  Yes. assets such as `fonts`, `images`, `audios` are commonly used. `fonts` and other set-up-assets are usuaslly organized in the root directory of the application, while `images` and `audio` are organized in `src` folder.
  
- Does it have routing?
  
  Yes (react-navigation, react-router)
  
