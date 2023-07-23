ServerEvents.recipes((event) => {
  // Fix Travel Staff recipe
  event.remove({ output: "travelanchors:travel_staff" });

  event.recipes.minecraft.crafting_shaped(
    "travelanchors:travel_staff",
    ["  e", " i ", "i  "],
    {
      e: "minecraft:ender_pearl",
      i: "minecraft:iron_ingot",
    }
  );
});
