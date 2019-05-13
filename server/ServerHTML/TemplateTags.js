/* @flow */

import * as React from 'react';
import config from '../../Application/config';

export default () => [
  <title key="-1">{config('title')}</title>,
  <meta charSet="utf-8" key="0" />,
  <meta name="application-name" content={config('title')} key="1" />,
  <meta name="description" content={config('description')} key="2" />,
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" key="3" />,
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1"
    key="4"
  />,
  <meta name="msapplication-TileColor" content="#2b2b2b" key="5" />,
  <meta
    name="msapplication-TileImage"
    content="/static/favicons/mstile-144x144.png"
    key="6"
  />,
  <meta name="theme-color" content="#2b2b2b" key="7" />,
  <link
    rel="apple-touch-icon-precomposed"
    sizes="152x152"
    href="/static/favicons/apple-touch-icon-152x152.png"
    key="8"
  />,
  <link
    rel="apple-touch-icon-precomposed"
    sizes="144x144"
    href="/static/favicons/apple-touch-icon-144x144.png"
    key="9"
  />,
  <link
    rel="apple-touch-icon-precomposed"
    sizes="120x120"
    href="/static/favicons/apple-touch-icon-120x120.png"
    key="10"
  />,
  <link
    rel="apple-touch-icon-precomposed"
    sizes="114x114"
    href="/static/favicons/apple-touch-icon-114x114.png"
    key="11"
  />,
  <link
    rel="apple-touch-icon-precomposed"
    sizes="76x76"
    href="/static/favicons/apple-touch-icon-76x76.png"
    key="12"
  />,
  <link
    rel="apple-touch-icon-precomposed"
    sizes="72x72"
    href="/static/favicons/apple-touch-icon-72x72.png"
    key="13"
  />,
  <link
    rel="apple-touch-icon-precomposed"
    sizes="57x57"
    href="/static/favicons/apple-touch-icon-57x57.png"
    key="14"
  />,
  <link
    rel="apple-touch-icon-precomposed"
    sizes="60x60"
    href="/static/favicons/apple-touch-icon-60x60.png"
    key="15"
  />,
  <link
    rel="apple-touch-icon"
    sizes="180x180"
    href="/static/favicons/apple-touch-icon-180x180.png"
    key="16"
  />,
  <link
    rel="mask-icon"
    href="/static/favicons/safari-pinned-tab.svg"
    color="#00a9d9"
    key="17"
  />,
  <link
    rel="icon"
    type="image/png"
    href="/static/favicons/favicon-196x196.png"
    sizes="196x196"
    key="18"
  />,
  <link
    rel="icon"
    type="image/png"
    href="/static/favicons/favicon-128.png"
    sizes="128x128"
    key="19"
  />,
  <link
    rel="icon"
    type="image/png"
    href="/static/favicons/favicon-96x96.png"
    sizes="96x96"
    key="20"
  />,
  <link
    rel="icon"
    type="image/png"
    href="/static/favicons/favicon-32x32.png"
    sizes="32x32"
    key="21"
  />,
  <link rel="icon" sizes="16x16 32x32" href="/static/favicon.ico" key="22" />,
  <meta name="msapplication-TileColor" content="#2b2b2b" key="23" />,
  <meta
    name="msapplication-TileImage"
    content="/static/favicons/mstile-144x144.png"
    key="24"
  />,
  <meta
    key="25"
    name="msapplication-square70x70logo"
    content="/static/favicons/mstile-70x70.png"
  />,
  <meta
    name="msapplication-square150x150logo"
    content="/static/favicons/mstile-150x150.png"
    key="26"
  />,
  <meta
    name="msapplication-wide310x150logo"
    content="/static/favicons/mstile-310x150.png"
    key="27"
  />,
  <meta
    name="msapplication-square310x310logo"
    content="/static/favicons/mstile-310x310.png"
    key="28"
  />,
  <link rel="manifest" href="/static/favicons/manifest.json" key="29" />
];
