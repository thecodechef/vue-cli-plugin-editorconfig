module.exports = [
  {
    name: 'isRoot',
    type: 'confirm',
    message: 'Is this in the root?',
    default: true
  },
  {
    name: 'setCharset',
    type: 'list',
    message: 'What is the charset?',
    choices: ['latin1','utf-8','utf-16be','utf-16le','utf-8-bom'],
    default: 'utf-8'
  },
  {
    name: 'setLineEndings',
    type: 'list',
    message: 'Would you like to set the end_of_line option?',
    choices: ['lf','crlf','cr'],
    default: 'lf'
  },
  {
    name: 'setIndentStyle',
    type: 'list',
    message: 'Do you use spaces or tabs?',
    choices: ['space','tab'],
    default: 'space'
  },
  {
    name: 'setIndentSize',
    type: 'input',
    message: 'How many spaces or tabs to use?',
    default: 2
  },
  {
    name: 'setInsertFinalNewline',
    type: 'confirm',
    message: 'Insert a newline when saving or files?',
    default: true
  },
  {
    name: 'setTrimTrailingWhitespace',
    type: 'confirm',
    message: 'Trim all Whitespace at the end of a line?',
    default: true
  },
]