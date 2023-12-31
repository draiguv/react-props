import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


// TODO:
////1. Apply CSS styles to App.jsx component
////to match the appearance on the completed app:
////https://c6fkx.csb.app/
////2. Extract the contact card as a reusable Card component.
////3. Use props to render the default Beyonce contact card
////so the Card component can be reused for other contacts.
////4. Import the contacts.js file to create card components.
////5. Add avatar component
////6. Add detail component
////7. Simplify Card rendering
////8. Add component key as paragraph (react special prop)
