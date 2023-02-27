import React from "react";
import { Collapsible, CollapsibleItem, Icon } from "react-materialize";
function About() {
  return (
    <div className="detail-container">
      <Collapsible accordion>
        <CollapsibleItem
          expanded={false}
          header="EMAIL"
          icon={<Icon>email</Icon>}
          node="div"
        >
          email@gmail.com
        </CollapsibleItem>
        <CollapsibleItem
          expanded={false}
          header="PHONE"
          icon={<Icon>phone</Icon>}
          node="div"
        >
          0912345678
        </CollapsibleItem>
        <CollapsibleItem
          expanded={false}
          header="GITHUB"
          icon={<Icon>place</Icon>}
          node="div"
        >
          https://github.com/github
        </CollapsibleItem>
      </Collapsible>
    </div>
  );
}

export default About;
