ServerEvents.recipes((event) => {
  event.remove({
    mod: "coinsje",
    type: "minecraft:smelting",
    input: "minecraft:copper_ingot",
  });
  event.remove({
    mod: "coinsje",
    type: "minecraft:smelting",
    input: "minecraft:iron_ingot",
  });
  event.remove({
    mod: "coinsje",
    type: "minecraft:smelting",
    input: "minecraft:gold_ingot",
  });
  event.remove({
    mod: "coinsje",
    type: "minecraft:blasting",
    input: "minecraft:copper_ingot",
  });
  event.remove({
    mod: "coinsje",
    type: "minecraft:blasting",
    input: "minecraft:iron_ingot",
  });
  event.remove({
    mod: "coinsje",
    type: "minecraft:blasting",
    input: "minecraft:gold_ingot",
  });

  // Copper Ingot -> Copper Coin
  event.recipes.create.sandpaper_polishing(
    ["coinsje:copper_coin"],
    ["minecraft:copper_ingot"]
  );
  // Copper Block -> Iron Coin
  event.recipes.create.sandpaper_polishing(
    ["coinsje:iron_coin"],
    ["minecraft:copper_block"]
  );
  // Diamond -> Gold Coin
  event.recipes.create.sandpaper_polishing(
    ["coinsje:gold_coin"],
    ["minecraft:diamond"]
  );
  // Diamond Block -> Diamond Coin
  event.recipes.create.sandpaper_polishing(
    ["coinsje:diamond_coin"],
    ["minecraft:diamond_block"]
  );
});
