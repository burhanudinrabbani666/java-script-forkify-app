# MVC Architecture

## Why worry about architecture

- Structure: Like a house, sfotware need a structure; the way we organize the code
- Maintability: A project is never done! We need to able to easly change it in the future
- Expandability: We also need to be able to easily add new features

## Components of any architecture

### Business Logic

- Code thta solves the actual problem
- Directly related to what business does and what it need
- **Example:** Sending message, stroing trasaction, calculating taxes

### State

- Esssantially store all the data about the application
- Should be the "single source of truht"
- UI should be kept in sync with the statee
- State libraries exist like redux

### HTTP library

- Resposible making and receving AJAX request
- Optional but almost always necessary in real-world

### Application Logic (Router)

- Code that is only concerned about the implement of appliaction it self
- Handles navigation and UI Events

### Presentation Logic (UI Layer)

- Code that is concerned about the visible part of the application
- essentially display application state

## MVC

### Model

- Business Logic
- State
- HTTP Library

### View

- Presentation Logic

### Contorller

- Aplication Logic
- Bridge between model and views

[Next: Refactoring MVC](./06-refactoring-mvc.md)
