import TextAnimation3 from "@/components/AnimationPage/TextAnimation3";
import Timer from "@/components/AnimationPage/Timer";
import { videoSources } from "@/data/video";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = videoSources.find((v) => v.slug === slug);

  if (!data) return <div>Video tidak ditemukan</div>;

  return (
    <div className="bg-warna-hitam flex h-screen w-screen flex-col items-center justify-center">
      <TextAnimation3 />
      <Timer link={data.code} />
    </div>
  );
}
