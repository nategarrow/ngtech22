exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions

  if (page.path === `/`) {
    page.context.layout = "home"
    createPage(page)
  } else {
    page.context.layout = page.path
  }
}
