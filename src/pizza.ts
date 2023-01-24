import { Command, Option } from 'commander'

const program = new Command()

program
  .option('--cheese <type>', 'cheese flavour')
  .option('--no-cheese', 'plain with no cheese') // Sets cheese to false
  .option('--no-sauce', 'Remove sauce') // Sets sauce to false, if dont passe, sauce always be true

program
  .addOption(
    new Option('--cheese <type>', 'cheese flavour')
      .conflicts('mini')
      .choices(['mozzarella', 'kingdom'])
      .default('mozzarella')
      .argParser((str) => str.toLocaleUpperCase())
  )
  .option('--mini', 'Mini Pizza')

program.parse()

console.log(program.opts());
