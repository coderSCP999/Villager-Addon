import { world } from "@minecraft/server";

world.afterEvents.worldInitialize.subscribe(() => {
  world.sendMessage("Add-on çalışıyor!");
});
