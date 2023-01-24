import { Command } from 'commander'

const program = new Command()

function addSr(value: string) {
  return `Sr.${value}`
}

// Using options (arguments)
program
  .option('-n, --name <type>', 'Name', addSr, 'João')

program.parse()

const options = program.opts()
const name = options.name
console.log(`Hello ${name}!`);
