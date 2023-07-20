ServerEvents.recipes((event) => {
  event.remove({ mod: "toms_storage" });

  /* Cables */
  // Basic
  event.recipes.minecraft.crafting_shapeless(
    "8x toms_storage:ts.inventory_cable",
    ["minecraft:dried_kelp", "create:brass_sheet"]
  );

  // Framed
  event.recipes.minecraft.crafting_shapeless(
    "8x toms_storage:ts.inventory_cable_framed",
    ["minecraft:dried_kelp", "create:brass_sheet", "minecraft:stick"]
  );
  event.recipes.minecraft.crafting_shapeless(
    "toms_storage:ts.inventory_cable_framed",
    ["toms_storage:ts.inventory_cable", "minecraft:stick"]
  );

  /* Connectors */
  // Basic
  event.recipes.minecraft.crafting_shapeless(
    "toms_storage:ts.inventory_cable_connector",
    ["toms_storage:ts.inventory_cable", "create:chute"]
  );

  // Framed
  event.recipes.minecraft.crafting_shapeless(
    "toms_storage:ts.inventory_cable_connector_framed",
    ["toms_storage:ts.inventory_cable_connector", "minecraft:stick"]
  );
  event.recipes.minecraft.crafting_shapeless(
    "toms_storage:ts.inventory_cable_connector_framed",
    ["toms_storage:ts.inventory_cable_framed", "create:chute"]
  );
  event.recipes.minecraft.crafting_shapeless(
    "toms_storage:ts.inventory_cable_connector_framed",
    ["toms_storage:ts.inventory_cable", "create:chute", "minecraft:stick"]
  );

  // Filtered
  event.recipes.minecraft.crafting_shapeless(
    "toms_storage:ts.inventory_cable_connector_filtered",
    ["toms_storage:ts.inventory_cable_connector", "create:electron_tube"]
  );

  /* Filters */
  // Basic
  event.recipes.minecraft.crafting_shaped(
    "toms_storage:ts.item_filter",
    ["awa"],
    { a: "create:andesite_alloy", w: "#minecraft:wool" }
  );

  // Polymorphic
  event.recipes.minecraft.crafting_shapeless(
    "toms_storage:ts.polymorphic_item_filter",
    ["toms_storage:ts.item_filter", "create:electron_tube"]
  );

  // Tag
  event.recipes.minecraft.crafting_shapeless(
    "toms_storage:ts.tag_item_filter",
    ["toms_storage:ts.item_filter", "create:brass_sheet"]
  );

  /* Terminals */
  // Storage
  event.recipes.minecraft.crafting_shaped(
    "toms_storage:ts.storage_terminal",
    ["odl", "bbb"],
    {
      o: "create:content_observer",
      d: "create:display_board",
      l: "create:display_link",
      b: "#minecraft:wooden_buttons",
    }
  );

  // Crafting
  event.recipes.create.mechanical_crafting(
    "toms_storage:ts.crafting_terminal",
    [" sts ", "secms", " sls "],
    {
      s: "create:sturdy_sheet",
      t: "toms_storage:ts.storage_terminal",
      e: "create:electron_tube",
      c: "minecraft:crafting_table",
      m: "create:precision_mechanism",
      l: "create:linked_controller",
    }
  );

  /* Wireless Terminals */
  // Basic
  event.recipes.minecraft.crafting_shaped(
    "toms_storage:ts.wireless_terminal",
    ["rdl", "bbb"],
    {
      r: "create:redstone_link",
      d: "create:display_board",
      l: "create:display_link",
      b: "#minecraft:wooden_buttons",
    }
  );

  // Advanced
  event.recipes.minecraft.crafting_shaped(
    "toms_storage:ts.adv_wireless_terminal",
    [" e ", "sws", " n "],
    {
      e: "minecraft:ender_eye",
      s: "create:sturdy_sheet",
      w: "toms_storage:ts.wireless_terminal",
      n: "minecraft:netherite_ingot",
    }
  );

  /* Other */
  // Inventory Connector
  event.recipes.minecraft.crafting_shaped(
    "toms_storage:ts.inventory_connector",
    ["m", "c", "o"],
    {
      m: "create:precision_mechanism",
      c: "create:smart_chute",
      o: "create:content_observer",
    }
  );

  // Paint Kit
  event.recipes.kubejs
    .shaped("toms_storage:ts.paint_kit", ["ds", "nw"], {
      d: "#forge:dyes",
      s: "create:iron_sheet",
      w: "minecraft:water_bucket",
      n: "minecraft:iron_nugget",
    })
    .replaceIngredient("minecraft:water_bucket", "minecraft:bucket");
});
