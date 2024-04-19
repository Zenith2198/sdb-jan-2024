import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root'
import Pokemon, { pokemonLoader } from './routes/pokemon'
import Type, { typeLoader } from './routes/type'

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root></Root>,
		children: [
			{
				path: "/",
				element: <div>Landing page</div>
			},
			{
				path: "/type/:type",
				element: <Type></Type>,
				loader: typeLoader
			},
			{
				path: "/pokemon/:pokemon",
				element: <Pokemon></Pokemon>,
				loader: pokemonLoader
			}
		]
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</React.StrictMode>
);
