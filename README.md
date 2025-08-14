# Namaste React

# Parcel

- Dev build
- local server
- HMR = Hot module replacement
- file watching algorithm - written in c++
- caching - for faster builds
- image optimization
- minification in production app
- Bundling
- compressing

# JSX

- jsx is not JS or XML
- JSX is syntax
- JSX is transpilled by bundler like #parcel before it reaches js engine using babel
- JSX => React.createElement => ReactElement js object => HTML element (renders)
- at the end of the day jsx is converted to React.createElement and then rendered using root.render() i.e HTML element
- Babel is a opensource JS compiler, transpiler

# JSX attributes

- use className for clss
- tabIndex for tabindex
- camel casing
- () use for mulriple lines code

# React Component

- class based component -OLD
- function based component - NEW

# React functional component

- it's a normal javaScript function which returns some jsx element
- because JSX is react element ..we can say RFC is a JS function that returns react element

# two ways to write functiona components

const headingComponent = () => {

return <h1 className="heading">Namaste React from functional components</h1>;

}

# AND

const headingComponent = () => (

  <h1 className="heading">Namaste React from functional components</h1>
);
