import Link from "next/link"
import Image from "next/image"

export default function SiteNameAndLogo() {

return (
<Link href="/" className="flex items-center gap-2" prefetch={false}>
    <Image
        src="/logo.svg"
        alt="Hero"
        className="h-6 w-6 text-primary"
        width={120}
        height={120}
    />
    <span className="text-primary font-semibold text-lg">TThroo</span>
</Link>
)
}