export default function MdxSkeleton() {
    return (
      <div>
        {Array.from(Array(10).keys()).map(() => (
          <div className="animate-pulse">
            <span className="bg-slate-200 dark:bg-slate-700 rounded h-[30px] block w-[35vw] mt-1"></span>
          </div>
        ))}
      </div>
    );
  }