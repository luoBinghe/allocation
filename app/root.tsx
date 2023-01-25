import type { MetaFunction } from "@remix-run/node";
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsconfig from './graphql/aws-exports';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

import type { LinksFunction } from "@remix-run/node";

import styles from "./styles/tailwind.css";


Amplify.configure(awsconfig);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
