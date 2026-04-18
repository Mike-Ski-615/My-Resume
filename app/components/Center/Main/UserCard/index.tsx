import { ModeToggle } from "@/components/ModeToggle";
import VisitorCount from "@/components/Center/Main/VisitorCount";
import { RoleCycle } from "@/components/Center/Main/RoleCycle";
import { useSiteContent } from "@/hooks/useSiteContent";
import { siteConfig } from "@/site.config";

export default function UserCard() {
  const {
    home: { profile },
  } = useSiteContent();

  return (
    <div className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 p-4 sm:gap-6 sm:p-5">
      <div className="flex min-w-0 items-center gap-4 sm:items-end sm:gap-5">
        <div className="size-16 shrink-0 overflow-hidden rounded-[1.35rem] border border-border/70 bg-muted/30 p-1 shadow-[0_20px_45px_-32px_rgba(15,23,42,0.28)] sm:size-24 sm:rounded-[1.9rem]">
          <img
            src={siteConfig.avatarSrc}
            alt={profile.avatarAlt}
            className="block size-full rounded-[1rem] object-cover sm:rounded-[1.5rem]"
          />
        </div>

        <div className="flex min-w-0 flex-col justify-center overflow-hidden sm:justify-end">
          <h1 className="type-display truncate text-xl font-bold leading-none sm:text-[2.15rem]">
            {profile.name}
          </h1>
          <div className="mt-1.5 max-w-full overflow-hidden [&>div]:max-w-full">
            <RoleCycle roles={profile.roles} />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end justify-between self-stretch">
        <ModeToggle />

        <VisitorCount />
      </div>
    </div>
  );
}
