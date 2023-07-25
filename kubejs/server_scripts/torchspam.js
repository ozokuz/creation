ServerEvents.recipes((event) => {
  event.remove({ mod: "nomoretorchspam" });

  event.recipes.minecraft.crafting_shaped(
    "nomoretorchspam:glow_crystal",
    [" g ", "gag", " g "],
    {
      g: "minecraft:glowstone_dust",
      a: "minecraft:amethyst_shard",
    }
  );
});
