import AnchorNavigation, {
  AnchorNavigationProps,
} from "@cloudscape-design/components/anchor-navigation";
import Header from "@cloudscape-design/components/header";
import classes from "./styles.module.scss";

const anchors: AnchorNavigationProps["anchors"] = [
  { text: "Features", href: "#features", level: 1 },
  { text: "Installation", href: "#installation", level: 1 },
  { text: "API", href: "#api", level: 1 },
  { text: "Code view", href: "#code-view", level: 2 },
  { text: "Copy button", href: "#copy-button", level: 2 },
  { text: "Syntax highlight", href: "#syntax-highlight", level: 2 },
  { text: "Demos", href: "#demos", level: 1 },
];

export function Navigation() {
  return (
    <div className={classes.navigationWrapper}>
      <Header>On this page</Header>
      <AnchorNavigation anchors={anchors} />
    </div>
  );
}
