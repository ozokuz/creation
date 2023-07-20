const C = "colorfulazaleas";
const E = "environmental";

const woodtypes = {
  tecal_azalea: C,
  fiss_azalea: C,
  roze_azalea: C,
  azule_azalea: C,
  bright_azalea: C,
  walnut_azalea: C,
  titanium_azalea: C,
  willow: E,
  cherry: E,
  wisteria: E,
  ancient: "quark",
};

ServerEvents.recipes((event) => {
  Object.entries(woodtypes).forEach(([type, mod]) => {
    // Log to Stripped Log
    event.recipes.create.cutting(
      [`${mod}:stripped_${type}_log`],
      [`${mod}:${type}_log`]
    );

    // Wood to Stripped Wood
    event.recipes.create.cutting(
      [`${mod}:stripped_${type}_wood`],
      [`${mod}:${type}_wood`]
    );

    // Stripped Log to Planks
    event.recipes.create.cutting(
      [`6x ${mod}:${type}_planks`],
      [`${mod}:stripped_${type}_log`]
    );

    // Stripped Wood to Planks
    event.recipes.create.cutting(
      [`6x ${mod}:${type}_planks`],
      [`${mod}:stripped_${type}_wood`]
    );
  });

  // Stem to Stripped Stem
  event.recipes.create.cutting(
    ["gardens_of_the_dead:stripped_soulblight_stem"],
    ["gardens_of_the_dead:soulblight_stem"]
  );

  // Hyphae to Stripped Hyphae
  event.recipes.create.cutting(
    ["gardens_of_the_dead:stripped_soulblight_hyphae"],
    ["gardens_of_the_dead:soulblight_hyphae"]
  );

  // Stripped Stem to Planks
  event.recipes.create.cutting(
    ["6x gardens_of_the_dead:soulblight_planks"],
    ["gardens_of_the_dead:soulblight_stem"]
  );

  // Stripped Hyphae to Planks
  event.recipes.create.cutting(
    ["6x gardens_of_the_dead:soulblight_planks"],
    ["gardens_of_the_dead:stripped_soulblight_hyphae"]
  );

  // Log to Stripped Log
  event.recipes.create.cutting(
    ["quark:stripped_bamboo_block"],
    ["quark:bamboo_block"]
  );

  // Stripped Log to Planks
  event.recipes.create.cutting(
    ["3x quark:bamboo_planks"],
    ["quark:stripped_bamboo_block"]
  );
});
