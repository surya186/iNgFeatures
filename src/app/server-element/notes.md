Sometimes we need to pass HTML to our own component. 
For that, we need to use `ng-content` directive.

In our application, we are calling server-element component in the app component html and looping through the server-element component.

Now, we can move the code directly to the app component from the server-element using the `ng-content` directive

 