/* 
Things I had to do to get this to work on next.js:
2. Add `@zeit/next-css` and configure next.config.js in order to use our stylesheet
*/

import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";
import {
  SearchProvider,
  Results,
  SearchBox,
  ErrorBoundary,
  WithSearch
} from "@elastic/react-search-ui";
import { Layout } from "@elastic/react-search-ui-views";

import "@elastic/react-search-ui-views/lib/styles/styles.css";

const connector = new AppSearchAPIConnector({
  searchKey: "search-371auk61r2bwqtdzocdgutmg",
  engineName: "search-ui-examples",
  hostIdentifier: "host-2376rb"
});

export default () => {
  return (
    <div>
      <SearchProvider
        config={{
          apiConnector: connector
        }}
      >
        <WithSearch mapContextToProps={({ wasSearched }) => ({ wasSearched })}>
          {({ wasSearched }) => {
            return (
              <div className="App">
                <ErrorBoundary>
                  <div className="App">
                    <Layout
                      header={<SearchBox />}
                      bodyContent={
                        <Results titleField="title" urlField="nps_link" />
                      }
                    />
                  </div>
                </ErrorBoundary>
              </div>
            );
          }}
        </WithSearch>
      </SearchProvider>
    </div>
  );
};
