import GithubLogo2 from "./../assets/github-logo.svg"

export default function Footer() {
  return (
    <div className="flex items-center justify-center h-[4.5rem] w-[100vw] bg-red-500 gap-2 text-sm mt-4 text-gray-800 font-bold">

      <p>Projeto desenvolvido por Gustavo Assis</p>
      <span>-</span>
      <p>Github:</p>

      <a href="https://github.com/assiscs2"
        target="blank">
        <img src={GithubLogo2} className="h-6 w-6 text-yellow-400 hover:w-8 hover:h-8 transition-all duration-300" />
      </a>


    </div>
  )
}