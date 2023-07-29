const blank = "prettypipes:blank_module";
const magma = "minecraft:magma_cream";
const sturdy = "create:sturdy_sheet";

const tiers = ["low", "medium", "high"];

const modules = {
  crafting: "create:mechanical_crafter",
  extraction: "create:chute",
  retrieval: "create:brass_funnel",
  filter: "create:filter",
  speed: "create:rotation_speed_controller",
};

const other = [
  "prettypipes:damage_filter_modifier",
  "prettypipes:nbt_filter_modifier",
  "prettypipes:mod_filter_modifier",
  "prettypipes:tag_filter_modifier",
  "prettypipes:round_robin_sorting_modifier",
  "prettypipes:random_sorting_modifier",
  "prettypipes:stack_size_module",
  "prettypipes:redstone_module",
  "prettypipes:filter_increase_modifier",
  "prettypipes:low_low_priority_module",
  "prettypipes:medium_low_priority_module",
  "prettypipes:high_low_priority_module",
  "prettypipes:low_high_priority_module",
  "prettypipes:medium_high_priority_module",
  "prettypipes:high_high_priority_module",
];

ServerEvents.recipes((event) => {
  event.remove({ mod: "prettypipes" });

  // Item Terminal
  event.recipes.minecraft.crafting_shaped(
    "prettypipes:item_terminal",
    [" d ", "ocl", " s "],
    {
      d: "create:display_board",
      o: "create:content_observer",
      c: "#forge:chests/wooden",
      l: "create:display_link",
      s: "create:smart_chute",
    }
  );

  // Crafting Terminal
  event.recipes.create.mechanical_crafting(
    "prettypipes:crafting_terminal",
    ["ccc", "ccc", "ccc", "eip"],
    {
      c: "create:mechanical_crafter",
      e: "create:electron_tube",
      i: "prettypipes:item_terminal",
      p: "create:precision_mechanism",
    }
  );

  // Pipe Pressurizer
  event.recipes.minecraft.crafting_shaped("prettypipes:pressurizer", ["mcp"], {
    m: "createaddition:electric_motor",
    c: "create:brass_casing",
    p: "create:propeller",
  });

  // Pipe
  event.recipes.minecraft.crafting_shaped("4x prettypipes:pipe", ["sis"], {
    s: "create:brass_sheet",
    i: "create:brass_ingot",
  });

  // Pipe Wrench
  event.recipes.minecraft.crafting_shaped(
    "prettypipes:wrench",
    [" bb", " a ", "ls "],
    {
      b: "create:brass_ingot",
      a: "create:andesite_alloy",
      l: "minecraft:leather",
      s: "minecraft:stick",
    }
  );

  // Blank Module
  event.recipes.create.sandpaper_polishing(
    [blank],
    ["createaddition:zinc_sheet"]
  );

  // Action Modules
  Object.entries(modules).forEach(([module, ingredient]) => {
    event.recipes.create.deploying(
      [`prettypipes:low_${module}_module`],
      [blank, ingredient]
    );
    event.recipes.create.deploying(
      [`prettypipes:medium_${module}_module`],
      [`prettypipes:low_${module}_module`, magma]
    );
    event.recipes.create.deploying(
      [`prettypipes:high_${module}_module`],
      [`prettypipes:medium_${module}_module`, sturdy]
    );
  });

  // Other Modules
  other.forEach((module) => {
    event.recipes.minecraft.stonecutting(module, blank);
  });

  // Pipe Frame
  event.recipes.minecraft.crafting_shapeless("prettypipes:pipe_frame", [
    "minecraft:item_frame",
    "create:electron_tube",
  ]);
});
