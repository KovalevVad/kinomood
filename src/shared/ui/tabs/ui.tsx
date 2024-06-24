import clsx from "clsx";

import { Tab, TabList, TabPanel, Tabs as ReactTabs } from "react-tabs";

import "./index.css";

interface PropsTabs {
  classes?: string;
  itemTabs: {
    label: string;
    content: string;
  }[];
}

export const Tabs = ({
  classes,
  itemTabs,
}: PropsTabs) => {

  return (
    <ReactTabs className={clsx("tabs", classes)}>
      <TabList className="tab">
      {
        itemTabs.map((item) => {
          return <Tab>{item.label}</Tab>

        })
      }
      </TabList>
      <TabPanel>
      {
        itemTabs.map((item) => {
          return (
          <Tab>
            <p className="tab-text"> {item.content}</p>
          </Tab>)

        })
      }
      </TabPanel>
    </ReactTabs>
  );
};
