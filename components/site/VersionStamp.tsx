import { cn } from "@/components/site/tailwind";
import { buildInfo } from "@/data/buildInfo";

type VersionStampProps = Readonly<{
  className?: string;
}>;

export function VersionStamp({ className }: VersionStampProps) {
  return (
    <p className={cn("text-xs leading-[1.6] text-white/45", className)}>
      v{buildInfo.version} · updated {buildInfo.updatedAtLabel}
    </p>
  );
}
