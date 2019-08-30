# P2F

A react web app with a list of user tweet feeds(embed) that coders should follow on twitter

## About

**P2F**(People to Follow) is a website that contains a list
a list of people on Twitter who can fill your timeline with productive
tweets. They are open to discussions and questions.
These people can impact your tech and maker life really positively.

### Why?

People such as @chrisooncode and @alligator, have improved my software development
life by a mile. So I made this website to help others who are devs just like me.

### Thanks

It would have taken me a while to get this list but thanks to
[@hacksultan](https://twitter.com/hacksultan)
who made an [article](https://scotch.io/bar-talk/the-top-tech-people-to-follow-on-twitter-for-your-stack)
containing a list of people.

## Contribute

I know I don't have everyone here but great news **P2F** is open-source so you can add your maker on existing data or you can add new people.

> **Note**: Before you start contributing ensure you read the `CONTRIBUTING.md`.

## Getting Started

### Prerequisites

- Have `Node`, `npm`/`yarn` installed on your computer, but `yarn` is prefered
- Should have basic knowledge `Typescript` and `React`

### Standard Installation

- Fork this repo `https://github.com/tesh254/p2f.git`
- Clone your forked repository `git clone https://github.com/<your-username>/p2f.git`
- Type `yarn start` to run the application.

### Add to an existing

- If you want to add on a person locate `src/data/<datafile e.g react.ts>`.
- Inside the file you should see an array with multiple objects containing users' info
- To add someone just add anywhere in the array with an object like this:
  ```js
  {
      name: "<The person's Twitter name>",
      username: "<The person's Twitter username>",
      profileLink: "<Link to profile>",
      avatar: "<The person's current avatar>"
  }
  ```
- Push your code, raise your pull request.

### Add a new stack/category

- Locate `src/data` folder
- Create a new **file**, name it according to the **category/stack** in **lowercase**
- When adding data ensure you adhere to the template below
  ```js
      export default [
          {
            name: "<The person's Twitter name>",
            username: "<The person's Twitter username>",
            profileLink: "<Link to profile>",
            avatar: "<The person's current avatar>"
          },
          {...},
          {...}
      ]
  ```

* Locate `src/Components/People`
* Create a new folder with the name of the **stack/category**, first letter **uppercase**
* Inside the folder create an `index.ts` file
* Inside your template should adhere to the template below

  ```typescript
      import React from "react";
      import { PeopleState } from "../../types/interface";
      import People from "../../../data/<your data file in the src/data folder>";
      import PeopleComponent from "../../Commons/people";

      // If stack the class should be <Stack>People e.g. VuePeople
      // If category then it should be <Category name> e.g. Influencers
      class <Stack/Category name> extends React.Component<{}, PeopleState> {
          state = {
              people: People
          }

          render() {
              return (
                  <PeopleComponent {...this.state} />
              )
          }
      }

      export default <Stack/Category name>;
  ```

* Locate the `src/Components/Commons/StackTabs.tsx`
* Ensure you import your `<Stack/Category>` Component
* Open it and add your tab
  - Each tab is enclosed with the `<TabPane>` antd component.
  - The `tab` props is the name of the tab, emoji **must** be there so get creative.
  - The `key` is numeric number that helps in toggling the tabs
  - Ensure you is the last one and the `key` props should be a number **greater** than the **second last** tab by **one**.
