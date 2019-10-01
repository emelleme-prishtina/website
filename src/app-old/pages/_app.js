import React from "react";
import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";

export default class MyApp extends App {
  constructor() {
    super();
    this.state = {
      pages: []
    };
  }

  async componentDidMount() {
    let resp = await fetch(
      "https://www.pushtable.com/api/firestore/journey-tax/pages?auth=100740221589373237797-6do5f2jwz9831wce0wb8l8"
    );

    let pages = await resp.json();
    console.log(pages);
    this.setState({ pages: pages });
  }

  render() {
    const { Component, pageProps } = this.props;
    const { pages } = this.state;

    console.log(this.state.pages + "ok");
    return (
      <React.Fragment>
        <Head>
          <title>Journey Tax</title>
          <script src="https://media.twiliocdn.com/sdk/js/flex-webchat/releases/2.1.1/twilio-flex-webchat.min.js"></script>
          <script src="/static/js/tw-flex.js"></script>
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <ul>
            {pages.map(page => {
              return <li>{page.fields.content}</li>;
            })}
          </ul>
          <Component {...pageProps} pages={pages} />
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
