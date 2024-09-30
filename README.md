# Documentation

## Table of Contents

- [Objective](#objective)
- [Getting Started](#getting-started)
- [Demo](#demo)
- [Features List](#features-list)
- [Naming Conventions](#naming-conventions)
- [Folders Details](#folders-details)
  - [core](#core)
  - [features](#features)
  - [router](#router)
  - [shared](#shared)
  - [styles](#styles)
- How to Add New Link in Router?
- Working with Redux/Store
- Importance of module type file


## Objective

The main objective of creating this boilerplate is to reduce the initial development time of creating application framework with standard. 


## Getting Started

Either download zip file or clone this project.

## Demo 

[Launch Application](https://react-boilerplate.chetanbakshi.com/)

[Link](https://react-boilerplate.chetanbakshi.com/)

## Features List

- Important libraries
    - Typescript
    - [SASS](https://sass-lang.com/documentation/syntax/) (Pre-processor CSS)
    - [MUI Components](https://mui.com/material-ui/all-components/)
    - Redux Toolkit with thunk
    - [Axios](https://axios-http.com/docs/intro)
    - [React Hook Form](https://react-hook-form.com/): Form Validation, Error handling, Form State
- Based on Solid principle
- Well defined folder structure
- Array based routing system with nested children
- Auth logic can be added directly at the routing object
- JSON based menu list in the navigation
- Multiple menu state can be added in the menu list. Action can also be performed instead of giving a link. For instance, showing dialog box for confirmation (e.g., logout) on clicking on menu item
- Well defined structure of store (redux) for creating actions, effects and reducer
- Added hooks to interact with redux state
- Created structure for keeping the global constant variables, models/dto (Data type object), initial state vo (value object)
- Reusable components for Header|Footer|Dialog
- Easy to scale the application, easy to maintain, multiple teams can work together on the same code base with less file conflicts

## Naming Conventions

This framework has followed certain naming conventions. Below are the explaination of each file type.

`*.module.tsx`: If the file name ends with `.module.tsx` that means this is a feature module and the main usage of this is to add common features here which will use accross all the pages which comes under this module. The other important role of this file is set the routing guard if this is required. In this boilerplate, this guard implementation is available in protected module file.

`*.page.tsx`: As the name suggest, these type of files are act a page which will hold the view elements and components.

`*.const.ts`: The purpose of this file is to create constants.

`*.dto.ts`: This is a interface file which will use as a data type object or as a model. If this is a common file then we will keep this in the `core > dto` directory otherwise keep this in the dto folder under that particular feature module.

`*.vo.ts`: This file serves as a value object. The main purpose of creating this file is either set the initial state of object or save some app data in the form of object.

`*.type.ts`: This is helpful when we are defining some types of object or component. For example Dialog Types (INFO, ALERT, CONFIRM).

`*.actions.ts`: Redux actions will define in this file.

`*effects.ts`: Define Redux effect methods here.

`*.reducer.ts`: Reducer will create in this file.

`*.component.ts`: This file type is for creating reusable component or refactor the code.

`*style.scss`: This file type is for stylesheet.

`index.ts`: All the folder will have index file which will export all the modules.

## Folders Details

### core

All the constants, hooks, redux store, dto, types, utilities related files will come under this module.

### features

All the feature modules package will come under this structure.

### router

All the routing path will define in the value object file.

### shared

All the reusable component files need to be placed here.

### styles

Keep all the additional stylesheet file here.