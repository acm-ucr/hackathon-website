import Release from "@/components/Release";
import RELEASES from "@/data/Releases";
import Live from "@/components/live/Live";

const Page = () => {
  return (
    <div className="w-full">
      <Release release={RELEASES.LIVE}>
        <Live />
      </Release>
    </div>
  );
};

export default Page;

export const dynamic = "force-dynamic";
