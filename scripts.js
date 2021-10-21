const linksSocialMedia = {
  linkedin: '/in/andreibissolotti',
  github: 'andreibissolotti',
  instagram: 'andrei.bissolotti'
}

function changeSocialMediaLinks() {
  for (li of socialMedias.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfo() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      avatar.children[1].src = data.avatar_url
      userName.textContent = data.name
      githubLogin.textContent = data.login
      githubLogin.href = data.html_url
      bio.textContent = data.bio
    })
}

getGitHubProfileInfo()
