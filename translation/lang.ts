export interface Nav {
  yearly: string
  tools: string
  blog: string
}
export interface Index {
  s1: {
    projects: string
    posts: string
    tools: string
  }
  s2: {
    title: string
    btn: string
  }
  s3: {
    title: string
    btn: string
  }
  s4: {
    title: string
    btn: string
  }
}
export interface Posts {
  noPosts: string
  noProjects: string
}

export default abstract class Language {
  nav!: Nav
  index!: Index
  posts!: Posts
  loader!: string
}
