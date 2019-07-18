require.context('../src/assets/css', true, /.scss$/).keys.forEach((filename) => {
  require(`../src/assets/css/${filename}.scss`)
})