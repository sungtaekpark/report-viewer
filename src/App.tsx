import React from 'react';
import SecretReportContainer from "./Report/SecretReportContainer/SecretReportContainer";
import {RecoilRoot} from "recoil";
import './i18n/config';
import './Asset/fonts/index.css';

import ThemeContainer from "./Theme/ThemeContainer";

function App() {

  return (
    <div className="App">
      <RecoilRoot >
          <ThemeContainer >
            <SecretReportContainer />
          </ThemeContainer>
      </RecoilRoot>
    </div>
  );
}

export default App;
