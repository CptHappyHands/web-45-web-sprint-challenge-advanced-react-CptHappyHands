# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

Stateful components keep track of changing data (using state) while functional components are unable to keep track of data as it changes

2. When does a componentWillMount function be called? What about a componentWillUpdate?

componentWillMount is called once to the serve and once to the client. componentWillUpdate calls when props or state changes

3. Define stateful logic.

Stateful logic is logic that is built in to a component, normally dealing with state

4. What are the three step of creating a successful test? What is done in each phase?

Arrange - Render a react element

Act - assign variables (example: using screen.getByText)

Assert - Test if the above variables are in the document or on screen and working
