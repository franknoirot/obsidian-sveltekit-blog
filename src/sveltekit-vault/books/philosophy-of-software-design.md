---
title: A Philosophy of Software Design
author: John K. Ousterhout
originallyPublished: 2018
publishDate: 2018
format: digital
coverImg: philosophy-of-software-design.jpeg
---
## citation
Ousterhout, John K. _A Philosophy of Software Design_. , 2018. Digital Print.

## big ideas
This book was so thoughtful that it even included Summary of Design Principles and Summary of Red Flags sections at the end:
### summary of design principles
Here are the most important software design principles discussed in this book:
1. Complexity is incremental: you have to sweat the small stuff (see p.11).
2. Working code isn't enough (see p.14).
3. Make continual small investments to improve system design (see p.15).
4. Modules should be deep (see p.22).
5. Interfaces should be designed to make the most common usage as simple as possible (see p.27).
6. It's more important for a module to have a simple interface than a simple implementation (see pp.55, 71).
7. General-purpose modules are deeper (see p.39).
8. Separate general-purpose and special-purpose code (see p.62).
9. Different layers should have different abstractions (see p.45).
10. Pull complexity downward (see p.55).
11. Define errors (and special cases) out of existence (see p.79).
12. Design it twice (see p. 91).
13. Comments should describe things that are not obvious from the code (see p.101).
14. Software should be designed for ease of reading, not ease of writing (see p.149).
15. The increments of software development should be abstractions, not features (see p.154).

### summary of red flags
Here are a few of the most important red flags discussed in this book. The presence of any of these symptoms in a system suggests that there is a problem with the system's design:
1. **Shallow Module:** the interface for a class or method isn't much simpler than its implementation (see pp.25, 110).
2. **Information Leakage:** a design decision is reflected in multiple modules (see p.31).
3. **Temporal Decompisition:** the code structure is based on the order in which operations are executed, not on information hiding (see p.32).
4. **Overexposure:** An API forces callers to be aware of rarely used features in order to use commonly used features (see p.36).
5. **Pass-Through Method:** a method does almost nothing except pass its arguments to another method with a similar signature (see p.46).
6. **Repetition:** a nontrivial piece of code is repeated over and over (see p.62).
7. **Special-General Mixture:** special-purpose code is not cleanly separated from general purpose code (see p.65).
8. **Conjoined Methods:** two methods have so many dependencies that its hard to understand the implementation of one without understanding the implementation of the other (see p.72).
9. **Comment Repeats Code:** all of the information in a comment is immediately obvious from the code next to the comment (see p.104).
10. **Implementation Documentation Contaminates Interface:** an interface comment describes implementation details not needed by users of the thing being documented (see p.114).
11. **Vague Name:** the name of a variable or method is so imprecise that it doesn't convey much useful information (see p.123).
12. **Hard to Pick Name:** it is difficult to come up with a precise and intuitive name for an entity (see p.125).
13. **Hard to Describe:** in order to be complete, the documentation for a variable or method must be long (see p.131).
14. **Nonobvious Code:** the behavior or meaning of a piece of code cannot be understood easily. (see p.148).