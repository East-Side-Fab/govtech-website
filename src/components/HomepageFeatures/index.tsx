import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import Translate from "@docusaurus/Translate";
import styles from "./styles.module.css";

type FeatureItem = {
  titleId: string;
  titleDefault: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  descriptionId: string;
  descriptionDefault: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    titleId: "features.item1.title",
    titleDefault: "Easy to Use",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    descriptionId: "features.item1.description",
    descriptionDefault: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    titleId: "features.item2.title",
    titleDefault: "Focus on What Matters",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    descriptionId: "features.item2.description",
    descriptionDefault: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    titleId: "features.item3.title",
    titleDefault: "Powered by React",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    descriptionId: "features.item3.description",
    descriptionDefault: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ titleId, titleDefault, Svg, descriptionId, descriptionDefault }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">
          <Translate id={titleId} description={`Feature ${titleId} title`}>
            {titleDefault}
          </Translate>
        </Heading>
        <p>
          <Translate id={descriptionId} description={`Feature ${descriptionId} description`}>
            {descriptionDefault}
          </Translate>
        </p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}