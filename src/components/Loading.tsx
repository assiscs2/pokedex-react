import { SpinnerGap } from "phosphor-react"

export function Loading() {

  return (

    <div
      className="flex items-center justify-center gap-2 
    h-[100vh] -mt-44
    "
    >
      <p>Loading</p>
      <SpinnerGap
        size={32}
        color="#c6c4cc"
        weight="fill"
        className="animate-spin"
      />

    </div>
  )
}
