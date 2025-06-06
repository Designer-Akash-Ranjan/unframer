import { HydrationOverlay } from '@builder.io/react-hydration-overlay'

import {
    isRouteErrorResponse,
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useRouteError,
} from '@remix-run/react'

import 'nextjs-app/src/framer/styles.css'
import 'tailwindcss/tailwind.css'

export default function App() {
    return (
        <html lang='en' className=''>
            <head>
                <meta charSet='utf-8' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <Meta />
                <Links />
            </head>
            <body>
                <Outlet />
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    )
}
