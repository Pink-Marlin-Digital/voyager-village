module.exports = {
  prompt: ({ prompter, args }) =>
    prompter.prompt({
      type: 'input',
      name: 'queryName',
      message: "What's the name of the graph query?",
    }),
};
