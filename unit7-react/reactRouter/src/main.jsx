import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root, { rootLoader, rootAction } from './routes/root'
import ErrorPage from './errorPage'
import Contact, { contactLoader } from './routes/contact'
import EditContact, { editAction } from './routes/edit'

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root></Root>,
		errorElement: <ErrorPage></ErrorPage>,
		loader: rootLoader,
		action: rootAction,
		children: [
			{
				path: "contacts/:contactId",
				element: <Contact></Contact>,
				loader: contactLoader
			},
			{
				path: "contacts/:contactId/edit",
				element: <EditContact></EditContact>,
				loader: contactLoader,
				action: editAction
			}
		]
	}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
