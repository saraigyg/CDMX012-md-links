/**
 * funcion main para que el usuario interaccione con el cli 
 * y además se lean los stats 
 * */ 
 const main = (args) => {
    const userPath = args[2].toString();
    const userOptions = {};
    userOptions.validate = args.slice(3).includes('--validate');
    userOptions.stats = args.slice(3).includes('--stats');
    userOptions.combination = userOptions.stats && userOptions.validate;
    console.log(args, userOptions);
  // los stats y la combinacion de stats y validate, llamando la funcion mdLinks
    const project = mdLinks(userPath, userOptions);
    project.then((rest) => { 
      if (userOptions.combination) {
       return totalLinks(rest), countUniqueLinks(rest), brokenLinks(rest);
      }
      else if (userOptions.stats) {
        return totalLinks(rest), countUniqueLinks(rest);
      }
      else {
        console.log(chalk.yellow.bold('Please write --help after your path given to see further options'));
      }
    }) .catch (error => {
      console.log(chalk.red.bold(error));
    });
  };
  
  //invocando la funcion main con argv de process 
  main(argv);