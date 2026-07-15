import { world, system } from "@minecraft/server";

world.afterEvents.worldInitialize.subscribe(() => {
  world.sendMessage("Add-on çalışıyor!");
});

system.runInterval(() => {
  const dimension = world.getDimension("overworld");
  dimension.runCommandAsync(
    "execute as @e[type=villager,tag=following] at @s facing entity @p run tp @s ^ ^ ^0.2"
  );
}, 5);
