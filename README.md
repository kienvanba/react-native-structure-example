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
  
  3rd party api (ex: payment gateway), is also served as a service in the project like any other services.
  
- Does it use Redux?
  
  Yes
  
- Does it use assets?
  
  Yes (images, fonts, ...)
  
- Does it have routing?
  
  Yes (reavt-navigation, react-router)
  
