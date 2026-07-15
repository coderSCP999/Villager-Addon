Villager Addon projesi
{
  "format_version": 2,
       "name": "Villager Test",
    "description": "Ilk deneme",
    "uuid": "e4a1b2c3-1111-4a2b-9c3d-1234567890ab",
    "version": [1, 0, 0],
    "min_engine_version": [1, 21, 0]
  },
  "modules": [
    {
      "type": "script",
      "language": "javascript",
      "uuid": "f5b2c3d4-2222-4b3c-8d4e-234567890abc",
      "entry": "scripts/main.js",
      "version": [1, 0, 0]
    }
  ],
  "dependencies": [
    {
      "module_name": "@minecraft/server",
      "version": "1.13.0"
    }
  ]
}
import { world } from "@minecraft/server";

world.afterEvents.worldInitialize.subscribe(() => {
  world.sendMessage("Add-on calisiyor!");
});
