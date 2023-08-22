ServerEvents.recipes((event) => {
  /* REMOVALS */
  // Remove Inscriber
  event.remove({ type: "ae2:inscriber" });
  event.remove({ output: "ae2:inscriber" });
  // Remove Charger
  event.remove({ type: "ae2:charger" });
  event.remove({ output: "ae2:charger" });
  // Remove Infinity Cells
  event.remove({ output: "expatternprovider:infinity_cell" });

  /* DUPE FIXES */
  // 4 Quartz -> 9 Quartz
  event.remove({ id: "ae2:decorative/quartz_block" });
  event.recipes.minecraft.crafting_shaped(
    "ae2:quartz_block",
    ["QQQ", "QQQ", "QQQ"],
    { Q: "ae2:certus_quartz_crystal" }
  );
  event.remove({
    type: "minecraft:crafting_shapeless",
    output: "ae2:certus_quartz_crystal",
  });
  event.recipes.minecraft.crafting_shapeless("9x ae2:certus_quartz_crystal", [
    "ae2:quartz_block",
  ]);

  /* CABLES */
  // Quartz Fiber
  event.remove({ output: "ae2:quartz_fiber" });
  event.recipes.minecraft.crafting_shaped("ae2:quartz_fiber", ["GQG"], {
    G: "#forge:glass",
    Q: "#forge:dusts/certus_quartz",
  });

  // Fluix Glass Cable
  event.remove({ id: "ae2:network/cables/glass_fluix" });
  event.recipes.minecraft.crafting_shaped("4x ae2:fluix_glass_cable", ["QFQ"], {
    Q: "ae2:quartz_fiber",
    F: "ae2:fluix_crystal",
  });
  // Fluix Smart Cable
  event.remove({ id: "ae2:network/cables/smart_fluix" });
  event.remove({ id: "ae2:network/cables/dense_smart_fluix" });
  event.recipes.minecraft.crafting_shaped(
    "8x ae2:fluix_smart_cable",
    ["CCC", "CDC", "CCC"],
    {
      C: "ae2:fluix_covered_cable",
      D: "supplementaries:crystal_display",
    }
  );

  /* PROCESSORS */

  // Presses
  // Logic Press
  event.recipes.create
    .deploying(
      ["ae2:logic_processor_press"],
      ["minecraft:iron_block", "ae2:logic_processor_press"]
    )
    .keepHeldItem();
  /* event.recipes.gtceu
    .forming_press("clone_logic_press")
    .notConsumable("ae2:logic_processor_press")
    .itemInputs("minecraft:iron_block")
    .outputItems("ae2:logic_processor_press")
    .duration(120)
    .EUt(32); */
  // Calculation Press
  event.recipes.create
    .deploying(
      ["ae2:calculation_processor_press"],
      ["minecraft:iron_block", "ae2:calculation_processor_press"]
    )
    .keepHeldItem();
  /* event.recipes.gtceu
    .forming_press("clone_calculation_press")
    .notConsumable("ae2:calculation_processor_press")
    .itemInputs("minecraft:iron_block")
    .outputItems("ae2:calculation_processor_press")
    .duration(120)
    .EUt(32); */
  // Engineering Press
  event.recipes.create
    .deploying(
      ["ae2:engineering_processor_press"],
      ["minecraft:iron_block", "ae2:engineering_processor_press"]
    )
    .keepHeldItem();
  /* event.recipes.gtceu
    .forming_press("clone_engineering_press")
    .notConsumable("ae2:engineering_processor_press")
    .itemInputs("minecraft:iron_block")
    .outputItems("ae2:engineering_processor_press")
    .duration(120)
    .EUt(32); */
  // Silicon Press
  event.recipes.create
    .deploying(
      ["ae2:silicon_press"],
      ["minecraft:iron_block", "ae2:silicon_press"]
    )
    .keepHeldItem();
  /* event.recipes.gtceu
    .forming_press("clone_silicon_press")
    .notConsumable("ae2:silicon_press")
    .itemInputs("minecraft:iron_block")
    .outputItems("ae2:silicon_press")
    .duration(120)
    .EUt(32); */

  // Processor
  // Printed Silicon
  const incompleteSilicon = "kubejs:incomplete_printed_silicon";
  event.recipes.create
    .sequenced_assembly(["ae2:printed_silicon"], "ae2:silicon", [
      event.recipes.create.cutting(incompleteSilicon, incompleteSilicon),
      event.recipes.create
        .deploying(incompleteSilicon, [incompleteSilicon, "ae2:silicon_press"])
        .keepHeldItem(),
      event.recipes.create.filling(incompleteSilicon, [
        incompleteSilicon,
        {
          amount: 25,
          fluid: "create:potion",
          nbt: { Bottle: "REGULAR", Potion: "minecraft:awkward" },
        },
      ]),
    ])
    .transitionalItem(incompleteSilicon)
    .loops(1);
  // Processor Logic
  const incompleteLogic = "kubejs:incomplete_logic_processor";
  event.recipes.create
    .sequenced_assembly(["ae2:logic_processor"], "#forge:ingots/electrum", [
      event.recipes.create
        .deploying(
          [incompleteLogic],
          [incompleteLogic, "ae2:logic_processor_press"]
        )
        .keepHeldItem(),
      event.recipes.create.deploying(incompleteLogic, [
        incompleteLogic,
        "ae2:printed_silicon",
      ]),
      // event.recipes.create.pressing(incompleteLogic, incompleteLogic),
      /* event.recipes.create.filling(incompleteLogic, [
        incompleteLogic,
        Fluid.water(250),
      ]), */
      event.recipes.create.deploying(incompleteLogic, [
        incompleteLogic,
        "#forge:wires/gold",
      ]),
      event.recipes.create.deploying(incompleteLogic, [
        incompleteLogic,
        "minecraft:redstone",
      ]),
      event.recipes.create.deploying(incompleteLogic, [
        incompleteLogic,
        "pneumaticcraft:plastic",
      ]),
      event.recipes.create.pressing(incompleteLogic, incompleteLogic),
    ])
    .transitionalItem(incompleteLogic)
    .loops(1);
  // Processor Calculation
  const incompleteCalculation = "kubejs:incomplete_calculation_processor";
  event.recipes.create
    .sequenced_assembly(
      ["ae2:calculation_processor"],
      "#forge:gems/certus_quartz",
      [
        event.recipes.create
          .deploying(
            [incompleteCalculation],
            [incompleteCalculation, "ae2:calculation_processor_press"]
          )
          .keepHeldItem(),
        event.recipes.create.deploying(incompleteCalculation, [
          incompleteCalculation,
          "ae2:printed_silicon",
        ]),
        /* event.recipes.create.pressing(
          incompleteCalculation,
          incompleteCalculation
        ), */
        /* event.recipes.create.filling(incompleteCalculation, [
          incompleteCalculation,
          Fluid.water(250),
        ]), */
        event.recipes.create.deploying(incompleteCalculation, [
          incompleteCalculation,
          "#forge:wires/gold",
        ]),
        event.recipes.create.deploying(incompleteCalculation, [
          incompleteCalculation,
          "minecraft:redstone",
        ]),
        event.recipes.create.deploying(incompleteCalculation, [
          incompleteCalculation,
          "pneumaticcraft:plastic",
        ]),
        event.recipes.create.pressing(
          incompleteCalculation,
          incompleteCalculation
        ),
      ]
    )
    .transitionalItem(incompleteCalculation)
    .loops(1);
  // Processor Engineering
  const incompleteEngineering = "kubejs:incomplete_engineering_processor";
  event.recipes.create
    .sequenced_assembly(["ae2:engineering_processor"], "minecraft:diamond", [
      event.recipes.create
        .deploying(
          [incompleteEngineering],
          [incompleteEngineering, "ae2:engineering_processor_press"]
        )
        .keepHeldItem(),
      event.recipes.create.deploying(incompleteEngineering, [
        incompleteEngineering,
        "ae2:printed_silicon",
      ]),
      /* event.recipes.create.pressing(
        incompleteEngineering,
        incompleteEngineering
      ), */
      /* event.recipes.create.filling(incompleteEngineering, [
        incompleteEngineering,
        Fluid.water(250),
      ]), */
      event.recipes.create.deploying(incompleteEngineering, [
        incompleteEngineering,
        "#forge:wires/gold",
      ]),
      event.recipes.create.deploying(incompleteEngineering, [
        incompleteEngineering,
        "minecraft:redstone",
      ]),
      event.recipes.create.deploying(incompleteEngineering, [
        incompleteEngineering,
        "pneumaticcraft:plastic",
      ]),
      event.recipes.create.pressing(
        incompleteEngineering,
        incompleteEngineering
      ),
    ])
    .transitionalItem(incompleteEngineering)
    .loops(1);

  /* INGREDIENTS */

  // Cores
  // Formation Core
  event.remove({ output: "ae2:formation_core" });
  event.recipes.minecraft.crafting_shapeless("ae2:formation_core", [
    "ae2:logic_processor",
    "create:electron_tube",
    "ae2:fluix_dust",
    "#forge:gems/certus_quartz",
  ]);
  // Annihilation Core
  event.remove({ output: "ae2:annihilation_core" });
  event.recipes.minecraft.crafting_shapeless("ae2:annihilation_core", [
    "ae2:logic_processor",
    "create:electron_tube",
    "ae2:fluix_dust",
    "minecraft:quartz",
  ]);

  // Quartz Glass
  event.remove({ output: "ae2:quartz_glass" });
  event.recipes.create
    .mixing("4x ae2:quartz_glass", [
      "4x #forge:glass",
      "5x #forge:dusts/certus_quartz",
    ])
    .superheated();

  // Vibrant Quartz Glass
  event.remove({ output: "ae2:quartz_vibrant_glass" });
  event.recipes.create
    .mixing("ae2:quartz_vibrant_glass", [
      "2x minecraft:glowstone_dust",
      "ae2:quartz_glass",
    ])
    .superheated();

  /* ESSENTIALS */

  // Energy Acceptor
  event.remove({ id: "ae2:network/blocks/energy_energy_acceptor" });
  event.recipes.minecraft.crafting_shaped(
    "ae2:energy_acceptor",
    ["SGS", "GCG", "SGS"],
    {
      S: "#forge:plates/steel",
      G: "#forge:glass",
      C: "immersiveengineering:coil_mv",
    }
  );

  // ME Controller
  event.remove({ output: "ae2:controller" });
  event.recipes.create.mechanical_crafting(
    "ae2:controller",
    [" STS ", "SFDFS", "TDEDT", "SFDFS", " STS "],
    {
      S: "ae2:sky_stone_block",
      T: "#forge:storage_blocks/steel",
      F: "ae2:fluix_block",
      D: "ae2:fluix_smart_dense_cable",
      E: "ae2:engineering_processor",
    }
  );
  // Crystal Growth Accelerator
  event.remove({ output: "ae2:quartz_growth_accelerator" });
  event.recipes.minecraft.crafting_shaped(
    "ae2:quartz_growth_accelerator",
    ["SCS", "GFG", "SCS"],
    {
      S: "#forge:plates/steel",
      C: "ae2:fluix_glass_cable",
      G: "ae2:quartz_glass",
      F: "ae2:fluix_block",
    }
  );
  // Energy Cell
  event.remove({ output: "ae2:energy_cell" });
  event.recipes.minecraft.crafting_shaped(
    "ae2:energy_cell",
    ["SQS", "CGC", "SQS"],
    {
      S: "#forge:plates/steel",
      Q: "#forge:storage_blocks/certus_quartz",
      C: "immersiveengineering:coil_mv",
      G: "#forge:glass",
    }
  );
  // Dense Energy Cell
  event.remove({ output: "ae2:dense_energy_cell" });
  event.recipes.create.compacting(
    ["ae2:dense_energy_cell"],
    ["8x ae2:energy_cell"]
  );

  /* STORAGE */

  // Item Cell Housing
  event.remove({ id: "ae2:network/cells/item_cell_housing" });
  event.recipes.minecraft.crafting_shaped(
    "ae2:item_cell_housing",
    ["QSQ", "RER", "SSS"],
    {
      Q: "ae2:quartz_glass",
      S: "#forge:plates/steel",
      R: "minecraft:redstone",
      E: "create:electron_tube",
    }
  );
  // Fluid Cell Housing
  event.remove({ id: "ae2:network/cells/fluid_cell_housing" });
  event.recipes.minecraft.crafting_shaped(
    "ae2:fluid_cell_housing",
    ["QBQ", "RER", "BBB"],
    {
      Q: "ae2:quartz_glass",
      B: "#forge:plates/bronze",
      R: "minecraft:redstone",
      E: "create:electron_tube",
    }
  );

  // ME Chest
  event.remove({ output: "ae2:chest" });
  event.recipes.minecraft.crafting_shaped("ae2:chest", ["GTG", "CEC", "SFS"], {
    G: "#forge:glass",
    T: "ae2:terminal",
    C: "ae2:fluix_glass_cable",
    E: "create:electron_tube",
    S: "#forge:plates/steel",
    F: "ae2:fluix_crystal",
  });
  // ME Drive
  event.remove({ output: "ae2:drive" });
  event.recipes.minecraft.crafting_shaped("ae2:drive", ["SPS", "CEC", "SPS"], {
    S: "#forge:plates/steel",
    P: "ae2:engineering_processor",
    C: "ae2:fluix_glass_cable",
    E: "create:electron_tube",
  });
  // ME Storage Bus
  event.remove({ output: "ae2:storage_bus" });
  event.recipes.minecraft.crafting_shapeless("ae2:storage_bus", [
    "#ae2:interface",
    "create:smart_chute",
  ]);

  /* IO */

  // ME Import Bus
  event.remove({ output: "ae2:import_bus" });
  event.recipes.minecraft.crafting_shapeless("ae2:import_bus", [
    "ae2:annihilation_core",
    "create:mechanical_arm",
  ]);
  // ME Export Bus
  event.remove({ output: "ae2:export_bus" });
  event.recipes.minecraft.crafting_shapeless("ae2:export_bus", [
    "ae2:formation_core",
    "create:mechanical_arm",
  ]);
  // ME Interface
  event.remove({ id: "ae2:network/blocks/interfaces_interface" });
  event.recipes.minecraft.crafting_shaped(
    "ae2:interface",
    ["SGS", "ACF", "SGS"],
    {
      S: "#forge:plates/steel",
      G: "#forge:glass",
      A: "ae2:annihilation_core",
      F: "ae2:formation_core",
      C: "create:smart_chute",
    }
  );

  /* AUTO CRAFTING */

  // Crafting Unit
  event.remove({ output: "ae2:crafting_unit" });
  event.recipes.minecraft.crafting_shaped(
    "ae2:crafting_unit",
    ["SCS", "FLF", "SCS"],
    {
      S: "#forge:plates/steel",
      C: "ae2:calculation_processor",
      F: "ae2:fluix_glass_cable",
      L: "ae2:logic_processor",
    }
  );

  // Molecular Assembler
  event.remove({ output: "ae2:molecular_assembler" });
  event.recipes.minecraft.crafting_shaped(
    "ae2:molecular_assembler",
    ["SGS", "ACF", "SGS"],
    {
      S: "#forge:plates/steel",
      G: "ae2:quartz_glass",
      A: "ae2:annihilation_core",
      C: "create:mechanical_crafter",
      F: "ae2:formation_core",
    }
  );

  // ME Pattern Provider
  event.remove({ id: "ae2:network/blocks/pattern_providers_interface" });
  event.recipes.minecraft.crafting_shaped(
    "ae2:pattern_provider",
    ["SCS", "AMF", "SCS"],
    {
      S: "#forge:plates/steel",
      C: "create:mechanical_crafter",
      A: "ae2:annihilation_core",
      M: "create:mechanical_arm",
      F: "ae2:formation_core",
    }
  );

  // ME Requester
  event.remove({ output: "merequester:requester" });
  event.recipes.minecraft.crafting_shaped(
    "merequester:requester",
    ["SIS", "CEC", "SSS"],
    {
      S: "#forge:plates/steel",
      I: "#ae2:interface",
      C: "ae2:crafting_accelerator",
      E: "ae2:engineering_processor",
    }
  );

  /* WIRELESS */

  // Wireless Receiver
  event.remove({ output: "ae2:wireless_receiver" });
  event.recipes.minecraft.crafting_shaped(
    "ae2:wireless_receiver",
    [" P ", "SFS", " S "],
    {
      P: "ae2:fluix_pearl",
      S: "#forge:plates/steel",
      F: "ae2:quartz_fiber",
    }
  );
  // Wireless Booster Card
  event.remove({ output: "ae2:wireless_booster" });
  event.recipes.minecraft.crafting_shaped(
    "ae2:wireless_booster",
    ["ECE", "SFS", " S "],
    {
      E: "#forge:dusts/ender_pearl",
      C: "#forge:dusts/certus_quartz",
      S: "#forge:plates/steel",
      F: "ae2:fluix_crystal",
    }
  );
  // ME Security Terminal
  event.remove({ output: "ae2:security_station" });
  event.recipes.minecraft.crafting_shaped(
    "ae2:security_station",
    ["SMS", "FCF", "SES"],
    {
      S: "#forge:plates/steel",
      M: "ae2:chest",
      F: "ae2:fluix_glass_cable",
      C: "ae2:cell_component_16k",
      E: "ae2:engineering_processor",
    }
  );
  // ME Quantum Ring
  event.remove({ output: "ae2:quantum_ring" });
  event.recipes.minecraft.crafting_shaped(
    "ae2:quantum_ring",
    ["SLS", "ECD", "SLS"],
    {
      S: "#forge:plates/steel",
      L: "ae2:logic_processor",
      E: "ae2:engineering_processor",
      C: "ae2:energy_cell",
      D: "#ae2:smart_dense_cable",
    }
  );

  /* OTHER */

  // Illuminated Panel
  event.remove({ id: "ae2:network/parts/panels_semi_dark_monitor" });
  event.recipes.minecraft.crafting_shaped(
    "ae2:semi_dark_monitor",
    [" CG", "SRG", " CG"],
    {
      C: "#forge:wires/copper",
      G: "ae2:quartz_vibrant_glass",
      S: "#forge:plates/steel",
      R: "minecraft:redstone",
    }
  );

  // Basic Card
  event.remove({ output: "ae2:basic_card" });
  event.recipes.minecraft.crafting_shaped(
    "ae2:basic_card",
    ["GS ", "RCS", "GS "],
    {
      G: "#forge:wires/gold",
      S: "#forge:plates/steel",
      R: "minecraft:redstone",
      C: "ae2:calculation_processor",
    }
  );
  // Advanced Card
  event.remove({ output: "ae2:advanced_card" });
  event.recipes.minecraft.crafting_shaped(
    "ae2:advanced_card",
    ["ES ", "RCS", "ES "],
    {
      E: "#forge:wires/electrum",
      S: "#forge:plates/steel",
      R: "minecraft:redstone",
      C: "ae2:calculation_processor",
    }
  );
});
