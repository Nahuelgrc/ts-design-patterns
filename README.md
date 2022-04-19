# Repository used to run differents examples of design patterns in Typescript

## Facade Design Pattern

Unifies several calls to multiple methods into a single call. To make it work, it's needed to create a class with a method. That method will instance one or multiple objects and will call the other methods.

Is tipically used when:
- An interface is required to access a complex system.
- The abstractions and implementations of a subsystem are tightly coupled.
- Need an entry point to each level of layered software.
- System is very complex or difficult to understand.

For more information you can visit thw following link link -> [Link](https://en.wikipedia.org/wiki/Facade_pattern)

## Adapter Design Pattern

The idea of this design pattern is to copy the same behavior as one in the real world. A class is created that bridges the gap between an expected interface and an existing class. That enables to reuse an existing class that doesn’t implement a required interface and to use the functionality of multiple classes, that would otherwise be incompatible. It is useful when we want incompatible interfaces to work with each other.

For more information you can visit thw following link link -> [Link](https://stackify.com/design-patterns-explained-adapter-pattern-with-code-examples/)