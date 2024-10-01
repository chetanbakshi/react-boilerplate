# Documentation

## Table of Contents

- [Objective](#objective)
- [Getting Started](#getting-started)
- [Demo](#demo)
- [Features List](#features-list)
- [Naming Conventions](#naming-conventions)
- [Dependency List](#dependencies-list)
- [Folders Details](#folders-details)
  - [core](#core)
  - [features](#features)
  - [router](#router)
  - [shared](#shared)
  - [styles](#styles)
- [Working with router system](#working-with-router-system)
- [Working with store](#working-with-store)
  - [Actions](#actions)
  - [Effects](#effects)
  - [Reducers](#reducers)
  - [Read Redux State](#read-redux-state)
  - [Call Effects Method](#call-effects-method)


## Objective

The main objective of creating this boilerplate is to reduce the initial development time for creating an application framework with standard practices.


## Getting Started

Either download zip file or clone this project.

Commands to launch the application in local development environment:
- `npm install`
- `npm start`

The `npm start` command will automatically launch the default browser with the URL `http://localhost:3000` once the local development server has started. If this command doesn't launch the browser, you can manually open the browser, paste the URL `http://localhost:3000`, and hit Enter to run the application.


## Demo 

- [Launch Application](https://react-boilerplate.chetanbakshi.com/)
- Application Login credentials (Email | Password)
  - chetan@gmail.com | chetan@pass
  - john@gmail.com | john@pass

## Features List

- Based on SOLID principles
- Well-defined folder structure
- Array-based routing system with nested children
- Authentication logic can be added directly to the routing object
- JSON-based responsive menu
- Multiple menu states can be added to the menu list; actions can also be performed instead of providing a link (e.g., showing a confirmation dialog box on clicking a menu item)
- Well-defined structure of the Redux store for creating actions, effects, and reducers
- Added hooks to interact with the Redux state
- Created structure for maintaining global constant variables, models/DTOs (Data Transfer Objects), and initial state value objects (VOs)
- Reusable components for Header, Footer, and Dialog
- Easy to scale the application and maintain it; multiple teams can work together on the same codebase with fewer file conflicts

## Naming Conventions

This framework follows certain naming conventions. Below is an explanation of each file type:

`kebab-case.type.extension`: Throughout this framework, the naming conventions format is a combination of kebab-case, file type, and file extension. For example, if a developer is creating a "Contact Us" page, the file name will be `contact-us.page.tsx`. In this file name, `contact-us` follows kebab-case, `.page` indicates the file type, and `.tsx` is the file extension.

<b>List of file types and its explanation:</b>

`*.module.tsx:` If a file name ends with `.module.tsx`, it indicates that this is a feature module. The main purpose of this file is to include common features and components that will be used across all the pages within this module. Another important role of this file is to set the routing guard if required. In this boilerplate, the guard implementation is available in the protected module file.

`*.page.tsx:` As the name suggests, this type of files are act as page that hold view elements and components.

`*.const.ts:` The purpose of this file-type is to create constants.

`*.dto.ts:` This is an interface file-type used as a `Data Type Object` or `Model`. If this is a common file, it should be kept in the core/dto directory; otherwise, it should be placed in the dto folder under the specific feature module.

`*.vo.ts:` This type of file serves as a `Value Object`. Its main purpose is to set the initial state of an object or to save some application data in the form of an object.

`*.type.ts:` This file is helpful when defining types for objects or components, such as dialog types (e.g., INFO, ALERT, CONFIRM).

`*.actions.ts:` Redux actions are defined in this file type.

`*.effects.ts:` Define Redux effect methods in this file type.

`*.reducer.ts:` Reducers are created in this file type.

`*.component.ts:` This file type is used for creating reusable components or for refactoring code.

`*.style.scss:` This file type is used for stylesheets.

`index.ts:` Every folder will have an index file that exports all the modules.

## Dependency List
"@emotion/react": "^11.13.3"\
"@emotion/styled": "^11.13.0"\
"@mui/icons-material": "^6.0.2"\
"@mui/material": "^6.0.2"\
"@reduxjs/toolkit": "^2.2.7"\
"axios": "^1.7.7"\
"lodash": "^4.17.21"\
"react": "^18.3.1"\
"react-dom": "^18.3.1",\
"react-hook-form": "^7.53.0"\
"react-redux": "^9.1.2"\
"react-router": "^6.26.2"\
"react-router-dom": "^6.26.2"\
"sass": "^1.78.0"

## Folders Details

### core

All the files related to constants, hooks, redux store, types, utilities, and DTOs will come under this module.

### features

All the feature modules packages will come under this structure.

### router

All the routing paths will define in the value object file.

### shared

All the reusable component files need to be placed here.

### styles

Keep all the global stylesheet files here.



## Working with Router system

Router has been defined in the object which has properties like path, element, navigation, children etc. 

As a standard, if the object has a children property then use module type file. In the module file, logic can be written to load the children routes. The protected module has the logged in logic. If the user has successfully logged in then the children routes will load otherwise error will show in the dialof box in the login page.

The files/folders structure can be defined based the number of module, sub-modules or pages.



## Working with store

Use store only when a particular data needs to be shared in multiple pages, otherwise call axios or any values within the page only and don't save the data in the store.

### Actions

Each action file will have three types of exports:

- `enum`: (action type names).
- `interface`: This will include action type and payload (optional).
- `type`: type will combine all the interfaces and will create action type.

Action files can be grouped by creating a folder to contain them if there are multiple modules with a large number of pages. Keep in mind that if you create a folder, you should also create an index.ts file to export all the action module files.

### Effects

Generally, effects are added when data is saved in the store via an API. For example, user details can be saved in the store based on the login API response; in this case, the effect comes into play and dispatches success and error events based on the respective API response.

If we are saving internal application data, such as the current module name, we can directly dispatch events from the page or component itself. It is a matter of choice whether this type of data should be dispatched from the effect or from the page or component.

### Reducers

Each reducer will have its own folder with reducer, index, initial state (optional) files.

The creation of reducer is very straight forward. Take a reference of the exisiting reducer file in this boilerplate

If application required the redux data sync with session stoarge or local stoarge then this can be easily done with the implementation in the reducer file by writing very few lines of code. This is also impelemented in the exisiting reducer file for your reference. 

The same can also be achieved with the help of redux-persist library.

NOTE: All reducers need to be exported in the index.ts file

### Read Redux State

Reading redux state is pretty simple. With the help of custom hook `useTypedSelector`, state can be called, e.g., 
```javascript
const { menuList, menuLoadError, currentMenu } = useTypedSelector(state => state.menu as MenuDTO);`
```
### Call Effects Method

For updating state, either call dipatch method directly from the component or page itself or defined method in the effect to load the data and dispatch event from their to update the redux state.

Eample to load the menu data from JSON file

```javascript
const { loadMenu } = useActionsWithEffects();

useEffect(() => {
    loadMenu();
}, []);
```








