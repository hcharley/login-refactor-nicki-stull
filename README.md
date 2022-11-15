# Login Refactor

This repository has a [Next.js](https://nextjs.org) [React](https://reactjs.org) application that has a dashboard protected by a login. This project was created using the [Nx](https://nx.dev) framework, which is an extensible monorepo build system.

The challenge, should you accept, is to refactor the login portion of the component in `apps/widget-dashboard-ui/pages/_app.tsx` into subcomponents to make it easier to maintain and add features to later. You'll be paired with your interviewer to accomplish this challenge together in collaboration in under 60 minutes.

![Converge Login Refactor Icon](./icon.png)

## Agenda

It may be helpful to follow an outline similar to this one:

1. Whiteboarding - strategize the approach to subdividing the `<WidgetIncDashboardApp />` component (10 minutes)
2. Pair programming - use screenshare or a dedicated tool like CodeSandbox, CodePair, or CoderPad to work together to accomplish the refactor (40 minutes)
3. Retrospective review - file a merge request, and review the code together to assess the strengths and weaknesses of the work accomplished (10 minutes)

## Getting started

1. [Install PNPM](https://pnpm.io/installation)
2. Clone this repository
3. Install NPM dependencies: `pnpm install`

## Development

1. Start the server: `pnpm start`
2. Make edits to code, and see changes in realtime at [localhost:4200](http://localhost:4200)
