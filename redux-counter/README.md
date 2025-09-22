**React-Redux Counter App**
<!-- Overview -->
The React-Redux Counter App is a simple application demonstrating state management using Redux in a React environment. 
Users can:
    Increment the counter.
    Decrement the counter.
This app is a beginner-friendly example showing how to integrate React with Redux and manage global state efficiently.

<!-- Features -->

- Increment counter value.
- Decrement counter value.
- Uses Redux state instead of local component state.
- Demonstrates component reusability with a separate Counter component.

<!-- Tech Stack -->

- React – Front-end library for building UI.
- Redux & Redux Toolkit – State management.
- React-Redux – Bindings for React and Redux.
- Vite – Fast development server and build tool.
- JavaScript (ES6+) – Modern JavaScript feat

<!-- Installation -->
# Clone the repository
git clone https://github.com/yourusername/react-redux-counter-app.git

# Navigate into the project folder
cd react-redux-counter-app

# Install dependencies
npm install

# Start the development server
npm run dev

<!-- Usage -->

- Open the app in your browser.
- Click the Increment button to increase the counter.
- Click the Decrement button to decrease the counter.

<!-- File Structure -->
src/
├─ App.jsx            # Main App component
├─ components/
│  └─ Counter.jsx     # Counter component with increment and decrement buttons
├─ store.jsx          # Redux store configuration
├─ slice.jsx          # Redux slice for counter state
├─ App.css            # Styling
├─ assets/            # React and Vite logos

<!-- Code Highlights -->

- Counter.jsx – A reusable component managing counter UI.
- Redux slice – Handles actions like increment and decrement.
- useSelector – Accesses counter value from Redux store.
- useDispatch – Dispatches counter actions to Redux store.
- Simple and clean React + Redux integration.

**HAPPY CODING**