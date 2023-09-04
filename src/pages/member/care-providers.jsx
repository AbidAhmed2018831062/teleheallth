import { AppBarLayout } from "../../components/appbar-layout";
import { CareProviderCard } from "../../components/care-provider-card";

export function CareProviders() {
  return (
    <AppBarLayout>
      <div>
        <div className="flex gap-[3.3rem] w-full flex-wrap">
          {new Array(6).fill(1).map((m) => (
            <CareProviderCard />
          ))}
        </div>
      </div>
    </AppBarLayout>
  );
}
