# Architecture of Angular

Angular is a popular framework for building web applications. It's developed and maintained by Google. The architecture of Angular is based on certain fundamental concepts. Here's an overview:

## Table of Contents

  - [Modules](#modules)
  - [Components](#components)
  - [Services and Dependency Injection](#services-and-dependency-injection)
  - [Directives](#directives)
  - [Routing](#routing)

## Modules

In Angular, a module is a mechanism to group components, directives, pipes and services that are related, in such a way that they can be combined with other modules to create an application. An Angular application is defined by a set of modules. The `AppModule` is the root module which bootstraps and launches the application.

```javascript
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
## Components

Components are the basic building blocks of Angular applications. A component controls a part of the screen — a view — through its associated template.

```javascript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My App';
}
```

## Services and Dependency Injection

For data sharing and logic that isn’t associated with a specific view, and to share code across components, Angular provides services. A service is typically a class with a narrow, well-defined purpose.

```javascript
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() { }
}
```

## Directives

Directives are classes that add additional behavior to elements in your Angular applications. They are JS classes, where decorators are used to attach metadata to a class that can tell Angular how to process that class.

```javascript
@Directive({selector: '[myCustomDirective]'})
export class MyCustomDirective {
  constructor() { }
}
```

## Routing

The Angular Router NgModule provides a service that lets you define a navigation path among the different application states and view hierarchies in your app. It is modeled on the familiar browser navigation conventions.

```javascript
const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
];
```




