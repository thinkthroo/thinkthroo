import PendingIcon from "./icons/pending";

export default function StepsSkeleton() {
  return (
    <div className="flex flex-col gap-2">
      {Array.from(Array(4).keys()).map((item, index) => (
        <div className="animate-pulse" key={index}>
          <div className="aa cq du ia kt ph rd" aria-hidden="true"></div>
          <div className="bqa ab lx yx">
            <PendingIcon />

            <span className="jx lx tq yr">
              <span className="avz awd bg-slate-200 dark:bg-slate-700 rounded h-[30px] block w-[250px]"></span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
