# Veed challenge

## How to run the app

1. Ensure you have Node.js installed (v.16 or higher)
2. Clone the repo
3. Run `npm install`
4. Run `npm run dev`
5. Open the local URL generated (in the console)

OR

Simply use the deployed version of the app: https://veed-challenge.vercel.app/ 🚀

## How to run the tests (after following the steps above)

1. Run `npm run test`

## Overall approach to the challenge

I tried my best to keep the code easy to read and maintainable, while having a solid base to build onto.
For this reason I used a few libraries (for more readable code and faster development):

### UI

- React
- Pico.css (a very lightweight CSS framework)
- JSS (for styling)
- React icons
- Dayjs (for date parsing/formatting)
- React hot toast (for notifications)

### Data management / API

- Redux (with RTK)
- Redux persist (for localstorage persistance)
- Axios (for API calls)

### Testing

- Vitest (as I used Vite as the bundler)
- React Testing Library
- MSW (for mocking API calls - can also be used for development purposes with minimal changes)
