export default function TThrooHeader() {
    return (
        <a href="/" className="flex items-center gap-2">
          <img
              src="/logo.svg"
              alt="Hero"
              className="h-6 w-6 text-primary"
              width={120}
              height={120}
          />
          <span className="text-primary font-semibold text-lg">TThroo</span>
        </a>
    )
}