
hexo.extend.tag.register("githubreader", function (args, content) {

    let repoName = args[0];
    let frameHeight = args[1];
    let frameWidth = args[2];

    return `
      <iframe
        width="${frameWidth}"
        height="${frameHeight}"
        name="${repoName}"
        src="https://github1s.com/${repoName}">
        </iframe>
    `
})



