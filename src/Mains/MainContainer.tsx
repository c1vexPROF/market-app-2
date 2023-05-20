import React, { useEffect, useState } from "react";
import Main1 from "./Main1";
import "../styles/main1.scss";
import { requestTest, requestTest2 } from "../actions/action";

import { compose } from "redux";
import { connect } from "react-redux";

type PropsTest = {
  test1: any;
  test2: any;
};

type OwnPropsType = {
  match: any;
};
type PropsType = PropsTest & OwnPropsType;

function MainContainer(props: PropsType) {
  useEffect(() => {
    getTest();
    getTest2();
  }, []);
  const [testData, setTestData] = useState<any>(undefined);
  const [testData2, setTestData2] = useState<any>(undefined);

  let getTest2 = async () => {
    let TestData2: any = await requestTest2();
    setTestData2(TestData2);
  };

  let getTest = async () => {
    let TestData: any = await requestTest();
    setTestData(TestData);
  };
  return <Main1 test1={testData} test2={testData2} />;
}
export default MainContainer;
