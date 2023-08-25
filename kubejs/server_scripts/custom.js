ServerEvents.recipes((event) => {
  event.recipes.minecraft.stonecutting(
    "kubejs:polished_stone",
    "minecraft:stone"
  );
  event.recipes.minecraft.stonecutting(
    "kubejs:dark_polished_stone",
    "minecraft:stone"
  );
  event.recipes.minecraft.stonecutting(
    "kubejs:darker_polished_stone",
    "minecraft:stone"
  );
  event.recipes.minecraft.stonecutting(
    "kubejs:darkest_polished_stone",
    "minecraft:stone"
  );
});

ServerEvents.tags("block", (event) => {
  event.add(
    "minecraft:mineable/pickaxe",
    "kubejs:polished_stone",
    "kubejs:dark_polished_stone",
    "kubejs:darker_polished_stone",
    "kubejs:darkest_polished_stone"
  );
});
