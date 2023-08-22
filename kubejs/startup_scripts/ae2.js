StartupEvents.registry("item", (event) => {
  event.create("incomplete_printed_silicon", "create:sequenced_assembly");
  event.create("incomplete_logic_processor", "create:sequenced_assembly");
  event.create("incomplete_calculation_processor", "create:sequenced_assembly");
  event.create("incomplete_engineering_processor", "create:sequenced_assembly");
});
