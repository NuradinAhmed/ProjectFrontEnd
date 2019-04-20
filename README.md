# ProjectFrontEnd

					What is a Component 
A component controls a patch of screen real estate that we could call a view, and declares reusable UI building blocks for an application. 

Components are essentially the building blocks of our application, they usually have an associated view which can be rendered in our application. 


					CREATING A COMPONENT 
	Components are made up of 3 parts: 

* TEMPLATE - This is used to render the view for the application. This contains the HTML that needs to be rendered in the application. 
    * Template is pretty much just html code, with a few angular specific features. The first of which is communication between the component and the template we can access a component parameter by using {{paramenterName}}
        * Ex:
            * <h1> Rendered html of {{title }}</h1>
* CLASS - This is simply the class that holds out component logic, its written in typescript.
    * This will be made up of parameters and methods: 
        * Ex:
            * Export class AppComponent { title: string = “My Angular Component” ;}
* METADATA - This has the extra information describing attributes of the component. 
    * The metadata of our component will hook up the component to our template, and define additional information. 
                        * @Component ( { selector: ‘app-root’, 
                        * tempalate: ‘<h1> Rendered html of {{title}} </h1>’, })


To create a component we create a class annotated with the @Component decorator, which will tell angular that this is a component and holds the metadata of our component. 

