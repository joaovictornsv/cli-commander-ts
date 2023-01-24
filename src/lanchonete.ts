import { Command } from 'commander'

const program = new Command()

// Using command with arguments
program
  .command('pizza')
  .description('Pedir uma pizza')
  .argument('<string>', 'Sabor da pizza')
  .option('--sauce', 'Opção de Salsa')
  .action((str, options) => {
    if (options.sauce === true)
      console.log(`Preparando uma pizza de ${str} com salsa!`);
    else
      console.log(`Preparando uma pizza de ${str}!`);
  })

// Using command with options
program
  .command('milkshake')
  .description('Pedir um milkshake')
  .argument('<string>', 'Sabor do milkshake')
  .option('-c, --chantilly', 'Opção de Chantilly')
  .action((str, options) => {
    if (options.chantilly === false)
      console.log(`Preparando um milkshake de ${str} com chantilly!`);
    else
      console.log(`Preparando um milkshake de ${str}!`);
  })

program.version('1', '-v, --version')
program.parse()
