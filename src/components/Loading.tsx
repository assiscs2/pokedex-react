import { SpinnerGap } from "phosphor-react";

export function Loading() {
  return (
    <div className="flex items-center justify-center mt-[32vh] gap-2">
      <p>Loading</p> <SpinnerGap size={32} color="#c6c4cc" weight="fill" className="animate-spin"/>
    </div>
  );
}
