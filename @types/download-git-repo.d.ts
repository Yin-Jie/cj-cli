declare module 'download-git-repo' {
  export default function download(repo: string, destination: string, options?: any): Promise<void>
}
