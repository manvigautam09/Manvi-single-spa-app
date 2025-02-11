import { registerApplication, start } from "single-spa";

// Register Home application
registerApplication({
  name: "@dashboard/home",
  app: () => System.import("@dashboard/home"),
  activeWhen: ["/", "/home"],
});

// Register Profile application
registerApplication({
  name: "@dashboard/profile",
  app: () => System.import("@dashboard/profile"),
  activeWhen: ["/profile"],
});

start({
  urlRerouteOnly: true,
});
